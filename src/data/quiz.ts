import { QuizQuestion, QuizSection } from "@/lib/types";

/* ──────────────────────────────────────────────
   Section 1 — The Vibe Check (mandatory)
   8 questions to get a feel for who you are
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
  {
    id: "playlist",
    question: "Pick the playlist that matches your energy right now:",
    type: "multiple-choice",
    options: [
      {
        label: "Main character energy -- epic, cinematic, unstoppable",
        emoji: "🎬",
        scores: { ambition: 3, adventure: 1, independence: 1 },
      },
      {
        label: "Lo-fi study beats -- calm, focused, in the zone",
        emoji: "🎧",
        scores: { academicRigor: 2, balance: 2, curiosity: 1 },
      },
      {
        label: "Indie deep cuts -- I like finding what nobody else knows",
        emoji: "🎸",
        scores: { creativity: 3, independence: 2 },
      },
      {
        label: "Party anthems -- I want the whole room singing along",
        emoji: "🪩",
        scores: { community: 3, adventure: 1, balance: 1 },
      },
    ],
  },
  {
    id: "zombie-apocalypse",
    question: "Zombie apocalypse breaks out on campus. What's your role?",
    type: "multiple-choice",
    options: [
      {
        label: "The leader -- rallying everyone and making the plan",
        emoji: "🫡",
        scores: { ambition: 2, community: 2, independence: 1 },
      },
      {
        label: "The inventor -- rigging up traps and gadgets",
        emoji: "🔧",
        scores: { curiosity: 3, creativity: 2 },
      },
      {
        label: "The scout -- exploring, finding supplies, mapping routes",
        emoji: "🗺️",
        scores: { adventure: 3, independence: 2 },
      },
      {
        label: "The heart -- keeping morale up and making sure everyone eats",
        emoji: "❤️",
        scores: { community: 3, socialImpact: 1, balance: 1 },
      },
    ],
  },
];

/* ──────────────────────────────────────────────
   Optional Sections — Dig deeper
   10 sections, 4 questions each
   ────────────────────────────────────────────── */

