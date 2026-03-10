export const YEARS = [2023, 2017, 2013, 2009, 2006];

export const COUNTRY_INFO: Record<string, { abbr: string, flag: string, code: string }> = {
  "South Korea": { abbr: "KOR", flag: "🇰🇷", code: "kr" },
  "Japan": { abbr: "JPN", flag: "🇯🇵", code: "jp" },
  "Chinese Taipei": { abbr: "TPE", flag: "🇹🇼", code: "tw" },
  "China": { abbr: "CHN", flag: "🇨🇳", code: "cn" },
  "Mexico": { abbr: "MEX", flag: "🇲🇽", code: "mx" },
  "United States": { abbr: "USA", flag: "🇺🇸", code: "us" },
  "Canada": { abbr: "CAN", flag: "🇨🇦", code: "ca" },
  "South Africa": { abbr: "RSA", flag: "🇿🇦", code: "za" },
  "Puerto Rico": { abbr: "PUR", flag: "🇵🇷", code: "pr" },
  "Cuba": { abbr: "CUB", flag: "🇨🇺", code: "cu" },
  "Netherlands": { abbr: "NED", flag: "🇳🇱", code: "nl" },
  "Panama": { abbr: "PAN", flag: "🇵🇦", code: "pa" },
  "Dominican Republic": { abbr: "DOM", flag: "🇩🇴", code: "do" },
  "Venezuela": { abbr: "VEN", flag: "🇻🇪", code: "ve" },
  "Italy": { abbr: "ITA", flag: "🇮🇹", code: "it" },
  "Australia": { abbr: "AUS", flag: "🇦🇺", code: "au" },
  "Brazil": { abbr: "BRA", flag: "🇧🇷", code: "br" },
  "Spain": { abbr: "ESP", flag: "🇪🇸", code: "es" },
  "Israel": { abbr: "ISR", flag: "🇮🇱", code: "il" },
  "Colombia": { abbr: "COL", flag: "🇨🇴", code: "co" },
  "Czech Republic": { abbr: "CZE", flag: "🇨🇿", code: "cz" },
  "Great Britain": { abbr: "GBR", flag: "🇬🇧", code: "gb" },
  "Nicaragua": { abbr: "NCA", flag: "🇳🇮", code: "ni" },
};

export const CHAMPIONS = [
  { year: 2006, team: "Japan", mvp: "Daisuke Matsuzaka", runnerUp: "Cuba" },
  { year: 2009, team: "Japan", mvp: "Daisuke Matsuzaka", runnerUp: "South Korea" },
  { year: 2013, team: "Dominican Republic", mvp: "Robinson Canó", runnerUp: "Puerto Rico" },
  { year: 2017, team: "United States", mvp: "Marcus Stroman", runnerUp: "Puerto Rico" },
  { year: 2023, team: "Japan", mvp: "Shohei Ohtani", runnerUp: "United States" },
];

