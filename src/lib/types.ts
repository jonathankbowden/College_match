export interface College {
  id: string;
  name: string;
  location: string;
  vibe: string;
  tagline: string;
  description: string;
  funFact: string;
  studentBody: string;
  mascot: string;
  knownFor: string[];
  scores: {
    adventure: number;
    creativity: number;
    ambition: number;
    community: number;
    independence: number;
    curiosity: number;
    balance: number;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: "multiple-choice" | "open-ended";
  options?: {
    label: string;
    emoji: string;
    scores: Partial<College["scores"]>;
  }[];
  placeholder?: string;
}

export interface UserProfile {
  quizAnswers: Record<string, string>;
  scores: College["scores"];
  completedAt: string;
  dropsRevealed: number[];
  rankedColleges: string[];
}
