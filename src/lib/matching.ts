import { College } from "./types";
import { colleges } from "@/data/colleges";

type ScoreKey = keyof College["scores"];

const ALL_SCORE_KEYS: ScoreKey[] = [
  "adventure",
  "creativity",
  "ambition",
  "community",
  "independence",
  "curiosity",
  "balance",
  "careerFocus",
  "affordability",
  "academicRigor",
  "athletics",
  "socialImpact",
];

/**
 * Compute cosine similarity between user scores and a college's scores.
 * Only considers dimensions where the user has a non-zero score, so
 * unanswered optional sections don't penalise or bias results.
 */
function cosineSimilarity(
  userScores: College["scores"],
  collegeScores: College["scores"]
): number {
  // Only use dimensions the user actually scored on
  const activeKeys = ALL_SCORE_KEYS.filter((k) => userScores[k] !== 0);
  if (activeKeys.length === 0) return 0;

  let dot = 0;
  let magA = 0;
  let magB = 0;

  for (const key of activeKeys) {
    const a = userScores[key];
    const b = collegeScores[key];
    dot += a * b;
    magA += a * a;
    magB += b * b;
  }

  const magnitude = Math.sqrt(magA) * Math.sqrt(magB);
  if (magnitude === 0) return 0;
  return dot / magnitude;
}

/**
 * Rank all colleges by match quality for a given user profile.
 * Returns college IDs sorted best-match-first.
 */
export function rankColleges(userScores: College["scores"]): string[] {
  const scored = colleges.map((college) => ({
    id: college.id,
    similarity: cosineSimilarity(userScores, college.scores),
  }));

  // Sort by similarity descending, then shuffle ties with deterministic seed
  scored.sort((a, b) => b.similarity - a.similarity);

  return scored.map((s) => s.id);
}

const KEYWORD_MAP: Record<string, ScoreKey[]> = {
  travel: ["adventure", "independence"],
  explore: ["adventure", "curiosity"],
  outdoors: ["adventure", "balance"],
  nature: ["adventure", "balance"],
  hike: ["adventure", "balance"],
  surf: ["adventure", "balance"],
  art: ["creativity"],
  music: ["creativity"],
  film: ["creativity"],
  design: ["creativity"],
  create: ["creativity"],
  write: ["creativity", "curiosity"],
  paint: ["creativity"],
  lead: ["ambition"],
  career: ["ambition", "careerFocus"],
  success: ["ambition"],
  money: ["ambition", "affordability"],
  startup: ["ambition", "independence", "careerFocus"],
  business: ["ambition", "careerFocus"],
  friends: ["community"],
  family: ["community"],
  belong: ["community"],
  people: ["community"],
  culture: ["community", "creativity"],
  freedom: ["independence"],
  city: ["independence"],
  learn: ["curiosity"],
  research: ["curiosity", "academicRigor"],
  discover: ["curiosity"],
  science: ["curiosity", "academicRigor"],
  think: ["curiosity"],
  fun: ["balance"],
  happy: ["balance"],
  chill: ["balance"],
  relax: ["balance"],
  party: ["balance", "community"],
  athlete: ["athletics"],
  sport: ["athletics"],
  team: ["athletics", "community"],
  compete: ["athletics", "ambition"],
  justice: ["socialImpact"],
  equity: ["socialImpact"],
  environment: ["socialImpact"],
  climate: ["socialImpact"],
  volunteer: ["socialImpact", "community"],
  activism: ["socialImpact"],
  affordable: ["affordability"],
  scholarship: ["affordability"],
  debt: ["affordability"],
  animal: ["adventure", "curiosity"],
  vet: ["careerFocus", "curiosity"],
  biology: ["curiosity", "academicRigor"],
};

function applyKeywordScores(text: string, scores: College["scores"], weight: number = 1) {
  const lower = text.toLowerCase();
  for (const [keyword, keys] of Object.entries(KEYWORD_MAP)) {
    if (lower.includes(keyword)) {
      for (const key of keys) {
        scores[key] += weight;
      }
    }
  }
}

/**
 * Create a zero-initialized scores object.
 */
function emptyScores(): College["scores"] {
  return {
    adventure: 0,
    creativity: 0,
    ambition: 0,
    community: 0,
    independence: 0,
    curiosity: 0,
    balance: 0,
    careerFocus: 0,
    affordability: 0,
    academicRigor: 0,
    athletics: 0,
    socialImpact: 0,
  };
}

/**
 * Aggregate quiz answers into a user score profile.
 * Multiple choice answers directly add to scores.
 * Custom free-form answers use keyword matching.
 * The open-ended answer uses keyword matching for a small boost.
 */
export function computeScores(
  answers: Record<string, string>,
  questions: { id: string; options?: { label: string; scores: Partial<College["scores"]> }[] }[]
): College["scores"] {
  const scores = emptyScores();

  for (const question of questions) {
    const answer = answers[question.id];
    if (!answer || !question.options) continue;

    const selected = question.options.find((o) => o.label === answer);
    if (selected) {
      for (const [key, value] of Object.entries(selected.scores)) {
        scores[key as ScoreKey] += value as number;
      }
    } else {
      // Custom free-form answer -- use keyword matching with higher weight
      applyKeywordScores(answer, scores, 2);
    }
  }

  // Keyword-based scoring for the open-ended question
  applyKeywordScores(answers["dream"] || "", scores);

  return scores;
}

/**
 * Get the next drop date (next Monday at 9pm EST from a given date).
 */
export function getNextDropDate(from: Date = new Date()): Date {
  const next = new Date(from);
  // Move to next Monday
  const dayOfWeek = next.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : dayOfWeek === 1 ? 7 : 8 - dayOfWeek;

  // If it's Monday and before 9pm EST, drop is today
  if (dayOfWeek === 1) {
    const estHour = getESTHour(next);
    if (estHour < 21) {
      next.setHours(21 + (next.getTimezoneOffset() / 60 + 5), 0, 0, 0);
      return next;
    }
  }

  next.setDate(next.getDate() + daysUntilMonday);
  // Set to 9pm EST (21:00 EST = UTC-5)
  next.setHours(21 + (next.getTimezoneOffset() / 60 + 5), 0, 0, 0);
  return next;
}

function getESTHour(date: Date): number {
  return new Date(
    date.toLocaleString("en-US", { timeZone: "America/New_York" })
  ).getHours();
}

/**
 * Calculate how many drops a user should have available based on when
 * they completed the quiz.
 */
export function getAvailableDropCount(completedAt: string): number {
  const completed = new Date(completedAt);
  const now = new Date();

  // First drop is immediate
  let drops = 1;

  // Then one more for each Monday 9pm EST that has passed
  const cursor = new Date(completed);
  // Move to first Monday 9pm after completion
  const firstMonday = getNextDropDate(cursor);

  const check = new Date(firstMonday);
  while (check <= now) {
    drops++;
    check.setDate(check.getDate() + 7);
  }

  return drops;
}