export const GROUP_STAGES = {
  2006: [
    {
      group: "Pool A", location: "Tokyo, Japan",
      teams: [
        { name: "South Korea", wins: 3, losses: 0, runsAllowed: 3 },
        { name: "Japan", wins: 2, losses: 1, runsAllowed: 5 },
        { name: "Chinese Taipei", wins: 1, losses: 2, runsAllowed: 19 },
        { name: "China", wins: 0, losses: 3, runsAllowed: 40 },
      ],
    },
    {
      group: "Pool B", location: "Phoenix, USA",
      teams: [
        { name: "Mexico", wins: 2, losses: 1, runsAllowed: 7 },
        { name: "United States", wins: 2, losses: 1, runsAllowed: 13 },
        { name: "Canada", wins: 2, losses: 1, runsAllowed: 14 },
        { name: "South Africa", wins: 0, losses: 3, runsAllowed: 38 },
      ],
    },
    {
      group: "Pool C", location: "San Juan, Puerto Rico",
      teams: [
        { name: "Puerto Rico", wins: 3, losses: 0, runsAllowed: 6 },
        { name: "Cuba", wins: 2, losses: 1, runsAllowed: 17 },
        { name: "Netherlands", wins: 1, losses: 2, runsAllowed: 19 },
        { name: "Panama", wins: 0, losses: 3, runsAllowed: 17 },
      ],
    },
    {
      group: "Pool D", location: "Orlando, USA",
      teams: [
        { name: "Dominican Republic", wins: 3, losses: 0, runsAllowed: 12 },
        { name: "Venezuela", wins: 2, losses: 1, runsAllowed: 12 },
        { name: "Italy", wins: 1, losses: 2, runsAllowed: 17 },
        { name: "Australia", wins: 0, losses: 3, runsAllowed: 21 },
      ],
    },
  ],
  2009: [
    {
      group: "Pool A", location: "Tokyo, Japan",
      teams: [
        { name: "South Korea", wins: 3, losses: 1, runsAllowed: 16 },
        { name: "Japan", wins: 2, losses: 2, runsAllowed: 6 },
        { name: "China", wins: 1, losses: 2, runsAllowed: 18 },
        { name: "Chinese Taipei", wins: 0, losses: 2, runsAllowed: 13 },
      ],
    },
    {
      group: "Pool B", location: "Mexico City, Mexico",
      teams: [
        { name: "Cuba", wins: 3, losses: 0, runsAllowed: 10 },
        { name: "Mexico", wins: 2, losses: 2, runsAllowed: 30 },
        { name: "Australia", wins: 1, losses: 2, runsAllowed: 22 },
        { name: "South Africa", wins: 0, losses: 2, runsAllowed: 22 },
      ],
    },
    {
      group: "Pool C", location: "Toronto, Canada",
      teams: [
        { name: "Venezuela", wins: 3, losses: 0, runsAllowed: 4 },
        { name: "United States", wins: 2, losses: 2, runsAllowed: 24 },
        { name: "Italy", wins: 1, losses: 2, runsAllowed: 15 },
        { name: "Canada", wins: 0, losses: 2, runsAllowed: 12 },
      ],
    },
    {
      group: "Pool D", location: "San Juan, Puerto Rico",
      teams: [
        { name: "Puerto Rico", wins: 3, losses: 0, runsAllowed: 1 },
        { name: "Netherlands", wins: 2, losses: 2, runsAllowed: 10 },
        { name: "Dominican Republic", wins: 1, losses: 2, runsAllowed: 5 },
        { name: "Panama", wins: 0, losses: 2, runsAllowed: 16 },
      ],
    },
  ],
  2013: [
    {
      group: "Pool A", location: "Fukuoka, Japan",
      teams: [
        { name: "Cuba", wins: 3, losses: 0, runsAllowed: 5 },
        { name: "Japan", wins: 2, losses: 1, runsAllowed: 10 },
        { name: "China", wins: 1, losses: 2, runsAllowed: 19 },
        { name: "Brazil", wins: 0, losses: 3, runsAllowed: 12 },
      ],
    },
    {
      group: "Pool B", location: "Taichung, Taiwan",
      teams: [
        { name: "Chinese Taipei", wins: 2, losses: 1, runsAllowed: 10 },
        { name: "Netherlands", wins: 2, losses: 1, runsAllowed: 12 },
        { name: "South Korea", wins: 2, losses: 1, runsAllowed: 7 },
        { name: "Australia", wins: 0, losses: 3, runsAllowed: 14 },
      ],
    },
    {
      group: "Pool C", location: "San Juan, Puerto Rico",
      teams: [
        { name: "Dominican Republic", wins: 3, losses: 0, runsAllowed: 4 },
        { name: "Puerto Rico", wins: 2, losses: 1, runsAllowed: 7 },
        { name: "Venezuela", wins: 1, losses: 2, runsAllowed: 17 },
        { name: "Spain", wins: 0, losses: 3, runsAllowed: 20 },
      ],
    },
    {
      group: "Pool D", location: "Phoenix, USA",
      teams: [
        { name: "United States", wins: 2, losses: 1, runsAllowed: 11 },
        { name: "Italy", wins: 2, losses: 1, runsAllowed: 11 },
        { name: "Canada", wins: 1, losses: 2, runsAllowed: 20 },
        { name: "Mexico", wins: 1, losses: 2, runsAllowed: 18 },
      ],
    },
  ],
  2017: [
    {
      group: "Pool A", location: "Seoul, South Korea",
      teams: [
        { name: "Israel", wins: 3, losses: 0, runsAllowed: 4 },
        { name: "Netherlands", wins: 2, losses: 1, runsAllowed: 6 },
        { name: "South Korea", wins: 1, losses: 2, runsAllowed: 12 },
        { name: "Chinese Taipei", wins: 0, losses: 3, runsAllowed: 32 },
      ],
    },
    {
      group: "Pool B", location: "Tokyo, Japan",
      teams: [
        { name: "Japan", wins: 3, losses: 0, runsAllowed: 8 },
        { name: "Cuba", wins: 2, losses: 1, runsAllowed: 15 },
        { name: "Australia", wins: 1, losses: 2, runsAllowed: 8 },
        { name: "China", wins: 0, losses: 3, runsAllowed: 24 },
      ],
    },
    {
      group: "Pool C", location: "Miami, USA",
      teams: [
        { name: "Dominican Republic", wins: 3, losses: 0, runsAllowed: 6 },
        { name: "United States", wins: 2, losses: 1, runsAllowed: 10 },
        { name: "Colombia", wins: 1, losses: 2, runsAllowed: 14 },
        { name: "Canada", wins: 0, losses: 3, runsAllowed: 21 },
      ],
    },
    {
      group: "Pool D", location: "Jalisco, Mexico",
      teams: [
        { name: "Puerto Rico", wins: 3, losses: 0, runsAllowed: 7 },
        { name: "Venezuela", wins: 1, losses: 2, runsAllowed: 32 },
        { name: "Italy", wins: 1, losses: 2, runsAllowed: 24 },
        { name: "Mexico", wins: 1, losses: 2, runsAllowed: 20 },
      ],
    },
  ],
  2023: [
    {
      group: "Pool A",
      location: "Taichung, Taiwan",
      teams: [
        { name: "Cuba", wins: 2, losses: 2, runsAllowed: 15 },
        { name: "Italy", wins: 2, losses: 2, runsAllowed: 17 },
        { name: "Netherlands", wins: 2, losses: 2, runsAllowed: 19 },
        { name: "Panama", wins: 2, losses: 2, runsAllowed: 21 },
        { name: "Chinese Taipei", wins: 2, losses: 2, runsAllowed: 31 },
      ],
    },
    {
      group: "Pool B",
      location: "Tokyo, Japan",
      teams: [
        { name: "Japan", wins: 4, losses: 0, runsAllowed: 8 },
        { name: "Australia", wins: 3, losses: 1, runsAllowed: 19 },
        { name: "South Korea", wins: 2, losses: 2, runsAllowed: 26 },
        { name: "Czech Republic", wins: 1, losses: 3, runsAllowed: 30 },
        { name: "China", wins: 0, losses: 4, runsAllowed: 50 },
      ],
    },
    {
      group: "Pool C",
      location: "Phoenix, USA",
      teams: [
        { name: "Mexico", wins: 3, losses: 1, runsAllowed: 14 },
        { name: "United States", wins: 3, losses: 1, runsAllowed: 16 },
        { name: "Canada", wins: 2, losses: 2, runsAllowed: 30 },
        { name: "Great Britain", wins: 1, losses: 3, runsAllowed: 30 },
        { name: "Colombia", wins: 1, losses: 3, runsAllowed: 19 },
      ],
    },
    {
      group: "Pool D",
      location: "Miami, USA",
      teams: [
        { name: "Venezuela", wins: 4, losses: 0, runsAllowed: 9 },
        { name: "Puerto Rico", wins: 3, losses: 1, runsAllowed: 12 },
        { name: "Dominican Republic", wins: 2, losses: 2, runsAllowed: 11 },
        { name: "Israel", wins: 1, losses: 3, runsAllowed: 33 },
        { name: "Nicaragua", wins: 0, losses: 4, runsAllowed: 22 },
      ],
    },
  ],
};