export const optionalSections: QuizSection[] = [
  /* ── 1. Career Daydreams ──────────────────── */
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
      {
        id: "internship-vibe",
        question: "Your dream internship is at...",
        type: "multiple-choice",
        options: [
          {
            label: "A scrappy startup where you wear 10 hats",
            emoji: "🧢",
            scores: { ambition: 2, independence: 2, careerFocus: 2 },
          },
          {
            label: "A prestigious Fortune 500 -- brand name on the resume",
            emoji: "🏛️",
            scores: { careerFocus: 3, ambition: 2 },
          },
          {
            label: "A nonprofit or NGO doing real-world impact",
            emoji: "🌱",
            scores: { socialImpact: 3, community: 1 },
          },
          {
            label: "A studio, gallery, or creative shop",
            emoji: "🖼️",
            scores: { creativity: 3, independence: 1 },
          },
        ],
      },
      {
        id: "career-fear",
        question: "Be honest: what's your biggest career fear?",
        type: "multiple-choice",
        options: [
          {
            label: "Being stuck in a boring 9-to-5 forever",
            emoji: "😴",
            scores: { independence: 2, adventure: 2, creativity: 1 },
          },
          {
            label: "Not making enough money to be comfortable",
            emoji: "💸",
            scores: { affordability: 2, careerFocus: 2 },
          },
          {
            label: "Doing work that doesn't matter to anyone",
            emoji: "🫥",
            scores: { socialImpact: 2, community: 2 },
          },
          {
            label: "Burning out before I even get started",
            emoji: "🔥",
            scores: { balance: 3, independence: 1 },
          },
        ],
      },
    ],
  },

  /* ── 2. Let's Talk Money ──────────────────── */
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
      {
        id: "side-hustle",
        question: "How do you feel about working during college?",
        type: "multiple-choice",
        options: [
          {
            label: "Already planning my side hustle -- gotta stack bread",
            emoji: "🍞",
            scores: { ambition: 2, independence: 2, affordability: 1 },
          },
          {
            label: "Work-study or part-time -- enough to cover ramen",
            emoji: "🍜",
            scores: { affordability: 2, balance: 2 },
          },
          {
            label: "I'd rather focus fully on school and activities",
            emoji: "📖",
            scores: { academicRigor: 2, balance: 1 },
          },
          {
            label: "Only if it's related to my career goals",
            emoji: "🎯",
            scores: { careerFocus: 3, ambition: 1 },
          },
        ],
      },
      {
        id: "money-splurge",
        question: "You just got a surprise $500. What are you spending it on?",
        type: "multiple-choice",
        options: [
          {
            label: "Savings account -- future me says thanks",
            emoji: "🏦",
            scores: { affordability: 2, balance: 2 },
          },
          {
            label: "A trip somewhere new with friends",
            emoji: "✈️",
            scores: { adventure: 2, community: 2 },
          },
          {
            label: "New gear for my craft -- camera, instrument, tech",
            emoji: "🛠️",
            scores: { creativity: 2, careerFocus: 1, curiosity: 1 },
          },
          {
            label: "Donating or investing in something I believe in",
            emoji: "💝",
            scores: { socialImpact: 3, community: 1 },
          },
        ],
      },
    ],
  },

  /* ── 3. The Report Card ───────────────────── */
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
      {
        id: "homework-approach",
        question: "Your professor just assigned a 10-page paper. Your reaction?",
        type: "multiple-choice",
        options: [
          {
            label: "Already outlining it in my head -- let's go",
            emoji: "📝",
            scores: { academicRigor: 3, ambition: 2 },
          },
          {
            label: "Find the most creative angle and make it interesting",
            emoji: "💡",
            scores: { creativity: 2, curiosity: 2 },
          },
          {
            label: "Grab friends and hit the library together",
            emoji: "📚",
            scores: { community: 2, academicRigor: 1, balance: 1 },
          },
          {
            label: "Procrastinate and then crank it out last minute (it'll be fine)",
            emoji: "⏳",
            scores: { independence: 2, adventure: 1 },
          },
        ],
      },
      {
        id: "dream-major",
        question: "If you could double-major in anything with zero stress, what combo?",
        type: "multiple-choice",
        options: [
          {
            label: "Computer Science + Business -- world domination starter pack",
            emoji: "💻",
            scores: { careerFocus: 3, ambition: 2 },
          },
          {
            label: "Psychology + Art -- understanding people through creativity",
            emoji: "🧩",
            scores: { creativity: 2, curiosity: 2, community: 1 },
          },
          {
            label: "Environmental Science + Policy -- saving the planet, officially",
            emoji: "🌿",
            scores: { socialImpact: 3, academicRigor: 1, curiosity: 1 },
          },
          {
            label: "Whatever sounds cool that semester -- I want to explore everything",
            emoji: "🎲",
            scores: { curiosity: 3, independence: 1, adventure: 1 },
          },
        ],
      },
    ],
  },

  /* ── 4. The Athlete Check ─────────────────── */
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
      {
        id: "fitness-style",
        question: "How do you like to stay active?",
        type: "multiple-choice",
        options: [
          {
            label: "Team sports all day -- I need the competition",
            emoji: "⚽",
            scores: { athletics: 3, community: 1 },
          },
          {
            label: "Solo workouts -- gym, running, yoga, my own pace",
            emoji: "🧘",
            scores: { independence: 2, balance: 2, athletics: 1 },
          },
          {
            label: "Outdoor stuff -- rock climbing, skiing, surfing",
            emoji: "🧗",
            scores: { adventure: 3, athletics: 2 },
          },
          {
            label: "Does walking to class count? I move when I have to",
            emoji: "🚶",
            scores: { balance: 1, independence: 1 },
          },
        ],
      },
      {
        id: "school-spirit",
        question: "How much school spirit are we talking?",
        type: "multiple-choice",
        options: [
          {
            label: "I want a school where pride is a lifestyle",
            emoji: "🦅",
            scores: { athletics: 2, community: 3 },
          },
          {
            label: "I'll go to games but I'm not buying 20 hoodies",
            emoji: "🧥",
            scores: { community: 2, balance: 2 },
          },
          {
            label: "Spirit is cool but academics come first",
            emoji: "🎓",
            scores: { academicRigor: 2, balance: 1, athletics: 1 },
          },
          {
            label: "I'd rather my school be known for ideas than touchdowns",
            emoji: "💭",
            scores: { curiosity: 2, academicRigor: 2 },
          },
        ],
      },
    ],
  },

  /* ── 5. After the Bell ────────────────────── */
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
      {
        id: "leadership-style",
        question: "When you're in charge of a group project, you're the one who...",
        type: "multiple-choice",
        options: [
          {
            label: "Makes the plan, assigns roles, sets deadlines",
            emoji: "📋",
            scores: { ambition: 3, careerFocus: 1 },
          },
          {
            label: "Comes up with the wildest idea and convinces everyone",
            emoji: "🌀",
            scores: { creativity: 2, adventure: 1, independence: 1 },
          },
          {
            label: "Makes sure everyone's voice is heard and feels included",
            emoji: "🫂",
            scores: { community: 3, socialImpact: 1 },
          },
          {
            label: "Does the research -- I want our project to be airtight",
            emoji: "🔍",
            scores: { academicRigor: 2, curiosity: 2 },
          },
        ],
      },
      {
        id: "free-period",
        question: "You somehow got a free period every day. You're using it to...",
        type: "multiple-choice",
        options: [
          {
            label: "Prep for competitions -- science olympiad, mock trial, etc.",
            emoji: "🏅",
            scores: { academicRigor: 2, ambition: 2 },
          },
          {
            label: "Work on a passion project nobody asked for but everyone loves",
            emoji: "🎨",
            scores: { creativity: 3, independence: 1 },
          },
          {
            label: "Honestly? Nap or hang out -- balance is key",
            emoji: "😴",
            scores: { balance: 3, independence: 1 },
          },
          {
            label: "Community service or tutoring younger students",
            emoji: "🌟",
            scores: { socialImpact: 3, community: 1 },
          },
        ],
      },
    ],
  },

  /* ── 6. The Big Picture ───────────────────── */
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
      {
        id: "ted-talk",
        question: "You get a TED Talk. What's the topic?",
        type: "multiple-choice",
        options: [
          {
            label: "\"Why Gen Z will fix what boomers broke\"",
            emoji: "🔥",
            scores: { socialImpact: 2, ambition: 2, community: 1 },
          },
          {
            label: "\"The art of doing nothing (and why it matters)\"",
            emoji: "🍃",
            scores: { balance: 3, creativity: 1 },
          },
          {
            label: "\"How curiosity is the most underrated superpower\"",
            emoji: "🔭",
            scores: { curiosity: 3, academicRigor: 1 },
          },
          {
            label: "\"Building things nobody thought were possible\"",
            emoji: "🏗️",
            scores: { ambition: 2, independence: 2, careerFocus: 1 },
          },
        ],
      },
      {
        id: "time-machine",
        question: "You find a time machine. Where are you going?",
        type: "multiple-choice",
        options: [
          {
            label: "The future -- I need to see what we build",
            emoji: "🚀",
            scores: { curiosity: 3, ambition: 1 },
          },
          {
            label: "The Renaissance -- art, genius, and chaos",
            emoji: "🎨",
            scores: { creativity: 3, curiosity: 1 },
          },
          {
            label: "The 60s -- civil rights, counterculture, change",
            emoji: "✌️",
            scores: { socialImpact: 2, community: 2, adventure: 1 },
          },
          {
            label: "Ancient civilizations -- I want to explore lost worlds",
            emoji: "🏛️",
            scores: { adventure: 3, curiosity: 2 },
          },
        ],
      },
    ],
  },

  /* ── 7. Your Learning Style (NEW) ─────────── */
  {
    id: "learning-style",
    title: "Your Learning Style",
    description: "How does your brain actually work best?",
    emoji: "🧪",
    questions: [
      {
        id: "class-size",
        question: "Your ideal class looks like...",
        type: "multiple-choice",
        options: [
          {
            label: "A 15-person seminar where the prof knows your name",
            emoji: "🪑",
            scores: { academicRigor: 2, community: 2, curiosity: 1 },
          },
          {
            label: "A big lecture hall -- I like anonymity and taking notes",
            emoji: "🏟️",
            scores: { independence: 3, academicRigor: 1 },
          },
          {
            label: "A hands-on lab or studio -- learning by doing",
            emoji: "🔬",
            scores: { creativity: 2, curiosity: 2, adventure: 1 },
          },
          {
            label: "Honestly? Online. Let me learn at my own pace",
            emoji: "💻",
            scores: { independence: 3, balance: 1 },
          },
        ],
      },
      {
        id: "study-spot",
        question: "Where are you most likely to be found studying?",
        type: "multiple-choice",
        options: [
          {
            label: "A buzzing coffee shop -- I need background noise",
            emoji: "☕",
            scores: { community: 1, independence: 1, creativity: 1, balance: 1 },
          },
          {
            label: "Deep in the library stacks where nobody can find me",
            emoji: "📚",
            scores: { academicRigor: 2, independence: 2 },
          },
          {
            label: "A group study room -- I learn better with friends",
            emoji: "👥",
            scores: { community: 3, academicRigor: 1 },
          },
          {
            label: "Outside somewhere -- a bench, the quad, under a tree",
            emoji: "🌳",
            scores: { balance: 2, adventure: 1, independence: 1 },
          },
        ],
      },
      {
        id: "learning-mode",
        question: "You learn best when...",
        type: "multiple-choice",
        options: [
          {
            label: "I can debate and discuss ideas with other people",
            emoji: "🗣️",
            scores: { community: 2, curiosity: 2, academicRigor: 1 },
          },
          {
            label: "I can go deep on a topic and research on my own",
            emoji: "🔎",
            scores: { independence: 2, curiosity: 3 },
          },
          {
            label: "I can build, create, or make something tangible",
            emoji: "🛠️",
            scores: { creativity: 3, careerFocus: 1 },
          },
          {
            label: "There's a real-world problem to solve, not just theory",
            emoji: "🌍",
            scores: { socialImpact: 1, careerFocus: 2, ambition: 1 },
          },
        ],
      },
      {
        id: "office-hours",
        question: "How likely are you to go to a professor's office hours?",
        type: "multiple-choice",
        options: [
          {
            label: "First week of class -- I'm building that relationship",
            emoji: "🤝",
            scores: { ambition: 2, academicRigor: 2, community: 1 },
          },
          {
            label: "Only when I'm really stuck or need a letter of rec",
            emoji: "📝",
            scores: { independence: 2, balance: 1 },
          },
          {
            label: "All the time -- I love geeking out with experts",
            emoji: "🤓",
            scores: { curiosity: 3, academicRigor: 2 },
          },
          {
            label: "Probably never -- I figure things out on my own",
            emoji: "🧘",
            scores: { independence: 3, balance: 1 },
          },
        ],
      },
    ],
  },

  /* ── 8. The Social Scene (NEW) ────────────── */
  {
    id: "social-scene",
    title: "The Social Scene",
    description: "Let's figure out your social sweet spot.",
    emoji: "🎉",
    questions: [
      {
        id: "social-battery",
        question: "Your social battery is...",
        type: "multiple-choice",
        options: [
          {
            label: "Always charged -- I literally thrive around people",
            emoji: "🔋",
            scores: { community: 3, adventure: 1 },
          },
          {
            label: "Good for a few hours, then I need to recharge alone",
            emoji: "🔌",
            scores: { balance: 2, independence: 2 },
          },
          {
            label: "Depends on the people -- small groups > big crowds",
            emoji: "🕯️",
            scores: { community: 2, independence: 1, balance: 1 },
          },
          {
            label: "Honestly low -- I'm selective about my social time",
            emoji: "🐢",
            scores: { independence: 3, creativity: 1 },
          },
        ],
      },
      {
        id: "greek-life",
        question: "Greek life: what's the vibe?",
        type: "multiple-choice",
        options: [
          {
            label: "Sign me up -- I love the community and tradition",
            emoji: "🏛️",
            scores: { community: 3, athletics: 1 },
          },
          {
            label: "Maybe -- depends on the chapter and the culture",
            emoji: "🤔",
            scores: { community: 1, balance: 2, independence: 1 },
          },
          {
            label: "Not my thing, but no judgment",
            emoji: "✌️",
            scores: { independence: 2, creativity: 1 },
          },
          {
            label: "I'd rather find my people through clubs or activities",
            emoji: "🎯",
            scores: { curiosity: 1, community: 1, independence: 1, creativity: 1 },
          },
        ],
      },
      {
        id: "weekend-scene",
        question: "Ideal weekend night looks like...",
        type: "multiple-choice",
        options: [
          {
            label: "A rager -- loud music, dancing, meeting everyone",
            emoji: "🪩",
            scores: { community: 2, adventure: 2 },
          },
          {
            label: "A chill kickback -- good music, board games, snacks",
            emoji: "🎲",
            scores: { community: 2, balance: 2 },
          },
          {
            label: "A late-night deep convo with one or two close friends",
            emoji: "🌙",
            scores: { independence: 1, curiosity: 2, community: 1 },
          },
          {
            label: "Solo time -- reading, gaming, creating, vibing alone",
            emoji: "🎮",
            scores: { independence: 3, creativity: 1 },
          },
        ],
      },
      {
        id: "friend-group",
        question: "Your friend group is usually...",
        type: "multiple-choice",
        options: [
          {
            label: "A huge squad -- I know everybody and everybody knows me",
            emoji: "🫶",
            scores: { community: 3, adventure: 1 },
          },
          {
            label: "A tight crew of 4-6 people -- ride or die",
            emoji: "💪",
            scores: { community: 2, balance: 1, independence: 1 },
          },
          {
            label: "A mix of friend groups -- I float between circles",
            emoji: "🦋",
            scores: { adventure: 2, creativity: 1, independence: 1 },
          },
          {
            label: "One or two best friends and that's all I need",
            emoji: "🤞",
            scores: { independence: 2, balance: 2 },
          },
        ],
      },
    ],
  },

  /* ── 9. Home Away from Home (NEW) ─────────── */
  {
    id: "home-away",
    title: "Home Away from Home",
    description: "Your comfort zone (and how far you want to push it).",
    emoji: "🏠",
    questions: [
      {
        id: "distance-home",
        question: "How far from home do you want to be?",
        type: "multiple-choice",
        options: [
          {
            label: "Close enough to do laundry at mom's on Sundays",
            emoji: "🧺",
            scores: { community: 2, balance: 2 },
          },
          {
            label: "A few hours away -- close-ish but independent",
            emoji: "🚗",
            scores: { balance: 2, independence: 2 },
          },
          {
            label: "Across the country -- I want a fresh start",
            emoji: "✈️",
            scores: { adventure: 3, independence: 2 },
          },
          {
            label: "Doesn't matter -- I'll go wherever the best fit is",
            emoji: "📍",
            scores: { curiosity: 1, ambition: 2, independence: 1 },
          },
        ],
      },
      {
        id: "living-situation",
        question: "Your ideal living situation freshman year?",
        type: "multiple-choice",
        options: [
          {
            label: "Classic dorm life -- hall mates, communal vibes, chaos",
            emoji: "🏢",
            scores: { community: 3, adventure: 1 },
          },
          {
            label: "Suite-style -- a few roommates but my own space too",
            emoji: "🛋️",
            scores: { community: 1, balance: 2, independence: 1 },
          },
          {
            label: "Off-campus apartment -- give me real-world independence",
            emoji: "🏠",
            scores: { independence: 3, adventure: 1 },
          },
          {
            label: "A themed or special interest house -- live with my people",
            emoji: "🎭",
            scores: { community: 2, creativity: 2 },
          },
        ],
      },
      {
        id: "food-priorities",
        question: "How important is the food situation?",
        type: "multiple-choice",
        options: [
          {
            label: "TOP priority -- I need good dining halls and variety",
            emoji: "🍽️",
            scores: { balance: 3, community: 1 },
          },
          {
            label: "I just need a kitchen so I can cook my own stuff",
            emoji: "👨‍🍳",
            scores: { independence: 3, creativity: 1 },
          },
          {
            label: "Being near amazing restaurants and food spots matters most",
            emoji: "🌮",
            scores: { adventure: 2, independence: 1, creativity: 1 },
          },
          {
            label: "Ramen and coffee -- I'm not picky, fuel is fuel",
            emoji: "🍜",
            scores: { ambition: 1, balance: 1, affordability: 1 },
          },
        ],
      },
      {
        id: "weather-vibes",
        question: "Pick your weather vibe for the next four years:",
        type: "multiple-choice",
        options: [
          {
            label: "Sunshine year-round -- I need that vitamin D",
            emoji: "☀️",
            scores: { adventure: 2, balance: 2, athletics: 1 },
          },
          {
            label: "Four seasons -- give me fall leaves AND spring flowers",
            emoji: "🍂",
            scores: { balance: 2, adventure: 1, curiosity: 1 },
          },
          {
            label: "Cozy winters -- sweaters, hot cocoa, snow days",
            emoji: "❄️",
            scores: { balance: 2, community: 1, academicRigor: 1 },
          },
          {
            label: "I literally don't care about weather -- it's about the school",
            emoji: "🤷",
            scores: { ambition: 2, academicRigor: 1, curiosity: 1 },
          },
        ],
      },
    ],
  },

  /* ── 10. Deal Breakers (NEW) ──────────────── */
  {
    id: "deal-breakers",
    title: "Deal Breakers",
    description: "What you absolutely need -- and what you absolutely don't.",
    emoji: "🚨",
    questions: [
      {
        id: "must-have",
        question: "What's the ONE thing your college absolutely MUST have?",
        type: "multiple-choice",
        options: [
          {
            label: "Strong career placement -- I need a job after this",
            emoji: "💼",
            scores: { careerFocus: 3, ambition: 1 },
          },
          {
            label: "A diverse, inclusive campus where I feel welcome",
            emoji: "🌈",
            scores: { community: 2, socialImpact: 2 },
          },
          {
            label: "Tons of research or creative opportunities",
            emoji: "🔬",
            scores: { curiosity: 2, academicRigor: 2, creativity: 1 },
          },
          {
            label: "A campus that actually feels alive -- events, energy, people",
            emoji: "⚡",
            scores: { community: 2, adventure: 2, athletics: 1 },
          },
        ],
      },
      {
        id: "cant-stand",
        question: "What's a total dealbreaker for you?",
        type: "multiple-choice",
        options: [
          {
            label: "A campus in the middle of nowhere with nothing to do",
            emoji: "🏜️",
            scores: { adventure: 2, independence: 2, creativity: 1 },
          },
          {
            label: "A place that only cares about partying, not learning",
            emoji: "📚",
            scores: { academicRigor: 3, curiosity: 1 },
          },
          {
            label: "Insane pressure and toxic competition among students",
            emoji: "😰",
            scores: { balance: 3, community: 1 },
          },
          {
            label: "A school with zero school spirit or community feel",
            emoji: "👻",
            scores: { community: 3, athletics: 1 },
          },
        ],
      },
      {
        id: "campus-size",
        question: "How big do you want your campus world to be?",
        type: "multiple-choice",
        options: [
          {
            label: "Small and tight-knit -- under 5,000 students",
            emoji: "🏡",
            scores: { community: 3, academicRigor: 1 },
          },
          {
            label: "Medium -- big enough for options, small enough to matter",
            emoji: "🏘️",
            scores: { balance: 2, community: 1, independence: 1 },
          },
          {
            label: "Big university energy -- 20,000+ students and endless clubs",
            emoji: "🏙️",
            scores: { adventure: 2, athletics: 1, community: 1 },
          },
          {
            label: "Size doesn't matter if the programs are right",
            emoji: "🎯",
            scores: { academicRigor: 2, careerFocus: 1, curiosity: 1 },
          },
        ],
      },
      {
        id: "non-negotiable",
        question: "Last one in this section -- pick the non-negotiable:",
        type: "multiple-choice",
        options: [
          {
            label: "I need to graduate with minimal debt",
            emoji: "💰",
            scores: { affordability: 3, balance: 1 },
          },
          {
            label: "I need a brand name that opens doors",
            emoji: "🏷️",
            scores: { ambition: 2, careerFocus: 2 },
          },
          {
            label: "I need to be somewhere I can truly be myself",
            emoji: "🪞",
            scores: { independence: 2, community: 1, balance: 1 },
          },
          {
            label: "I need access to a city or at least a cool town",
            emoji: "🌆",
            scores: { adventure: 2, independence: 1, creativity: 1 },
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
