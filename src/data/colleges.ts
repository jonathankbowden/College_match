import { College } from "@/lib/types";

export const colleges: College[] = [
  {
    id: "stanford",
    name: "Stanford University",
    location: "Stanford, CA",
    vibe: "Silicon Valley dreamers",
    tagline: "Where big ideas become billion-dollar realities",
    description:
      "Sun-soaked campus where future founders, researchers, and world-changers collide. The energy here is electric -- everyone's building something.",
    funFact:
      "Google, Netflix, and Instagram were all started by Stanford grads. The entrepreneurial spirit is in the water.",
    studentBody: "~17,000 students",
    mascot: "Cardinal (the color, not the bird)",
    knownFor: ["Tech & startups", "Beautiful campus", "D1 athletics", "Research"],
    scores: { adventure: 7, creativity: 9, ambition: 10, community: 6, independence: 8, curiosity: 9, balance: 5, careerFocus: 9, affordability: 6, academicRigor: 9, athletics: 8, socialImpact: 7 },
  },
  {
    id: "howard",
    name: "Howard University",
    location: "Washington, D.C.",
    vibe: "Legacy & leadership",
    tagline: "The Mecca -- where Black excellence is the standard",
    description:
      "A historic HBCU in the heart of D.C. where culture, community, and academic rigor create leaders who change the world.",
    funFact:
      "Homecoming at Howard is legendary -- it's basically a national holiday. Thurgood Marshall and Toni Morrison are alumni.",
    studentBody: "~12,000 students",
    mascot: "Bison",
    knownFor: ["HBCU culture", "Political science", "Homecoming", "Alumni network"],
    scores: { adventure: 6, creativity: 7, ambition: 9, community: 10, independence: 6, curiosity: 7, balance: 7, careerFocus: 8, affordability: 7, academicRigor: 7, athletics: 7, socialImpact: 9 },
  },
  {
    id: "cu-boulder",
    name: "University of Colorado Boulder",
    location: "Boulder, CO",
    vibe: "Mountain town meets college town",
    tagline: "Study hard, ski harder",
    description:
      "Nestled against the Flatirons, CU Boulder is for people who want a top-tier education AND want to be outside every chance they get.",
    funFact:
      "Boulder has 300+ days of sunshine a year. Students regularly hike before 8am lectures.",
    studentBody: "~35,000 students",
    mascot: "Ralphie the Buffalo",
    knownFor: ["Outdoor lifestyle", "Aerospace engineering", "Music scene", "Sustainability"],
    scores: { adventure: 10, creativity: 6, ambition: 6, community: 7, independence: 8, curiosity: 7, balance: 9, careerFocus: 6, affordability: 7, academicRigor: 6, athletics: 7, socialImpact: 7 },
  },
  {
    id: "nyu",
    name: "New York University",
    location: "New York, NY",
    vibe: "The city is your campus",
    tagline: "No gates, no walls -- just Manhattan",
    description:
      "NYU doesn't have a traditional campus because all of New York City IS the campus. Perfect for independent, city-loving creatives.",
    funFact:
      "Your classroom might be a block from a Broadway theater. Washington Square Park is basically the quad.",
    studentBody: "~52,000 students",
    mascot: "Bobcat",
    knownFor: ["Arts & film", "Business (Stern)", "City life", "Global campuses"],
    scores: { adventure: 8, creativity: 10, ambition: 9, community: 4, independence: 10, curiosity: 8, balance: 3, careerFocus: 9, affordability: 3, academicRigor: 7, athletics: 2, socialImpact: 7 },
  },
  {
    id: "unc",
    name: "University of North Carolina at Chapel Hill",
    location: "Chapel Hill, NC",
    vibe: "Southern charm, big ambition",
    tagline: "The OG public ivy",
    description:
      "A gorgeous campus with deep traditions, incredible school spirit, and academics that rival any private school -- at a fraction of the cost.",
    funFact:
      "Michael Jordan played here. When UNC wins in basketball, students rush Franklin Street. It's chaos (the good kind).",
    studentBody: "~31,000 students",
    mascot: "Rameses (Tar Heels)",
    knownFor: ["Basketball", "Journalism", "Public health", "School spirit"],
    scores: { adventure: 5, creativity: 5, ambition: 8, community: 9, independence: 5, curiosity: 7, balance: 8, careerFocus: 7, affordability: 8, academicRigor: 7, athletics: 9, socialImpact: 7 },
  },
  {
    id: "mit",
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    vibe: "Nerdy and proud of it",
    tagline: "The place where impossible problems get solved before lunch",
    description:
      "MIT is intense, brilliant, and surprisingly fun. The hack culture (elaborate campus pranks) proves these geniuses don't take themselves too seriously.",
    funFact:
      "Students once put a fire truck on top of the Great Dome. The prank tradition here is legendary.",
    studentBody: "~11,500 students",
    mascot: "Tim the Beaver",
    knownFor: ["Engineering", "Hacking culture", "Robotics", "Nobel laureates"],
    scores: { adventure: 6, creativity: 8, ambition: 10, community: 7, independence: 7, curiosity: 10, balance: 3, careerFocus: 9, affordability: 6, academicRigor: 10, athletics: 3, socialImpact: 6 },
  },
  {
    id: "spelman",
    name: "Spelman College",
    location: "Atlanta, GA",
    vibe: "Sisterhood & excellence",
    tagline: "Where women lead -- period",
    description:
      "A historically Black women's college that produces confident, brilliant leaders. The sisterhood here is real and lifelong.",
    funFact:
      "Spelman alumnae include Stacey Abrams, Alice Walker, and Marian Wright Edelman. The network is powerful.",
    studentBody: "~2,300 students",
    mascot: "Jaguars",
    knownFor: ["Women's leadership", "STEM programs", "Sisterhood", "Atlanta culture"],
    scores: { adventure: 4, creativity: 7, ambition: 9, community: 10, independence: 6, curiosity: 8, balance: 7, careerFocus: 8, affordability: 6, academicRigor: 7, athletics: 4, socialImpact: 9 },
  },
  {
    id: "uoregon",
    name: "University of Oregon",
    location: "Eugene, OR",
    vibe: "Creative misfits welcome",
    tagline: "Where Nike was born and weirdness is celebrated",
    description:
      "Phil Knight went here and poured billions back in. The facilities are insane, the culture is laid-back, and creativity runs deep.",
    funFact:
      "Nike was literally founded here by a track coach. The athletic facilities rival professional teams.",
    studentBody: "~23,000 students",
    mascot: "The Duck",
    knownFor: ["Nike connection", "Track & field", "Journalism", "Pacific Northwest vibes"],
    scores: { adventure: 8, creativity: 8, ambition: 5, community: 7, independence: 7, curiosity: 6, balance: 8, careerFocus: 6, affordability: 7, academicRigor: 6, athletics: 9, socialImpact: 6 },
  },
  {
    id: "georgetown",
    name: "Georgetown University",
    location: "Washington, D.C.",
    vibe: "Future diplomats & power players",
    tagline: "Where policy is personal and connections are everything",
    description:
      "Steps from the Capitol, Georgetown breeds the next generation of leaders in politics, international affairs, and law. The networking is unmatched.",
    funFact:
      "Bill Clinton went here. It's common to intern at the White House while grabbing cupcakes in Georgetown between classes.",
    studentBody: "~20,000 students",
    mascot: "Jack the Bulldog (Hoyas)",
    knownFor: ["Foreign service", "Politics", "D.C. location", "Basketball"],
    scores: { adventure: 5, creativity: 5, ambition: 10, community: 8, independence: 6, curiosity: 8, balance: 5, careerFocus: 9, affordability: 4, academicRigor: 8, athletics: 6, socialImpact: 8 },
  },
  {
    id: "usc",
    name: "University of Southern California",
    location: "Los Angeles, CA",
    vibe: "Hollywood meets higher ed",
    tagline: "Lights, camera, education",
    description:
      "USC sits in the heart of LA and is THE pipeline to entertainment, media, and the creative industries. Fight On is more than a slogan -- it's a lifestyle.",
    funFact:
      "The USC film school has produced more blockbuster directors than any other school. George Lucas is an alum.",
    studentBody: "~49,000 students",
    mascot: "Tommy Trojan (Traveler the horse)",
    knownFor: ["Film school", "Alumni network", "Greek life", "Football"],
    scores: { adventure: 7, creativity: 10, ambition: 8, community: 7, independence: 7, curiosity: 6, balance: 5, careerFocus: 8, affordability: 4, academicRigor: 7, athletics: 9, socialImpact: 5 },
  },
  {
    id: "wisconsin",
    name: "University of Wisconsin-Madison",
    location: "Madison, WI",
    vibe: "Big Ten energy, big heart",
    tagline: "On Wisconsin! (and on the lake, and at the game, and...)",
    description:
      "A massive research university that still feels like a tight community. The campus sits between two lakes, the food scene is incredible, and game days are electric.",
    funFact:
      "The Terrace at Memorial Union is one of the most iconic college hangout spots in America. Students eat cheese curds year-round.",
    studentBody: "~47,000 students",
    mascot: "Bucky Badger",
    knownFor: ["Research", "Game days", "Lakeside campus", "Dairy science (yes, really)"],
    scores: { adventure: 7, creativity: 5, ambition: 7, community: 9, independence: 6, curiosity: 8, balance: 8, careerFocus: 7, affordability: 8, academicRigor: 7, athletics: 9, socialImpact: 6 },
  },
  {
    id: "risd",
    name: "Rhode Island School of Design",
    location: "Providence, RI",
    vibe: "Art school, no apologies",
    tagline: "If you think in colors and shapes, you belong here",
    description:
      "RISD is one of the top art and design schools in the world. It's intense, it's demanding, and it produces people who literally reshape how the world looks.",
    funFact:
      "RISD shares resources with Brown University next door. You get art school AND Ivy League access.",
    studentBody: "~2,500 students",
    mascot: "Scrotie (look it up -- it's real)",
    knownFor: ["Fine arts", "Industrial design", "Architecture", "Brown cross-enrollment"],
    scores: { adventure: 5, creativity: 10, ambition: 7, community: 6, independence: 9, curiosity: 9, balance: 4, careerFocus: 8, affordability: 3, academicRigor: 9, athletics: 1, socialImpact: 6 },
  },
  {
    id: "famu",
    name: "Florida A&M University",
    location: "Tallahassee, FL",
    vibe: "Marching 100 energy",
    tagline: "Excellence with a beat you can feel",
    description:
      "FAMU is a top-ranked HBCU known for its incredible marching band, strong STEM programs, and a campus culture that pulses with pride and purpose.",
    funFact:
      "The Marching 100 has performed at Super Bowls and presidential inaugurations. They're that good.",
    studentBody: "~10,000 students",
    mascot: "Rattlers",
    knownFor: ["Marching 100 band", "Pharmacy program", "HBCU pride", "Greek life"],
    scores: { adventure: 6, creativity: 7, ambition: 8, community: 10, independence: 5, curiosity: 6, balance: 7, careerFocus: 7, affordability: 8, academicRigor: 6, athletics: 8, socialImpact: 8 },
  },
  {
    id: "cal-poly",
    name: "Cal Poly San Luis Obispo",
    location: "San Luis Obispo, CA",
    vibe: "Learn by doing (literally their motto)",
    tagline: "Hands-on education in the happiest city in America",
    description:
      "Cal Poly is all about applied learning in one of the most beautiful college towns in the country. You don't just study engineering -- you build things.",
    funFact:
      "SLO (San Luis Obispo) was rated the happiest city in America. The Thursday night farmers market is a weekly campus tradition.",
    studentBody: "~22,000 students",
    mascot: "Musty the Mustang",
    knownFor: ["Learn by Doing", "Engineering", "Architecture", "Wine country location"],
    scores: { adventure: 8, creativity: 6, ambition: 7, community: 8, independence: 7, curiosity: 7, balance: 9, careerFocus: 9, affordability: 8, academicRigor: 7, athletics: 6, socialImpact: 5 },
  },
  {
    id: "vanderbilt",
    name: "Vanderbilt University",
    location: "Nashville, TN",
    vibe: "Music City scholars",
    tagline: "An arboretum campus in the best city for a night out",
    description:
      "Vanderbilt gives you elite academics wrapped in Nashville's music, food, and culture. The campus is a literal national arboretum.",
    funFact:
      "The campus has its own arboretum status. On any given night, you can see a free concert on Broadway (the Nashville one).",
    studentBody: "~13,800 students",
    mascot: "Mr. C (Commodores)",
    knownFor: ["Nashville location", "Pre-med", "Education school", "Greek life"],
    scores: { adventure: 6, creativity: 7, ambition: 9, community: 8, independence: 5, curiosity: 7, balance: 7, careerFocus: 8, affordability: 5, academicRigor: 8, athletics: 7, socialImpact: 6 },
  },
  {
    id: "uw",
    name: "University of Washington",
    location: "Seattle, WA",
    vibe: "Tech + nature + coffee",
    tagline: "Cherry blossoms, coding, and mountain views",
    description:
      "UW sits in Seattle's University District with views of Mount Rainier. It's a powerhouse for tech and medicine, and the campus is jaw-droppingly beautiful.",
    funFact:
      "The Suzzallo Library looks like something out of Harry Potter. Cherry blossom season on the Quad is a must-see.",
    studentBody: "~47,000 students",
    mascot: "Harry the Husky",
    knownFor: ["Computer science", "Medicine", "Cherry blossom quad", "Seattle tech scene"],
    scores: { adventure: 8, creativity: 7, ambition: 8, community: 6, independence: 8, curiosity: 9, balance: 6, careerFocus: 8, affordability: 7, academicRigor: 7, athletics: 7, socialImpact: 6 },
  },
  {
    id: "morehouse",
    name: "Morehouse College",
    location: "Atlanta, GA",
    vibe: "Brotherhood & greatness",
    tagline: "Making men of consequence since 1867",
    description:
      "The only all-male HBCU in the country. Morehouse produces leaders -- from MLK Jr. to Spike Lee. The brotherhood is lifelong.",
    funFact:
      "In 2019, billionaire Robert F. Smith paid off the entire graduating class's student loans at commencement.",
    studentBody: "~2,200 students",
    mascot: "Maroon Tigers",
    knownFor: ["MLK's alma mater", "Brotherhood", "Leadership development", "Atlanta University Center"],
    scores: { adventure: 4, creativity: 6, ambition: 10, community: 10, independence: 5, curiosity: 7, balance: 6, careerFocus: 8, affordability: 6, academicRigor: 7, athletics: 5, socialImpact: 9 },
  },
  {
    id: "ut-austin",
    name: "University of Texas at Austin",
    location: "Austin, TX",
    vibe: "Keep Austin weird (and educated)",
    tagline: "Hook 'em in the live music capital of the world",
    description:
      "UT Austin is massive, ambitious, and sits in one of the coolest cities in America. From tech to music to football, it's got everything.",
    funFact:
      "6th Street is one of the most famous nightlife strips in the country, and it's walking distance from campus. SXSW happens here every year.",
    studentBody: "~52,000 students",
    mascot: "Bevo the Longhorn",
    knownFor: ["Business (McCombs)", "Engineering", "Football", "Austin culture"],
    scores: { adventure: 8, creativity: 7, ambition: 8, community: 7, independence: 7, curiosity: 7, balance: 7, careerFocus: 8, affordability: 8, academicRigor: 7, athletics: 9, socialImpact: 6 },
  },
  {
    id: "oberlin",
    name: "Oberlin College",
    location: "Oberlin, OH",
    vibe: "Radically curious",
    tagline: "First to admit women, first to admit Black students, still leading",
    description:
      "Oberlin has been ahead of every curve since 1833. A small liberal arts college with a world-class conservatory, it attracts independent thinkers and artists.",
    funFact:
      "Oberlin was the first coed college in the US and has one of the best music conservatories in the world.",
    studentBody: "~3,000 students",
    mascot: "Yeomen/Yeowomen",
    knownFor: ["Conservatory of Music", "Progressive history", "Small classes", "Creative arts"],
    scores: { adventure: 4, creativity: 10, ambition: 6, community: 8, independence: 9, curiosity: 10, balance: 6, careerFocus: 5, affordability: 5, academicRigor: 8, athletics: 3, socialImpact: 10 },
  },
  {
    id: "clemson",
    name: "Clemson University",
    location: "Clemson, SC",
    vibe: "All-in Saturdays, all-in always",
    tagline: "Death Valley isn't just for football -- it's a way of life",
    description:
      "Clemson has one of the most passionate fan bases in the country and a beautiful lakeside campus. The sense of family here is unlike anywhere else.",
    funFact:
      "Howard's Rock: every Clemson football player touches it before running down the hill into Death Valley. It's electric.",
    studentBody: "~27,000 students",
    mascot: "The Tiger",
    knownFor: ["Football", "Engineering", "Lakeside campus", "Southern hospitality"],
    scores: { adventure: 6, creativity: 4, ambition: 7, community: 10, independence: 4, curiosity: 5, balance: 8, careerFocus: 7, affordability: 7, academicRigor: 6, athletics: 10, socialImpact: 5 },
  },
  {
    id: "berkeley",
    name: "UC Berkeley",
    location: "Berkeley, CA",
    vibe: "Activist scholars",
    tagline: "Where free speech started and big brains never stop",
    description:
      "Berkeley is the original public university powerhouse. It's rigorous, diverse, politically charged, and produces Nobel laureates like it's nothing.",
    funFact:
      "Berkeley has more Nobel laureates among its faculty than most countries. The Free Speech Movement started here in 1964.",
    studentBody: "~45,000 students",
    mascot: "Oski the Bear (Golden Bears)",
    knownFor: ["STEM", "Social activism", "Research", "Bay Area access"],
    scores: { adventure: 6, creativity: 7, ambition: 9, community: 6, independence: 9, curiosity: 10, balance: 4, careerFocus: 8, affordability: 7, academicRigor: 9, athletics: 7, socialImpact: 10 },
  },
  {
    id: "colorado-college",
    name: "Colorado College",
    location: "Colorado Springs, CO",
    vibe: "One class at a time, all adventure all the time",
    tagline: "The Block Plan: 3.5 weeks, one subject, total immersion",
    description:
      "CC uses the Block Plan -- you take one class at a time for 3.5 weeks, then move to the next. It's intense, focused, and leaves long weekends for the mountains.",
    funFact:
      "Block breaks mean 4-day weekends every 3.5 weeks. Students regularly go skiing, climbing, or road-tripping between blocks.",
    studentBody: "~2,200 students",
    mascot: "Prowl the Tiger",
    knownFor: ["Block Plan", "Outdoor culture", "Small classes", "Hockey"],
    scores: { adventure: 10, creativity: 7, ambition: 6, community: 7, independence: 9, curiosity: 8, balance: 8, careerFocus: 5, affordability: 4, academicRigor: 8, athletics: 5, socialImpact: 7 },
  },
  {
    id: "tulane",
    name: "Tulane University",
    location: "New Orleans, LA",
    vibe: "Service + soul + second lines",
    tagline: "Get a degree and a gumbo recipe",
    description:
      "Tulane is in New Orleans, which means the food is incredible, the culture is rich, and the community service tradition runs deep. Mardi Gras is a school holiday.",
    funFact:
      "Tulane is the only major university where Mardi Gras is an official school holiday. Community service is a graduation requirement.",
    studentBody: "~14,000 students",
    mascot: "Riptide (Green Wave)",
    knownFor: ["New Orleans culture", "Public health", "Service learning", "Mardi Gras"],
    scores: { adventure: 8, creativity: 8, ambition: 7, community: 9, independence: 6, curiosity: 7, balance: 8, careerFocus: 6, affordability: 4, academicRigor: 7, athletics: 6, socialImpact: 8 },
  },
  {
    id: "umich",
    name: "University of Michigan",
    location: "Ann Arbor, MI",
    vibe: "The Leaders and Best (they mean it)",
    tagline: "A college town so good, people never leave",
    description:
      "Michigan is massive but somehow feels personal. Ann Arbor is one of the best college towns in America, and the alumni network is absurdly loyal.",
    funFact:
      "The Big House holds 107,000+ people -- the largest stadium in the US. Game day in Ann Arbor is a bucket-list experience.",
    studentBody: "~48,000 students",
    mascot: "Wolverines",
    knownFor: ["The Big House", "Ross Business School", "Research", "School spirit"],
    scores: { adventure: 6, creativity: 6, ambition: 9, community: 9, independence: 6, curiosity: 8, balance: 7, careerFocus: 8, affordability: 6, academicRigor: 8, athletics: 10, socialImpact: 7 },
  },
  {
    id: "pomona",
    name: "Pomona College",
    location: "Claremont, CA",
    vibe: "Tiny school, massive opportunity",
    tagline: "Elite academics with a SoCal chill",
    description:
      "Pomona is a top-5 liberal arts college where you know your professors by name. Part of the Claremont consortium, so you get small-school feel with big-school resources.",
    funFact:
      "You can cross-enroll at 4 other Claremont colleges. It's like having 5 colleges in one, plus hiking in the San Gabriel Mountains.",
    studentBody: "~1,800 students",
    mascot: "Cecil Sagehen",
    knownFor: ["Claremont consortium", "Small classes", "SoCal weather", "Graduate school placement"],
    scores: { adventure: 6, creativity: 7, ambition: 8, community: 8, independence: 7, curiosity: 9, balance: 8, careerFocus: 7, affordability: 6, academicRigor: 9, athletics: 4, socialImpact: 7 },
  },
  {
    id: "astate",
    name: "Arizona State University",
    location: "Tempe, AZ",
    vibe: "Innovation at scale",
    tagline: "The most innovative university in America (9 years running)",
    description:
      "ASU has reinvented what a public university can be. Massive resources, endless sunshine, and a commitment to access that's changing higher education.",
    funFact:
      "ASU has been ranked #1 in innovation by U.S. News for 9 consecutive years, ahead of MIT and Stanford.",
    studentBody: "~80,000 students",
    mascot: "Sparky the Sun Devil",
    knownFor: ["Innovation", "Online programs", "Sustainability", "Scale with quality"],
    scores: { adventure: 7, creativity: 6, ambition: 7, community: 6, independence: 8, curiosity: 7, balance: 8, careerFocus: 7, affordability: 9, academicRigor: 6, athletics: 7, socialImpact: 6 },
  },
  {
    id: "bowdoin",
    name: "Bowdoin College",
    location: "Brunswick, ME",
    vibe: "Coastal Maine intellectuals",
    tagline: "Lobster bakes and library stacks",
    description:
      "Bowdoin is a top liberal arts college on the Maine coast. The food is consistently rated the best of any college in America. The academics are just as good.",
    funFact:
      "Bowdoin's dining hall food is legendary -- think lobster bakes, local seafood, and farm-to-table everything. #1 college food in America.",
    studentBody: "~1,900 students",
    mascot: "Polar Bears",
    knownFor: ["Best college food", "Maine coast", "No Greek life", "Environmental studies"],
    scores: { adventure: 6, creativity: 6, ambition: 7, community: 9, independence: 7, curiosity: 9, balance: 8, careerFocus: 6, affordability: 6, academicRigor: 8, athletics: 4, socialImpact: 7 },
  },
  {
    id: "gatech",
    name: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    vibe: "Engineers who know how to party",
    tagline: "Building the future from Midtown Atlanta",
    description:
      "Georgia Tech is an engineering powerhouse in one of the most vibrant cities in the South. Tough academics, great co-op programs, and a buzzing Atlanta social scene.",
    funFact:
      "The Ramblin' Wreck is one of the most famous mascots -- it's an actual 1930 Ford Model A that leads the team onto the field.",
    studentBody: "~45,000 students",
    mascot: "Buzz (Yellow Jackets)",
    knownFor: ["Engineering", "Computing", "Co-op programs", "Atlanta tech scene"],
    scores: { adventure: 5, creativity: 6, ambition: 9, community: 7, independence: 7, curiosity: 9, balance: 4, careerFocus: 9, affordability: 8, academicRigor: 9, athletics: 7, socialImpact: 5 },
  },
  {
    id: "middlebury",
    name: "Middlebury College",
    location: "Middlebury, VT",
    vibe: "Global minds in a Vermont village",
    tagline: "Languages, skiing, and figuring out the world",
    description:
      "Middlebury is world-famous for languages and international studies, set in a gorgeous Vermont town. Ski season is basically part of the curriculum.",
    funFact:
      "The language immersion programs are so intense, you sign a pledge to ONLY speak your target language -- no English -- for the entire program.",
    studentBody: "~2,800 students",
    mascot: "Panthers",
    knownFor: ["Language programs", "International studies", "Skiing", "Environmental focus"],
    scores: { adventure: 8, creativity: 6, ambition: 7, community: 8, independence: 7, curiosity: 9, balance: 7, careerFocus: 6, affordability: 5, academicRigor: 8, athletics: 5, socialImpact: 8 },
  },
  {
    id: "rice",
    name: "Rice University",
    location: "Houston, TX",
    vibe: "Ivy-caliber, Texas-sized fun",
    tagline: "The best school most people forget to apply to",
    description:
      "Rice is a hidden gem: tiny classes, world-class research, a residential college system like Hogwarts, and it's way more fun than people expect.",
    funFact:
      "The residential college system means you get sorted into a 'house' freshman year. Beer Bike is the biggest party of the year -- it's like a festival.",
    studentBody: "~8,000 students",
    mascot: "Sammy the Owl",
    knownFor: ["Residential colleges", "Engineering", "Beer Bike", "Houston food scene"],
    scores: { adventure: 5, creativity: 7, ambition: 9, community: 9, independence: 6, curiosity: 9, balance: 7, careerFocus: 8, affordability: 7, academicRigor: 9, athletics: 4, socialImpact: 6 },
  },
  {
    id: "uvm",
    name: "University of Vermont",
    location: "Burlington, VT",
    vibe: "Chill, green, and intentional",
    tagline: "Ben & Jerry's started here. Need we say more?",
    description:
      "UVM is in Burlington, one of the most livable small cities in America. It's progressive, outdoorsy, and attracts students who care about the planet.",
    funFact:
      "Ben Cohen and Jerry Greenfield took a $5 ice cream course at UVM before starting Ben & Jerry's. Burlington is consistently ranked a top college town.",
    studentBody: "~13,500 students",
    mascot: "Rally Cat (Catamounts)",
    knownFor: ["Environmental science", "Burlington culture", "Skiing", "Sustainability"],
    scores: { adventure: 9, creativity: 6, ambition: 5, community: 8, independence: 8, curiosity: 7, balance: 9, careerFocus: 5, affordability: 6, academicRigor: 6, athletics: 5, socialImpact: 8 },
  },
  {
    id: "duke",
    name: "Duke University",
    location: "Durham, NC",
    vibe: "Gothic campus, modern power",
    tagline: "Cameron Crazies and cutting-edge research",
    description:
      "Duke's Gothic architecture makes it feel like Hogwarts, but the research and basketball make it distinctly American. Durham's food scene is a bonus.",
    funFact:
      "Tenting for Duke basketball tickets (Krzyzewskiville) starts WEEKS before the UNC game. Students camp out in tents.",
    studentBody: "~17,000 students",
    mascot: "Blue Devil",
    knownFor: ["Basketball", "Medical school", "Gothic architecture", "Research"],
    scores: { adventure: 5, creativity: 6, ambition: 10, community: 8, independence: 6, curiosity: 9, balance: 6, careerFocus: 9, affordability: 5, academicRigor: 9, athletics: 9, socialImpact: 7 },
  },
  {
    id: "ucsc",
    name: "UC Santa Cruz",
    location: "Santa Cruz, CA",
    vibe: "Redwoods and radical thinkers",
    tagline: "A university in a forest overlooking the ocean",
    description:
      "UCSC is built into a redwood forest with views of the Pacific Ocean. It's unconventional, laid-back, and attracts students who think differently.",
    funFact:
      "The unofficial motto is 'Keep Santa Cruz Weird.' The campus is literally in a redwood forest with deer walking through it.",
    studentBody: "~19,500 students",
    mascot: "Sammy the Slug (no joke -- voted by students)",
    knownFor: ["Marine biology", "Astronomy", "Redwood campus", "Counter-culture"],
    scores: { adventure: 8, creativity: 8, ambition: 5, community: 7, independence: 9, curiosity: 9, balance: 8, careerFocus: 5, affordability: 7, academicRigor: 6, athletics: 2, socialImpact: 8 },
  },
  {
    id: "notre-dame",
    name: "University of Notre Dame",
    location: "Notre Dame, IN",
    vibe: "Tradition runs deep",
    tagline: "Touchdown Jesus is watching",
    description:
      "Notre Dame is one of the most tradition-rich universities in America. The loyalty of its community is unmatched -- alumni bleed blue and gold.",
    funFact:
      "Touchdown Jesus (a giant mural of Christ with raised arms) overlooks the football stadium. Game days are a pilgrimage.",
    studentBody: "~12,600 students",
    mascot: "The Leprechaun (Fighting Irish)",
    knownFor: ["Football", "Catholic tradition", "Alumni loyalty", "Business school"],
    scores: { adventure: 4, creativity: 4, ambition: 9, community: 10, independence: 4, curiosity: 6, balance: 7, careerFocus: 8, affordability: 5, academicRigor: 8, athletics: 10, socialImpact: 7 },
  },
  {
    id: "savannah-scad",
    name: "Savannah College of Art and Design",
    location: "Savannah, GA",
    vibe: "Where creativity is the entire point",
    tagline: "Turn your passion into your profession",
    description:
      "SCAD is one of the largest art and design universities in the US, set in gorgeous historic Savannah. Every building is a restored historic landmark.",
    funFact:
      "SCAD's campus IS downtown Savannah -- historic buildings converted into studios, theaters, and galleries. The whole city is your art studio.",
    studentBody: "~16,000 students",
    mascot: "The Bees",
    knownFor: ["Art & design", "Historic campus", "Film & animation", "Fashion"],
    scores: { adventure: 6, creativity: 10, ambition: 7, community: 7, independence: 8, curiosity: 7, balance: 6, careerFocus: 8, affordability: 4, academicRigor: 7, athletics: 3, socialImpact: 5 },
  },
  {
    id: "purdue",
    name: "Purdue University",
    location: "West Lafayette, IN",
    vibe: "Boilermakers build things",
    tagline: "The Cradle of Astronauts",
    description:
      "Purdue has sent more astronauts to space than any other university. It's a no-nonsense engineering powerhouse with Midwestern grit and heart.",
    funFact:
      "Neil Armstrong, the first person on the moon, went to Purdue. So did 24 other astronauts. Space is basically a Purdue alumni event.",
    studentBody: "~50,000 students",
    mascot: "Purdue Pete (Boilermakers)",
    knownFor: ["Astronauts", "Engineering", "Agriculture", "Affordable tuition"],
    scores: { adventure: 4, creativity: 4, ambition: 8, community: 8, independence: 5, curiosity: 8, balance: 7, careerFocus: 9, affordability: 8, academicRigor: 8, athletics: 7, socialImpact: 5 },
  },
  {
    id: "whitman",
    name: "Whitman College",
    location: "Walla Walla, WA",
    vibe: "Small-town gem, big ideas",
    tagline: "Wine country + liberal arts = unexpectedly perfect",
    description:
      "Whitman is a hidden treasure in Washington wine country. Tiny classes, dedicated professors, and a tight-knit community of curious people.",
    funFact:
      "Walla Walla has more than 120 wineries. Students can study viticulture and wine science as part of their coursework.",
    studentBody: "~1,500 students",
    mascot: "Missionaries (Blues)",
    knownFor: ["Outdoor recreation", "Wine country", "Close-knit community", "Debate team"],
    scores: { adventure: 7, creativity: 6, ambition: 6, community: 9, independence: 7, curiosity: 8, balance: 9, careerFocus: 5, affordability: 5, academicRigor: 7, athletics: 4, socialImpact: 6 },
  },
  {
    id: "howard-payne",
    name: "Emory University",
    location: "Atlanta, GA",
    vibe: "Quietly excellent",
    tagline: "The best school in Atlanta you didn't think about",
    description:
      "Emory is a top-20 research university with an incredible pre-med program, a beautiful campus, and access to everything Atlanta has to offer.",
    funFact:
      "The CDC headquarters is literally next door. Pre-med students can research alongside the world's leading epidemiologists.",
    studentBody: "~15,000 students",
    mascot: "Swoop the Eagle",
    knownFor: ["Pre-med & health sciences", "CDC proximity", "Goizueta Business School", "Beautiful campus"],
    scores: { adventure: 4, creativity: 5, ambition: 9, community: 7, independence: 6, curiosity: 9, balance: 6, careerFocus: 8, affordability: 5, academicRigor: 8, athletics: 4, socialImpact: 7 },
  },
  {
    id: "montana",
    name: "University of Montana",
    location: "Missoula, MT",
    vibe: "Wild and literary",
    tagline: "A River Runs Through It (literally, through campus)",
    description:
      "UM is for people who want big sky, big adventure, and a surprisingly strong creative writing program. Missoula punches way above its weight culturally.",
    funFact:
      "Missoula has more writers per capita than almost anywhere in the US. The Clark Fork River runs right through campus -- students fly-fish between classes.",
    studentBody: "~10,000 students",
    mascot: "Monte (Grizzlies)",
    knownFor: ["Creative writing", "Wildlife biology", "Outdoor recreation", "Fly fishing"],
    scores: { adventure: 10, creativity: 8, ambition: 4, community: 7, independence: 9, curiosity: 7, balance: 9, careerFocus: 4, affordability: 8, academicRigor: 5, athletics: 6, socialImpact: 6 },
  },
];
