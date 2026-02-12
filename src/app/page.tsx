"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadProfile } from "@/lib/storage";

export default function Home() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const profile = loadProfile();
    if (profile) {
      router.replace("/drop");
    } else {
      setChecking(false);
    }
  }, [router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="fade-in-up max-w-lg">
        {/* Logo / Brand */}
        <div className="mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-3xl">
            🎓
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            College Drop
          </h1>
          <p className="mt-2 text-lg text-muted">
            Your weekly college match
          </p>
        </div>

        {/* Value Prop */}
        <div className="mb-10 space-y-4">
          <p className="text-xl leading-relaxed text-zinc-300">
            Forget 100 brochures in the mail.
            <br />
            <span className="font-semibold text-white">
              We pick one school for you.
            </span>
          </p>
          <p className="text-zinc-400">
            Every Monday at 9pm, you get your next perfect match.
            <br />
            Based on who you actually are, not your GPA.
          </p>
        </div>

        {/* How it works */}
        <div className="mb-10 grid gap-4 text-left">
          {[
            { step: "1", text: "Take a 2-minute vibe check quiz" },
            { step: "2", text: "Get your #1 college match instantly" },
            { step: "3", text: "New match drops every Monday at 9pm" },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-center gap-4 rounded-xl border border-card-border bg-card-bg p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-sm font-bold text-accent-light">
                {item.step}
              </div>
              <p className="text-zinc-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => router.push("/quiz")}
          className="w-full rounded-2xl bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 active:scale-[0.98] sm:w-auto"
        >
          Take the Quiz
        </button>

        <p className="mt-4 text-sm text-muted">
          No account needed. No spam. Just vibes.
        </p>
      </div>
    </div>
  );
}
