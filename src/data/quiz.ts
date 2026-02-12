import { QuizQuestion, QuizSection } from "@/lib/types";

/* ──────────────────────────────────────────────
   Section 1 — The Vibe Check (mandatory)
   ────────────────────────────────────────────── */

export const vibeQuestions: QuizQuestion[] = [
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
    question:
      "Close your eyes. Where do you see yourself waking up for the next 4 years?",
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
];

/* ──────────────────────────────────────────────
   Optional Sections — Dig deeper
   ────────────────────────────────────────────── */

export const optionalSections: QuizSection[] = [
  {
    id: "careers",
    title: "Career Daydreams",
    description: "What does \"making it\" look like for you?",
    emoji: "💼",
    questions: [
      {
        id: "career-day",
        question:
          "It's career day and you actually care. Which booth are you hitting first?",
        type: "multiple-choice",
        options: [
          {
            label: "Tech startup -- I want to build something",
            emoji: "💻",
            scores: { careerFocus: 3, ambition: 2 },
          },
          {
            label: "Creative agency -- design, film, or media",
            emoji: "🎬",
            scores: { careerFocus: 2, creativity: 2 },
          },
          {
            label: "Hospital or research lab -- I want to help people",
            emoji: "🩺",
            scores: { careerFocus: 3, curiosity: 2 },
          },
          {
            label: "I'll figure it out later, honestly",
            emoji: "🤷",
            scores: { balance: 2, independence: 1 },
          },
        ],
      },
      {
        id: "ten-years",
        question:
          "Fast forward 10 years. What does \"making it\" look like?",
        type: "multiple-choice",
        options: [
          {
            label: "Running my own company",
            emoji: "🏢",
            scores: { careerFocus: 3, ambition: 3, independence: 1 },
          },
          {
            label: "Doing meaningful work that helps my community",
            emoji: "🤝",
            scores: { socialImpact: 3, community: 2 },
          },
          {
            label: "Being really good at something creative",
            emoji: "🎨",
            scores: { creativity: 3, careerFocus: 1 },
          },
          {
            label: "Having a life I actually enjoy -- work-life balance",
            emoji: "🌴",
            scores: { balance: 3, independence: 1 },
          },
        ],
      },
    ],
  },
  {
    id: "costs",
    title: "Let's Talk Money",
    description: "No judgment -- just figuring out what matters to you financially.",
    emoji: "💰",
    questions: [
      {
        id: "money-real-talk",
        question: "Let's be real about money. Which sounds most like you?",
        type: "multiple-choice",
        options: [
          {
            label: "Budget is tight -- I need affordable options",
            emoji: "💸",
            scores: { affordability: 3 },
          },
          {
            label: "I'll take some loans but want good value",
            emoji: "⚖️",
            scores: { affordability: 2 },
          },
          {
            label: "I'll pay more if the experience is worth it",
            emoji: "💎",
            scores: { ambition: 1 },
          },
          {
            label: "Scholarships are my plan -- applying to everything",
            emoji: "🏆",
            scores: { affordability: 2, ambition: 1 },
          },
        ],
      },
      {
        id: "cost-tradeoff",
        question: "Would you rather...",
        type: "multiple-choice",
        options: [
          {
            label: "Full ride at a good school",
            emoji: "🎓",
            scores: { affordability: 3, balance: 1 },
          },
          {
            label: "Dream school, even if it costs more",
            emoji: "✨",
            scores: { ambition: 2 },
          },
          {
            label: "In-state public with money left over for life",
            emoji: "🏠",
            scores: { affordability: 3, community: 1 },
          },
          {
            label: "Wherever gives me the best career ROI",
            emoji: "📈",
            scores: { affordability: 1, careerFocus: 2 },
          },
        ],
      },
    ],
  },
  {
    id: "academics",
    title: "The Report Card",
    description: "How's school treating you? (No cap.)",
    emoji: "📝",
    questions: [
      {
        id: "grades-honest",
        question: "If your transcript could talk, what would it say?",
        type: "multiple-choice",
        options: [
          {
            label: "\"This one doesn't sleep\" -- straight A's or close",
            emoji: "📚",
            scores: { academicRigor: 3, ambition: 1 },
          },
          {
            label: "\"Solid and steady\" -- good grades, room for life",
            emoji: "👍",
            scores: { academicRigor: 2, balance: 1 },
          },
          {
            label: "\"Depends on the subject\" -- amazing in some, meh in others",
            emoji: "📊",
            scores: { academicRigor: 1, curiosity: 2 },
          },
          {
            label: "\"Still figuring it out\" -- grades don't define me",
            emoji: "🌱",
            scores: { balance: 2, independence: 1 },
          },
        ],
      },
      {
        id: "class-pick",
        question: "You get to add one class to your school. What is it?",
        type: "multiple-choice",
        options: [
          {
            label: "Entrepreneurship 101 -- build a real startup",
            emoji: "🚀",
            scores: { careerFocus: 2, ambition: 2 },
          },
          {
            label: "Philosophy of AI -- where are we heading?",
            emoji: "🤖",
            scores: { academicRigor: 2, curiosity: 2 },
          },
          {
            label: "Music production or film editing",
            emoji: "🎧",
            scores: { creativity: 3 },
          },
          {
            label: "Social justice and community organizing",
            emoji: "✊",
            scores: { socialImpact: 3, community: 1 },
          },
        ],
      },
    ],
  },
  {
    id: "athletics",
    title: "The Athlete Check",
    description: "From varsity dreams to couch vibes -- where do you land?",
    emoji: "🏅",
    questions: [
      {
        id: "sports-life",
        question: "What's your relationship with sports?",
        type: "multiple-choice",
        options: [
          {
            label: "I'm trying to play in college -- it's my thing",
            emoji: "🏆",
            scores: { athletics: 3, ambition: 1 },
          },
          {
            label: "Club or intramural -- competitive but chill",
            emoji: "🏃",
            scores: { athletics: 2, balance: 1 },
          },
          {
            label: "I'm there for game day -- paint my face, lose my voice",
            emoji: "📣",
            scores: { athletics: 2, community: 2 },
          },
          {
            label: "Sports aren't really my scene",
            emoji: "🎮",
            scores: { independence: 1, creativity: 1 },
          },
        ],
      },
      {
        id: "game-day",
        question: "It's the biggest game of the year. Where are you?",
        type: "multiple-choice",
        options: [
          {
            label: "Front row, body paint, screaming",
            emoji: "🎨",
            scores: { athletics: 3, community: 2 },
          },
          {
            label: "Tailgating with friends -- the pregame IS the game",
            emoji: "🍔",
            scores: { athletics: 1, community: 2, balance: 1 },
          },
          {
            label: "Watching from somewhere chill, enjoying the vibe",
            emoji: "📺",
            scores: { balance: 2, community: 1 },
          },
          {
            label: "What game? I'm doing my own thing",
            emoji: "🎧",
            scores: { independence: 2, creativity: 1 },
          },
        ],
      },
    ],
  },
  {
    id: "extracurriculars",
    title: "After the Bell",
    description: "What you do outside class says a lot about you.",
    emoji: "🎭",
    questions: [
      {
        id: "after-school",
        question: "The bell rings. Where are you headed?",
        type: "multiple-choice",
        options: [
          {
            label: "Student government or debate -- I want a seat at the table",
            emoji: "🎤",
            scores: { ambition: 2, community: 1, socialImpact: 1 },
          },
          {
            label: "Band, theater, or art studio -- creating something",
            emoji: "🎭",
            scores: { creativity: 3 },
          },
          {
            label: "Volunteering or mentoring -- giving back",
            emoji: "🤝",
            scores: { socialImpact: 2, community: 2 },
          },
          {
            label: "Practice or the gym -- working on my game",
            emoji: "💪",
            scores: { athletics: 2, ambition: 1 },
          },
        ],
      },
      {
        id: "start-a-club",
        question: "You have to start a club tomorrow. What's it called?",
        type: "multiple-choice",
        options: [
          {
            label: "Future Founders -- building startups before graduation",
            emoji: "💡",
            scores: { careerFocus: 2, ambition: 2 },
          },
          {
            label: "The Outdoor Collective -- hikes, camping, adventure",
            emoji: "⛰️",
            scores: { adventure: 3, balance: 1 },
          },
          {
            label: "Culture Club -- celebrating identity and community",
            emoji: "🌍",
            scores: { socialImpact: 2, community: 2 },
          },
          {
            label: "The Workshop -- making music, art, or films together",
            emoji: "🎬",
            scores: { creativity: 3, community: 1 },
          },
        ],
      },
    ],
  },
  {
    id: "worldviews",
    title: "The Big Picture",
    description: "What do you actually care about in the world?",
    emoji: "🔮",
    questions: [
      {
        id: "headline",
        question:
          "Which headline would you most want YOUR name on?",
        type: "multiple-choice",
        options: [
          {
            label: "\"Local grad's startup just hit $1B valuation\"",
            emoji: "📰",
            scores: { ambition: 3, careerFocus: 1 },
          },
          {
            label: "\"Activist's campaign changes national policy\"",
            emoji: "📢",
            scores: { socialImpact: 3, community: 1 },
          },
          {
            label: "\"Artist's debut wins international acclaim\"",
            emoji: "🏅",
            scores: { creativity: 3 },
          },
          {
            label: "\"Scientist's discovery could change everything\"",
            emoji: "🔬",
            scores: { curiosity: 3, academicRigor: 1 },
          },
        ],
      },
      {
        id: "care-about",
        question: "What's one thing you wish more people cared about?",
        type: "multiple-choice",
        options: [
          {
            label: "Climate change and the environment",
            emoji: "🌎",
            scores: { socialImpact: 3, adventure: 1 },
          },
          {
            label: "Mental health and actually being happy",
            emoji: "🧠",
            scores: { balance: 2, community: 1, socialImpact: 1 },
          },
          {
            label: "Equal access to education and opportunity",
            emoji: "📖",
            scores: { socialImpact: 3, community: 1 },
          },
          {
            label: "Innovation and building the future",
            emoji: "⚡",
            scores: { ambition: 2, curiosity: 2 },
          },
        ],
      },
    ],
  },
];

/* ──────────────────────────────────────────────
   Final question — always shown
   ────────────────────────────────────────────── */

export const dreamQuestion: QuizQuestion = {
  id: "dream",
  question: "Last one. What do you actually want out of college? (Be real)",
  type: "open-ended",
  placeholder: "No wrong answers here... what matters to you?",
};

/**
 * Flat list of all possible questions (used by computeScores).
 * Built dynamically so it always stays in sync.
 */
export function getAllQuestions(): QuizQuestion[] {
  return [
    ...vibeQuestions,
    ...optionalSections.flatMap((s) => s.questions),
    dreamQuestion,
  ];
}
