"use client";

import { UserProfile, College } from "./types";

const STORAGE_KEY = "college-match-profile";

export function saveProfile(profile: UserProfile): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

export function loadProfile(): UserProfile | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserProfile;
  } catch {
    return null;
  }
}

export function clearProfile(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}

export function createProfile(
  quizAnswers: Record<string, string>,
  scores: College["scores"],
  rankedColleges: string[]
): UserProfile {
  return {
    quizAnswers,
    scores,
    completedAt: new Date().toISOString(),
    dropsRevealed: [0], // First drop revealed immediately
    rankedColleges,
  };
}