export const TOURNAMENT_RESULTS = {
  2006: [
    { stage: "Semifinals", team1: "Cuba", score1: 3, team2: "Dominican Republic", score2: 1 },
    { stage: "Semifinals", team1: "Japan", score1: 6, team2: "South Korea", score2: 0 },
    { stage: "Final", team1: "Japan", score1: 10, team2: "Cuba", score2: 6 },
  ],
  2009: [
    { stage: "Semifinals", team1: "South Korea", score1: 10, team2: "Venezuela", score2: 2 },
    { stage: "Semifinals", team1: "Japan", score1: 9, team2: "United States", score2: 4 },
    { stage: "Final", team1: "Japan", score1: 5, team2: "South Korea", score2: 3 },
  ],
  2013: [
    { stage: "Semifinals", team1: "Puerto Rico", score1: 3, team2: "Japan", score2: 1 },
    { stage: "Semifinals", team1: "Dominican Republic", score1: 4, team2: "Netherlands", score2: 1 },
    { stage: "Final", team1: "Dominican Republic", score1: 3, team2: "Puerto Rico", score2: 0 },
  ],
  2017: [
    { stage: "Semifinals", team1: "Puerto Rico", score1: 4, team2: "Netherlands", score2: 3 },
    { stage: "Semifinals", team1: "United States", score1: 2, team2: "Japan", score2: 1 },
    { stage: "Final", team1: "United States", score1: 8, team2: "Puerto Rico", score2: 0 },
  ],
  2023: [
    { stage: "Quarterfinals", team1: "Australia", score1: 3, team2: "Cuba", score2: 4 },
    { stage: "Quarterfinals", team1: "Italy", score1: 3, team2: "Japan", score2: 9 },
    { stage: "Quarterfinals", team1: "Puerto Rico", score1: 4, team2: "Mexico", score2: 5 },
    { stage: "Quarterfinals", team1: "United States", score1: 9, team2: "Venezuela", score2: 7 },
    { stage: "Semifinals", team1: "Cuba", score1: 2, team2: "United States", score2: 14 },
    { stage: "Semifinals", team1: "Mexico", score1: 5, team2: "Japan", score2: 6 },
    { stage: "Final", team1: "United States", score1: 2, team2: "Japan", score2: 3 },
  ],
};

