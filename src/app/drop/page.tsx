"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadProfile, saveProfile, clearProfile } from "@/lib/storage";
import { getAvailableDropCount, getNextDropDate } from "@/lib/matching";
import { colleges } from "@/data/colleges";
import { UserProfile, College } from "@/lib/types";

function CollegeCard({ college, dropNumber }: { college: College; dropNumber: number }) {
  return (
    <div className="fade-in-up space-y-6">
      {/* Header badge */}
      <div className="flex items-center gap-3">
        <div className="rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent-light">
          Drop #{dropNumber}
        </div>
        <div className="text-sm text-muted">Your match</div>
      </div>

      {/* Main card */}
      <div className="overflow-hidden rounded-2xl border border-card-border bg-card-bg">
        {/* Gradient header */}
        <div className="bg-gradient-to-br from-accent/20 via-purple-500/10 to-pink-500/10 p-6 sm:p-8">
          <h2 className="text-3xl font-bold sm:text-4xl">{college.name}</h2>
          <p className="mt-1 text-lg text-zinc-300">{college.location}</p>
          <p className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
            {college.vibe}
          </p>
        </div>

        {/* Body */}
        <div className="space-y-6 p-6 sm:p-8">
          {/* Tagline */}
          <p className="text-xl font-medium italic text-accent-light">
            &ldquo;{college.tagline}&rdquo;
          </p>

          {/* Description */}
          <p className="leading-relaxed text-zinc-300">{college.description}</p>

          {/* Fun fact */}
          <div className="rounded-xl bg-accent/5 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent-light">
              Fun Fact
            </p>
            <p className="text-sm leading-relaxed text-zinc-300">
              {college.funFact}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Students
              </p>
              <p className="mt-1 text-sm text-zinc-200">{college.studentBody}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Mascot
              </p>
              <p className="mt-1 text-sm text-zinc-200">{college.mascot}</p>
            </div>
          </div>

          {/* Known for */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
              Known For
            </p>
            <div className="flex flex-wrap gap-2">
              {college.knownFor.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-card-border bg-card-bg px-3 py-1 text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Countdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="space-y-3 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-muted">
        Next drop in
      </p>
      <div className="flex justify-center gap-3">
        {[
          { value: timeLeft.days, label: "days" },
          { value: timeLeft.hours, label: "hrs" },
          { value: timeLeft.minutes, label: "min" },
          { value: timeLeft.seconds, label: "sec" },
        ].map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-card-border bg-card-bg text-2xl font-bold tabular-nums sm:h-20 sm:w-20 sm:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </div>
            <p className="mt-1 text-xs text-muted">{unit.label}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-zinc-500">Monday at 9pm ET</p>
    </div>
  );
}

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function DropPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [viewingDrop, setViewingDrop] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const p = loadProfile();
    if (!p) {
      router.replace("/");
      return;
    }

    // Update available drops
    const available = getAvailableDropCount(p.completedAt);
    const newRevealed: number[] = [];
    for (let i = 0; i < available && i < p.rankedColleges.length; i++) {
      newRevealed.push(i);
    }
    p.dropsRevealed = newRevealed;
    saveProfile(p);
    setProfile(p);
    setViewingDrop(newRevealed.length - 1);
    setLoading(false);
  }, [router]);

  if (loading || !profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  const currentCollege = colleges.find(
    (c) => c.id === profile.rankedColleges[viewingDrop]
  );
  const nextDrop = getNextDropDate();
  const hasMoreDrops = viewingDrop < profile.rankedColleges.length - 1;
  const nextDropAvailable =
    profile.dropsRevealed.length > viewingDrop + 1;

  return (
    <div className="min-h-screen px-6 py-8">
      <div className="mx-auto max-w-lg">
        {/* Top nav */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎓</span>
            <span className="font-bold">College Drop</span>
          </div>
          <button
            onClick={() => {
              clearProfile();
              router.replace("/");
            }}
            className="text-sm text-muted hover:text-white"
          >
            Retake Quiz
          </button>
        </div>

        {/* Drop navigation */}
        {profile.dropsRevealed.length > 1 && (
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {profile.dropsRevealed.map((dropIdx) => (
              <button
                key={dropIdx}
                onClick={() => setViewingDrop(dropIdx)}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  viewingDrop === dropIdx
                    ? "bg-accent text-white"
                    : "bg-card-bg text-muted hover:text-white"
                }`}
              >
                #{dropIdx + 1}
              </button>
            ))}
          </div>
        )}

        {/* College card */}
        {currentCollege && (
          <CollegeCard college={currentCollege} dropNumber={viewingDrop + 1} />
        )}

        {/* Next drop countdown or navigation */}
        <div className="mt-8">
          {nextDropAvailable && hasMoreDrops ? (
            <button
              onClick={() => setViewingDrop((v) => v + 1)}
              className="w-full rounded-xl bg-accent/10 px-6 py-4 text-center font-semibold text-accent-light transition-colors hover:bg-accent/20"
            >
              See Next Drop →
            </button>
          ) : hasMoreDrops ? (
            <div className="rounded-2xl border border-card-border bg-card-bg p-6">
              <Countdown targetDate={nextDrop} />
            </div>
          ) : (
            <div className="rounded-xl bg-card-bg p-6 text-center">
              <p className="text-lg font-semibold">
                You&apos;ve seen all your matches!
              </p>
              <p className="mt-2 text-sm text-muted">
                Retake the quiz with different answers to discover new schools.
              </p>
              <button
                onClick={() => {
                  clearProfile();
                  router.replace("/quiz");
                }}
                className="mt-4 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>

        {/* Past drops summary */}
        {profile.dropsRevealed.length > 1 && viewingDrop === profile.dropsRevealed.length - 1 && (
          <div className="mt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Your Matches So Far
            </h3>
            <div className="space-y-2">
              {profile.dropsRevealed.map((dropIdx) => {
                const college = colleges.find(
                  (c) => c.id === profile.rankedColleges[dropIdx]
                );
                if (!college) return null;
                return (
                  <button
                    key={dropIdx}
                    onClick={() => setViewingDrop(dropIdx)}
                    className="flex w-full items-center justify-between rounded-xl border border-card-border bg-card-bg p-4 text-left transition-colors hover:border-accent/30"
                  >
                    <div>
                      <p className="font-medium">{college.name}</p>
                      <p className="text-sm text-muted">{college.location}</p>
                    </div>
                    <span className="text-sm text-muted">#{dropIdx + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
