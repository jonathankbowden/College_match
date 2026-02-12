"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions } from "@/data/quiz";
import { computeScores, rankColleges } from "@/lib/matching";
import { saveProfile, createProfile } from "@/lib/storage";

export default function QuizPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [openText, setOpenText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = quizQuestions[currentQ];
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;
  const isLast = currentQ === quizQuestions.length - 1;

  function selectOption(label: string) {
    const newAnswers = { ...answers, [question.id]: label };
    setAnswers(newAnswers);

    if (!isLast) {
      setTimeout(() => setCurrentQ((q) => q + 1), 300);
    }
  }

  function handleOpenSubmit() {
    if (!openText.trim()) return;
    const newAnswers = { ...answers, [question.id]: openText.trim() };
    setAnswers(newAnswers);
    finishQuiz(newAnswers);
  }

  function finishQuiz(finalAnswers: Record<string, string>) {
    setIsSubmitting(true);
    const scores = computeScores(finalAnswers, quizQuestions);
    const ranked = rankColleges(scores);
    const profile = createProfile(finalAnswers, scores, ranked);
    saveProfile(profile);

    // Brief dramatic pause before redirect
    setTimeout(() => router.push("/drop"), 1500);
  }

  // If last MC question was just answered, auto-advance
  function handleMCSelect(label: string) {
    const newAnswers = { ...answers, [question.id]: label };
    setAnswers(newAnswers);

    if (isLast && question.type === "multiple-choice") {
      finishQuiz(newAnswers);
    } else {
      setTimeout(() => setCurrentQ((q) => q + 1), 300);
    }
  }

  if (isSubmitting) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
        <div className="glow-pulse h-20 w-20 rounded-full bg-accent/20" />
        <p className="text-xl font-semibold">Finding your match...</p>
        <p className="text-muted">This is going to be good.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-lg">
        {/* Progress bar */}
        <div className="mb-2 flex items-center justify-between text-sm text-muted">
          <span>
            {currentQ + 1} of {quizQuestions.length}
          </span>
          {currentQ > 0 && (
            <button
              onClick={() => setCurrentQ((q) => q - 1)}
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
        <div key={question.id} className="fade-in-up">
          <h2 className="mb-8 text-2xl font-bold leading-snug sm:text-3xl">
            {question.question}
          </h2>

          {question.type === "multiple-choice" && question.options && (
            <div className="grid gap-3">
              {question.options.map((option) => {
                const isSelected = answers[question.id] === option.label;
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
            </div>
          )}

          {question.type === "open-ended" && (
            <div className="space-y-4">
              <textarea
                value={openText}
                onChange={(e) => setOpenText(e.target.value)}
                placeholder={question.placeholder}
                rows={4}
                className="w-full resize-none rounded-xl border border-card-border bg-card-bg p-4 text-base text-white placeholder-zinc-500 outline-none transition-colors focus:border-accent"
              />
              <button
                onClick={handleOpenSubmit}
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