export const TEAM_RECORDS = [
  { team: "Japan", appearances: 5, gold: 3, silver: 0, bronze: 2, winLoss: "38-8", winPct: 0.826 },
  { team: "Dominican Republic", appearances: 5, gold: 1, silver: 0, bronze: 0, winLoss: "20-8", winPct: 0.714 },
  { team: "United States", appearances: 5, gold: 1, silver: 1, bronze: 0, winLoss: "21-14", winPct: 0.600 },
  { team: "Puerto Rico", appearances: 5, gold: 0, silver: 2, bronze: 0, winLoss: "23-11", winPct: 0.676 },
  { team: "South Korea", appearances: 5, gold: 0, silver: 1, bronze: 1, winLoss: "17-9", winPct: 0.654 },
  { team: "Cuba", appearances: 5, gold: 0, silver: 1, bronze: 0, winLoss: "18-13", winPct: 0.581 },
];

export const BATTER_STATS = {
  2023: [
    { name: "Frederica Freeman", team: "Canada", avg: .400, hr: 2, rbi: 5, ops: 1.200 },
    { name: "Shohei Ohtani", team: "Japan", avg: .435, hr: 1, rbi: 8, ops: 1.345 },
    { name: "Masataka Yoshida", team: "Japan", avg: .409, hr: 2, rbi: 13, ops: 1.258 },
    { name: "Trea Turner", team: "United States", avg: .391, hr: 5, rbi: 11, ops: 1.483 },
    { name: "Randy Arozarena", team: "Mexico", avg: .450, hr: 1, rbi: 9, ops: 1.507 },
    { name: "Yu Chang", team: "Chinese Taipei", avg: .438, hr: 2, rbi: 8, ops: 1.438 },
  ],
  2017: [
    { name: "Wladimir Balentien", team: "Netherlands", avg: .615, hr: 4, rbi: 12, ops: 1.871 },
    { name: "Carlos Correa", team: "Puerto Rico", avg: .333, hr: 3, rbi: 9, ops: 1.150 },
    { name: "Christian Yelich", team: "United States", avg: .310, hr: 0, rbi: 3, ops: .815 },
    { name: "Sho Nakata", team: "Japan", avg: .238, hr: 3, rbi: 8, ops: .985 },
    { name: "Gregory Polanco", team: "Dominican Republic", avg: .579, hr: 1, rbi: 2, ops: 1.393 },
  ],
  2013: [
    { name: "Robinson Cano", team: "Dominican Republic", avg: .469, hr: 2, rbi: 6, ops: 1.255 },
    { name: "Jose Reyes", team: "Dominican Republic", avg: .314, hr: 1, rbi: 3, ops: .785 },
    { name: "Nelson Cruz", team: "Dominican Republic", avg: .303, hr: 1, rbi: 6, ops: .871 },
    { name: "Michael Saunders", team: "Canada", avg: .727, hr: 1, rbi: 7, ops: 1.947 },
    { name: "Hirokazu Ibata", team: "Japan", avg: .556, hr: 0, rbi: 4, ops: 1.250 },
  ],
  2009: [
    { name: "Kim Tae-kyun", team: "South Korea", avg: .345, hr: 3, rbi: 11, ops: 1.254 },
    { name: "Norichika Aoki", team: "Japan", avg: .324, hr: 0, rbi: 7, ops: .805 },
    { name: "Frederich Cepeda", team: "Cuba", avg: .500, hr: 3, rbi: 10, ops: 1.625 },
    { name: "Yoenis Cespedes", team: "Cuba", avg: .458, hr: 2, rbi: 5, ops: 1.385 },
    { name: "Lee Bum-ho", team: "South Korea", avg: .400, hr: 3, rbi: 7, ops: 1.394 },
  ],
  2006: [
    { name: "Ken Griffey Jr.", team: "United States", avg: .524, hr: 3, rbi: 10, ops: 1.611 },
    { name: "Lee Seung-yuop", team: "South Korea", avg: .333, hr: 5, rbi: 10, ops: 1.372 },
    { name: "Nobuhiko Matsunaka", team: "Japan", avg: .433, hr: 0, rbi: 2, ops: 1.018 },
    { name: "Tsuyoshi Nishioka", team: "Japan", avg: .355, hr: 2, rbi: 8, ops: 1.077 },
    { name: "Albert Pujols", team: "Dominican Republic", avg: .318, hr: 1, rbi: 3, ops: 1.050 },
  ]
};

