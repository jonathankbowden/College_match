import { QuizQuestion } from "@/lib/types";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "saturday",
    question: "It's Saturday and you have zero obligations. What are you doing?",
    type: "multiple-choice",
    options: [
      {
        label: "Hiking, surfing, or anything outside",
        emoji: "🏔️",
        scores: { adventure: 3, balance: 2, independence: 1 },
      },
      {
        label: "Working on a creative project",
        emoji: "🎨",
        scores: { creativity: 3, independence: 2, curiosity: 1 },
      },
      {
        label: "Grinding on my side hustle",
        emoji: "💰",
        scores: { ambition: 3, independence: 2 },
      },
      {
        label: "Hanging with my people",
        emoji: "👯",
        scores: { community: 3, balance: 2 },
      },
    ],
  },
  {
    id: "superpower",
    question: "Pick a superpower (this says more about you than you think):",
    type: "multiple-choice",
    options: [
      {
        label: "Teleportation -- I want to be everywhere",
        emoji: "✨",
        scores: { adventure: 3, independence: 2, curiosity: 1 },
      },
      {
        label: "Mind reading -- I want to understand people",
        emoji: "🧠",
        scores: { community: 2, curiosity: 3, ambition: 1 },
      },
      {
        label: "Time control -- I'd get so much done",
        emoji: "⏰",
        scores: { ambition: 3, balance: 1, independence: 1 },
      },
      {
        label: "Shapeshifting -- I contain multitudes",
        emoji: "🦋",
        scores: { creativity: 3, adventure: 1, curiosity: 2 },
      },
    ],
  },
  {
    id: "dinner",
    question: "You can have dinner with anyone, living or dead. Who are you picking?",
    type: "multiple-choice",
    options: [
      {
        label: "A visionary founder (Jobs, Winfrey, Musk)",
        emoji: "🚀",
        scores: { ambition: 3, curiosity: 1, independence: 1 },
      },
      {
        label: "A favorite artist or musician",
        emoji: "🎵",
        scores: { creativity: 3, independence: 1, curiosity: 1 },
      },
      {
        label: "A civil rights leader or activist",
        emoji: "✊",
        scores: { community: 3, ambition: 2, curiosity: 1 },
      },
      {
        label: "An explorer or adventurer",
        emoji: "🗺️",
        scores: { adventure: 3, curiosity: 2, independence: 1 },
      },
    ],
  },
  {
    id: "campus-vibe",
    question: "What's the move on a Friday night in your ideal college life?",
    type: "multiple-choice",
    options: [
      {
        label: "A huge game day with 80,000 fans",
        emoji: "🏟️",
        scores: { community: 3, adventure: 1, balance: 2 },
      },
      {
        label: "A small gathering with close friends",
        emoji: "🕯️",
        scores: { community: 2, balance: 2, independence: 1 },
      },
      {
        label: "Exploring the city -- food, music, nightlife",
        emoji: "🌃",
        scores: { adventure: 2, creativity: 2, independence: 2 },
      },
      {
        label: "Honestly? I'd be in the lab or studio",
        emoji: "🔬",
        scores: { curiosity: 3, ambition: 2, independence: 1 },
      },
    ],
  },
  {
    id: "tshirt",
    question: "Which t-shirt are you grabbing?",
    type: "multiple-choice",
    options: [
      {
        label: "\"Move fast and break things\"",
        emoji: "⚡",
        scores: { ambition: 3, independence: 2, adventure: 1 },
      },
      {
        label: "\"Be the change you wish to see\"",
        emoji: "🌍",
        scores: { community: 3, ambition: 1, curiosity: 1 },
      },
      {
        label: "\"Stay curious\"",
        emoji: "🔭",
        scores: { curiosity: 3, creativity: 1, independence: 1 },
      },
      {
        label: "\"Good vibes only\"",
        emoji: "☀️",
        scores: { balance: 3, community: 1, adventure: 1 },
      },
    ],
  },
  {
    id: "location",
    question: "Close your eyes. Where do you see yourself waking up for the next 4 years?",
    type: "multiple-choice",
    options: [
      {
        label: "A big city with endless options",
        emoji: "🏙️",
        scores: { independence: 3, adventure: 1, creativity: 1 },
      },
      {
        label: "A college town where everyone bleeds school colors",
        emoji: "🎓",
        scores: { community: 3, balance: 2 },
      },
      {
        label: "Somewhere with mountains or ocean nearby",
        emoji: "🌊",
        scores: { adventure: 3, balance: 2 },
      },
      {
        label: "Doesn't matter -- it's about the people, not the place",
        emoji: "💛",
        scores: { community: 2, curiosity: 1, ambition: 1, balance: 1 },
      },
    ],
  },
  {
    id: "dream",
    question: "Last one. What do you actually want out of college? (Be real)",
    type: "open-ended",
    placeholder: "No wrong answers here... what matters to you?",
  },
];
