"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  vibeQuestions,
  optionalSections,
  dreamQuestion,
  getAllQuestions,
} from "@/data/quiz";
import { computeScores, rankColleges } from "@/lib/matching";
import { saveProfile, createProfile } from "@/lib/storage";
import { QuizQuestion, QuizSection } from "@/lib/types";

type Phase =
  | "vibe"
  | "deeper-prompt"
  | "section-intro"
  | "section-q"
  | "dream"
  | "processing";

export default function QuizPage() {
  const router = useRouter();

  const [phase, setPhase] = useState<Phase>("vibe");
  const [vibeIndex, setVibeIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sectionQIndex, setSectionQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [openText, setOpenText] = useState("");
  const [customText, setCustomText] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  // ──────────────── derived state ────────────────

  const currentSection: QuizSection | undefined =
    optionalSections[sectionIndex];

  const currentQuestion: QuizQuestion | undefined =
    phase === "vibe"
      ? vibeQuestions[vibeIndex]
      : phase === "section-q" && currentSection
        ? currentSection.questions[sectionQIndex]
        : phase === "dream"
          ? dreamQuestion
          : undefined;

  // total questions the user will ever see (for the progress bar)
  const totalSteps =
    vibeQuestions.length + optionalSections.length + 1; // +1 for dream
  const currentStep =
    phase === "vibe"
      ? vibeIndex + 1
      : phase === "deeper-prompt"
        ? vibeQuestions.length + 1
        : phase === "section-intro" || phase === "section-q"
          ? vibeQuestions.length + 1 + sectionIndex
          : phase === "dream"
            ? totalSteps
            : totalSteps;
  const progress = (currentStep / totalSteps) * 100;

  // ──────────────── handlers ────────────────

  function resetCustom() {
    setShowCustomInput(false);
    setCustomText("");
  }

  function advanceAfterVibe() {
    if (vibeIndex < vibeQuestions.length - 1) {
      setVibeIndex((i) => i + 1);
    } else {
      setPhase("deeper-prompt");
    }
  }

  function advanceAfterSectionQ() {
    if (
      currentSection &&
      sectionQIndex < currentSection.questions.length - 1
    ) {
      setSectionQIndex((i) => i + 1);
    } else {
      goToNextSection();
    }
  }

  function goToNextSection() {
    const next = sectionIndex + 1;
    if (next < optionalSections.length) {
      setSectionIndex(next);
      setSectionQIndex(0);
      setPhase("section-intro");
    } else {
      setPhase("dream");
    }
  }

  function handleMCSelect(label: string) {
    resetCustom();
    const newAnswers = { ...answers, [currentQuestion!.id]: label };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (phase === "vibe") advanceAfterVibe();
      else if (phase === "section-q") advanceAfterSectionQ();
    }, 300);
  }

  function handleCustomSubmit() {
    if (!customText.trim()) return;
    const newAnswers = {
      ...answers,
      [currentQuestion!.id]: customText.trim(),
    };
    setAnswers(newAnswers);
    resetCustom();

    setTimeout(() => {
      if (phase === "vibe") advanceAfterVibe();
      else if (phase === "section-q") advanceAfterSectionQ();
    }, 300);
  }

  function handleDreamSubmit() {
    if (!openText.trim()) return;
    const finalAnswers = { ...answers, [dreamQuestion.id]: openText.trim() };
    setAnswers(finalAnswers);
    finishQuiz(finalAnswers);
  }

  function finishQuiz(finalAnswers: Record<string, string>) {
    setPhase("processing");
    const allQs = getAllQuestions();
    const scores = computeScores(finalAnswers, allQs);
    const ranked = rankColleges(scores);
    const profile = createProfile(finalAnswers, scores, ranked);
    saveProfile(profile);
    setTimeout(() => router.push("/drop"), 1500);
  }

  function handleBack() {
    resetCustom();
    if (phase === "vibe" && vibeIndex > 0) {
      setVibeIndex((i) => i - 1);
    } else if (phase === "deeper-prompt") {
      setPhase("vibe");
      setVibeIndex(vibeQuestions.length - 1);
    } else if (phase === "section-intro") {
      if (sectionIndex === 0) {
        setPhase("deeper-prompt");
      } else {
        const prevSection = optionalSections[sectionIndex - 1];
        setSectionIndex(sectionIndex - 1);
        setSectionQIndex(prevSection.questions.length - 1);
        setPhase("section-q");
      }
    } else if (phase === "section-q") {
      if (sectionQIndex > 0) {
        setSectionQIndex((i) => i - 1);
      } else {
        setPhase("section-intro");
      }
    } else if (phase === "dream") {
      // Go back to last section intro (or deeper-prompt if none)
      if (optionalSections.length > 0) {
        setSectionIndex(optionalSections.length - 1);
        setPhase("section-intro");
      } else {
        setPhase("deeper-prompt");
      }
    }
  }

  const canGoBack =
    (phase === "vibe" && vibeIndex > 0) ||
    phase === "deeper-prompt" ||
    phase === "section-intro" ||
    phase === "section-q" ||
    phase === "dream";

  // ──────────────── processing screen ────────────────

  if (phase === "processing") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
        <div className="glow-pulse h-20 w-20 rounded-full bg-accent/20" />
        <p className="text-xl font-semibold">Finding your match...</p>
        <p className="text-muted">This is going to be good.</p>
      </div>
    );
  }

  // ──────────────── deeper prompt screen ────────────────

  if (phase === "deeper-prompt") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="w-full max-w-lg">
          <div className="mb-2 flex items-center justify-between text-sm text-muted">
            <span>&nbsp;</span>
            {canGoBack && (
              <button
                onClick={handleBack}
                className="text-accent-light hover:underline"
              >
                Back
              </button>
            )}
          </div>
          <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-card-border">
            <div
              className="shimmer h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="fade-in-up text-center">
            <p className="mb-2 text-4xl">🧊</p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Nice! That was the tip of the iceberg.
            </h2>
            <p className="mb-8 text-muted">
              Want to dig deeper? These optional sections help us dial in
              your match. Skip any that don&apos;t speak to you.
            </p>
            <div className="grid gap-3">
              <button
                onClick={() => {
                  setSectionIndex(0);
                  setSectionQIndex(0);
                  setPhase("section-intro");
                }}
                className="w-full rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-light"
              >
                Let&apos;s go deeper
              </button>
              <button
                onClick={() => setPhase("dream")}
                className="w-full rounded-xl border border-card-border bg-card-bg px-6 py-3.5 text-base text-zinc-400 transition-all hover:border-accent/50 hover:text-zinc-200"
              >
                Skip to the end
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────── section intro screen ────────────────

  if (phase === "section-intro" && currentSection) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6">
        <div className="w-full max-w-lg">
          <div className="mb-2 flex items-center justify-between text-sm text-muted">
            <span>
              Section {sectionIndex + 1} of {optionalSections.length}
            </span>
            {canGoBack && (
              <button
                onClick={handleBack}
                className="text-accent-light hover:underline"
              >
                Back
              </button>
            )}
          </div>
          <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-card-border">
            <div
              className="shimmer h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="fade-in-up text-center">
            <p className="mb-2 text-4xl">{currentSection.emoji}</p>
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl">
              {currentSection.title}
            </h2>
            <p className="mb-8 text-muted">{currentSection.description}</p>
            <div className="grid gap-3">
              <button
                onClick={() => {
                  setSectionQIndex(0);
                  setPhase("section-q");
                }}
                className="w-full rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-light"
              >
                Dive in
              </button>
              <button
                onClick={goToNextSection}
                className="w-full rounded-xl border border-card-border bg-card-bg px-6 py-3.5 text-base text-zinc-400 transition-all hover:border-accent/50 hover:text-zinc-200"
              >
                Skip this one
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────── question screens (vibe, section-q, dream) ────────────────

  if (!currentQuestion) return null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-lg">
        {/* Progress bar */}
        <div className="mb-2 flex items-center justify-between text-sm text-muted">
          <span>
            {phase === "vibe"
              ? `${vibeIndex + 1} of ${vibeQuestions.length}`
              : phase === "section-q" && currentSection
                ? `${currentSection.title} -- Q${sectionQIndex + 1} of ${currentSection.questions.length}`
                : "Final question"}
          </span>
          {canGoBack && (
            <button
              onClick={handleBack}
              className="text-accent-light hover:underline"
            >
              Back
            </button>
          )}
        </div>
        <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-card-border">
          <div
            className="shimmer h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question */}
        <div key={currentQuestion.id} className="fade-in-up">
          <h2 className="mb-8 text-2xl font-bold leading-snug sm:text-3xl">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === "multiple-choice" &&
            currentQuestion.options && (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => {
                  const isSelected =
                    answers[currentQuestion.id] === option.label;
                  return (
                    <button
                      key={option.label}
                      onClick={() => handleMCSelect(option.label)}
                      className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-accent/50 hover:bg-accent/5 active:scale-[0.98] ${
                        isSelected
                          ? "border-accent bg-accent/10"
                          : "border-card-border bg-card-bg"
                      }`}
                    >
                      <span className="text-2xl">{option.emoji}</span>
                      <span className="text-base text-zinc-200">
                        {option.label}
                      </span>
                    </button>
                  );
                })}

                {/* Write your own option */}
                {!showCustomInput ? (
                  <button
                    onClick={() => setShowCustomInput(true)}
                    className={`flex items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-accent/50 hover:bg-accent/5 active:scale-[0.98] ${
                      answers[currentQuestion.id] &&
                      !currentQuestion.options!.some(
                        (o) => o.label === answers[currentQuestion.id]
                      )
                        ? "border-accent bg-accent/10"
                        : "border-card-border bg-card-bg"
                    }`}
                  >
                    <span className="text-2xl">✍️</span>
                    <span className="text-base text-zinc-200">
                      {answers[currentQuestion.id] &&
                      !currentQuestion.options!.some(
                        (o) => o.label === answers[currentQuestion.id]
                      )
                        ? answers[currentQuestion.id]
                        : "Write your own..."}
                    </span>
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      autoFocus
                      value={customText}
                      onChange={(e) => setCustomText(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleCustomSubmit()
                      }
                      placeholder="Type your answer..."
                      className="flex-1 rounded-xl border border-card-border bg-card-bg p-4 text-base text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent"
                    />
                    <button
                      onClick={handleCustomSubmit}
                      disabled={!customText.trim()}
                      className="rounded-xl bg-accent px-5 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light disabled:opacity-40"
                    >
                      Go
                    </button>
                  </div>
                )}
              </div>
            )}

          {currentQuestion.type === "open-ended" && (
            <div className="space-y-4">
              <textarea
                value={openText}
                onChange={(e) => setOpenText(e.target.value)}
                placeholder={currentQuestion.placeholder}
                rows={4}
                className="w-full resize-none rounded-xl border border-card-border bg-card-bg p-4 text-base text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent"
              />
              <button
                onClick={handleDreamSubmit}
                disabled={!openText.trim()}
                className="w-full rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-accent-light disabled:opacity-40 disabled:hover:bg-accent"
              >
                See My Match
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