export const PITCHER_STATS = {
  2023: [
    { name: "Shohei Ohtani", team: "Japan", era: 1.86, w: 2, l: 0, so: 11, ip: 9.2 },
    { name: "Miguel Romero", team: "Cuba", era: 2.08, w: 2, l: 0, so: 13, ip: 8.2 },
    { name: "Yoshinobu Yamamoto", team: "Japan", era: 2.45, w: 1, l: 0, so: 12, ip: 7.1 },
    { name: "Patrick Sandoval", team: "Mexico", era: 1.23, w: 1, l: 0, so: 8, ip: 7.1 },
    { name: "Roki Sasaki", team: "Japan", era: 3.52, w: 1, l: 0, so: 11, ip: 7.2 },
  ],
  2017: [
    { name: "Marcus Stroman", team: "United States", era: 2.25, w: 1, l: 1, so: 9, ip: 15.1 },
    { name: "Tomoyuki Sugano", team: "Japan", era: 3.14, w: 1, l: 0, so: 16, ip: 14.1 },
    { name: "Seth Lugo", team: "Puerto Rico", era: 4.20, w: 2, l: 1, so: 12, ip: 15.0 },
    { name: "Kodai Senga", team: "Japan", era: 0.82, w: 1, l: 1, so: 16, ip: 11.0 },
    { name: "Danny Duffy", team: "United States", era: 1.13, w: 2, l: 0, so: 8, ip: 8.0 },
  ],
  2013: [
    { name: "Kenta Maeda", team: "Japan", era: 0.60, w: 2, l: 1, so: 18, ip: 15.0 },
    { name: "Nelson Figueroa", team: "Puerto Rico", era: 1.80, w: 2, l: 0, so: 8, ip: 10.0 },
    { name: "Samuel Deduno", team: "Dominican Republic", era: 0.69, w: 2, l: 0, so: 17, ip: 13.0 },
    { name: "Fernando Rodney", team: "Dominican Republic", era: 0.00, w: 0, l: 0, so: 7, ip: 7.1 },
    { name: "Masahiro Tanaka", team: "Japan", era: 2.57, w: 0, l: 0, so: 12, ip: 7.0 },
  ],
  2009: [
    { name: "Daisuke Matsuzaka", team: "Japan", era: 2.45, w: 3, l: 0, so: 13, ip: 14.2 },
    { name: "Hisashi Iwakuma", team: "Japan", era: 1.35, w: 1, l: 1, so: 15, ip: 20.0 },
    { name: "Bong Jung-keun", team: "South Korea", era: 0.51, w: 2, l: 0, so: 11, ip: 17.2 },
    { name: "Yu Darvish", team: "Japan", era: 2.08, w: 2, l: 1, so: 20, ip: 13.0 },
    { name: "Felix Hernandez", team: "Venezuela", era: 0.00, w: 2, l: 0, so: 11, ip: 8.2 },
  ],
  2006: [
    { name: "Daisuke Matsuzaka", team: "Japan", era: 1.38, w: 3, l: 0, so: 10, ip: 13.0 },
    { name: "Park Chan-ho", team: "South Korea", era: 0.00, w: 0, l: 0, so: 3, ip: 10.0 },
    { name: "Yadel Marti", team: "Cuba", era: 0.00, w: 1, l: 0, so: 11, ip: 12.2 },
    { name: "Seo Jae-weong", team: "South Korea", era: 0.64, w: 2, l: 0, so: 9, ip: 14.0 },
    { name: "Koji Uehara", team: "Japan", era: 1.59, w: 2, l: 0, so: 16, ip: 17.0 },
  ]
};
