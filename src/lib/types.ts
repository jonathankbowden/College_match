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
    // Core vibe dimensions
    adventure: number;
    creativity: number;
    ambition: number;
    community: number;
    independence: number;
    curiosity: number;
    balance: number;
    // Optional section dimensions
    careerFocus: number;
    affordability: number;
    academicRigor: number;
    athletics: number;
    socialImpact: number;
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

export interface QuizSection {
  id: string;
  title: string;
  description: string;
  emoji: string;
  questions: QuizQuestion[];
}

export interface UserProfile {
  quizAnswers: Record<string, string>;
  scores: College["scores"];
  completedAt: string;
  dropsRevealed: number[];
  rankedColleges: string[];
}
