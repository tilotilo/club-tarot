"use strict";
//raider waite deck
const majorArcana = [
  {
    name: "The Fool",
    arcana: "Major",
    suit: null,
    meaning: "New beginnings, spontaneity",
  },
  {
    name: "The Magician",
    arcana: "Major",
    suit: null,
    meaning: "Skill, action, manifestation",
  },
  {
    name: "The High Priestess",
    arcana: "Major",
    suit: null,
    meaning: "Intuition, mystery",
  },
  {
    name: "The Empress",
    arcana: "Major",
    suit: null,
    meaning: "Abundance, nurture",
  },
  {
    name: "The Emperor",
    arcana: "Major",
    suit: null,
    meaning: "Structure, authority",
  },
  {
    name: "The Hierophant",
    arcana: "Major",
    suit: null,
    meaning: "Tradition, guidance",
  },
  {
    name: "The Lovers",
    arcana: "Major",
    suit: null,
    meaning: "Love, choices, alignment",
  },
  {
    name: "The Chariot",
    arcana: "Major",
    suit: null,
    meaning: "Control, willpower, victory",
  },
  {
    name: "Strength",
    arcana: "Major",
    suit: null,
    meaning: "Courage, patience, inner strength",
  },
  {
    name: "The Hermit",
    arcana: "Major",
    suit: null,
    meaning: "Reflection, solitude, guidance",
  },
  {
    name: "Wheel of Fortune",
    arcana: "Major",
    suit: null,
    meaning: "Change, cycles, fate",
  },
  {
    name: "Justice",
    arcana: "Major",
    suit: null,
    meaning: "Fairness, truth, cause and effect",
  },
  {
    name: "The Hanged Man",
    arcana: "Major",
    suit: null,
    meaning: "Pause, surrender, new perspective",
  },
  {
    name: "Death",
    arcana: "Major",
    suit: null,
    meaning: "Endings, transformation",
  },
  {
    name: "Temperance",
    arcana: "Major",
    suit: null,
    meaning: "Balance, moderation",
  },
  {
    name: "The Devil",
    arcana: "Major",
    suit: null,
    meaning: "Attachment, addiction, illusion",
  },
  {
    name: "The Tower",
    arcana: "Major",
    suit: null,
    meaning: "Sudden change, upheaval",
  },
  {
    name: "The Star",
    arcana: "Major",
    suit: null,
    meaning: "Hope, renewal, calm",
  },
  {
    name: "The Moon",
    arcana: "Major",
    suit: null,
    meaning: "Illusion, fear, subconscious",
  },
  {
    name: "The Sun",
    arcana: "Major",
    suit: null,
    meaning: "Success, joy, vitality",
  },
  {
    name: "Judgement",
    arcana: "Major",
    suit: null,
    meaning: "Awakening, reflection",
  },
  {
    name: "The World",
    arcana: "Major",
    suit: null,
    meaning: "Completion, fulfillment",
  },
];
//suits
const suits = ["Wands", "Cups", "Swords", "Pentacles"];
//ranks
const ranks = [
  "Ace",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Page",
  "Knight",
  "Queen",
  "King",
];
//generate the minor arcana
function createMinorArcana() {
  const cards = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      cards.push({
        name: `${rank} of ${suit}`,
        arcana: "Minor",
        suit: suit,
        meaning: `${rank} energy in the realm of ${suit.toLowerCase()}`,
      });
    }
  }

  return cards;
}
//final deck
const deck = [...majorArcana, ...createMinorArcana()];
//Thoth Deck
const thothDeck = [
  // Major Arcana
  {
    name: "The Fool",
    arcana: "Major",
    suit: null,
    meaning: "Beginnings, openness, leap into the unknown",
  },
  {
    name: "The Magus",
    arcana: "Major",
    suit: null,
    meaning: "Will, skill, focused intention",
  },
  {
    name: "The Priestess",
    arcana: "Major",
    suit: null,
    meaning: "Intuition, mystery, inner knowing",
  },
  {
    name: "The Empress",
    arcana: "Major",
    suit: null,
    meaning: "Creation, abundance, expression",
  },
  {
    name: "The Emperor",
    arcana: "Major",
    suit: null,
    meaning: "Authority, order, structure",
  },
  {
    name: "The Hierophant",
    arcana: "Major",
    suit: null,
    meaning: "Tradition, initiation, spiritual teaching",
  },
  {
    name: "The Lovers",
    arcana: "Major",
    suit: null,
    meaning: "Union, choice, alignment",
  },
  {
    name: "The Chariot",
    arcana: "Major",
    suit: null,
    meaning: "Motion, victory, disciplined drive",
  },
  {
    name: "Adjustment",
    arcana: "Major",
    suit: null,
    meaning: "Balance, truth, karmic correction",
  },
  {
    name: "The Hermit",
    arcana: "Major",
    suit: null,
    meaning: "Solitude, wisdom, inner search",
  },
  {
    name: "Fortune",
    arcana: "Major",
    suit: null,
    meaning: "Cycles, change, turning point",
  },
  {
    name: "Lust",
    arcana: "Major",
    suit: null,
    meaning: "Passion, courage, ecstatic life force",
  },
  {
    name: "The Hanged Man",
    arcana: "Major",
    suit: null,
    meaning: "Suspension, surrender, reversal of view",
  },
  {
    name: "Death",
    arcana: "Major",
    suit: null,
    meaning: "Ending, transformation, release",
  },
  {
    name: "Art",
    arcana: "Major",
    suit: null,
    meaning: "Alchemy, integration, harmony of opposites",
  },
  {
    name: "The Devil",
    arcana: "Major",
    suit: null,
    meaning: "Bondage, desire, material force",
  },
  {
    name: "The Tower",
    arcana: "Major",
    suit: null,
    meaning: "Shock, breakdown, sudden liberation",
  },
  {
    name: "The Star",
    arcana: "Major",
    suit: null,
    meaning: "Hope, clarity, spiritual renewal",
  },
  {
    name: "The Moon",
    arcana: "Major",
    suit: null,
    meaning: "Dreams, uncertainty, the deep unconscious",
  },
  {
    name: "The Sun",
    arcana: "Major",
    suit: null,
    meaning: "Joy, vitality, illumination",
  },
  {
    name: "The Aeon",
    arcana: "Major",
    suit: null,
    meaning: "Awakening, reckoning, new era",
  },
  {
    name: "The Universe",
    arcana: "Major",
    suit: null,
    meaning: "Completion, wholeness, fulfillment",
  },

  // Wands
  {
    name: "Ace of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Pure fire, creative spark",
  },
  {
    name: "Two of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Power, bold direction",
  },
  {
    name: "Three of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Virtue, steady strength",
  },
  {
    name: "Four of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Completion, stable foundation",
  },
  {
    name: "Five of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Conflict, friction, struggle",
  },
  {
    name: "Six of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Victory, recognition, momentum",
  },
  {
    name: "Seven of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Valor, resilience under pressure",
  },
  {
    name: "Eight of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Swiftness, movement, acceleration",
  },
  {
    name: "Nine of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Strength, persistence, recovery",
  },
  {
    name: "Ten of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Oppression, burden, overload",
  },
  {
    name: "Princess of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Energetic start, bold curiosity",
  },
  {
    name: "Prince of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Impulsive drive, fiery pursuit",
  },
  {
    name: "Queen of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Magnetism, confidence, warmth",
  },
  {
    name: "Knight of Wands",
    arcana: "Minor",
    suit: "Wands",
    meaning: "Commanding force, blazing ambition",
  },

  // Cups
  {
    name: "Ace of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Pure feeling, love, receptivity",
  },
  {
    name: "Two of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Connection, exchange, attraction",
  },
  {
    name: "Three of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Abundance, joy, celebration",
  },
  {
    name: "Four of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Luxury, comfort, emotional saturation",
  },
  {
    name: "Five of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Disappointment, loss, regret",
  },
  {
    name: "Six of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Pleasure, sweetness, easy flow",
  },
  {
    name: "Seven of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Illusion, fantasy, unstable desire",
  },
  {
    name: "Eight of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Abandonment, withdrawal, turning away",
  },
  {
    name: "Nine of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Happiness, satisfaction, wish fulfilled",
  },
  {
    name: "Ten of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Fulfillment, emotional completion",
  },
  {
    name: "Princess of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Dreamy openness, tender feeling",
  },
  {
    name: "Prince of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Romantic motion, emotional pursuit",
  },
  {
    name: "Queen of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Compassion, intuition, calm depth",
  },
  {
    name: "Knight of Cups",
    arcana: "Minor",
    suit: "Cups",
    meaning: "Mastery of feeling, graceful presence",
  },

  // Swords
  {
    name: "Ace of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Pure intellect, sharp truth",
  },
  {
    name: "Two of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Peace, pause, mental balance",
  },
  {
    name: "Three of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Sorrow, heartbreak, painful clarity",
  },
  {
    name: "Four of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Truce, rest, temporary stillness",
  },
  {
    name: "Five of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Defeat, tension, harsh outcome",
  },
  {
    name: "Six of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Science, analysis, ordered thinking",
  },
  {
    name: "Seven of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Futility, partial effort, instability",
  },
  {
    name: "Eight of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Interference, blockage, overthinking",
  },
  {
    name: "Nine of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Cruelty, anxiety, mental suffering",
  },
  {
    name: "Ten of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Ruin, collapse, final breakdown",
  },
  {
    name: "Princess of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Alert mind, sharp curiosity",
  },
  {
    name: "Prince of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Quick thought, restless action",
  },
  {
    name: "Queen of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Clear perception, independence",
  },
  {
    name: "Knight of Swords",
    arcana: "Minor",
    suit: "Swords",
    meaning: "Authority of mind, decisive force",
  },

  // Disks
  {
    name: "Ace of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Material seed, grounded potential",
  },
  {
    name: "Two of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Change, adaptation, fluctuation",
  },
  {
    name: "Three of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Works, building, practical effort",
  },
  {
    name: "Four of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Power, control, material stability",
  },
  {
    name: "Five of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Worry, insecurity, strain",
  },
  {
    name: "Six of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Success, balance, fair exchange",
  },
  {
    name: "Seven of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Failure, stalled growth, frustration",
  },
  {
    name: "Eight of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Prudence, skill, careful progress",
  },
  {
    name: "Nine of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Gain, reward, material comfort",
  },
  {
    name: "Ten of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Wealth, legacy, established prosperity",
  },
  {
    name: "Princess of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Practical beginning, patient growth",
  },
  {
    name: "Prince of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Steady effort, dependable motion",
  },
  {
    name: "Queen of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Nurturing abundance, grounded care",
  },
  {
    name: "Knight of Disks",
    arcana: "Minor",
    suit: "Disks",
    meaning: "Persistence, endurance, material mastery",
  },
];
//////////////////////////////functions
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function drawCards(deck, count) {
  const shuffled = shuffle(deck);
  return shuffled.slice(0, count);
}

function oneCardReading() {
  return drawCards(deck, 1);
}

function threeCardReading() {
  const [past, present, future] = drawCards(deck, 3);
  return [
    { position: "Past", ...past },
    { position: "Present", ...present },
    { position: "Future", ...future },
  ];
}

function experimentalReading() {
  const spreadTypes = [1, 2, 3];
  const count = spreadTypes[Math.floor(Math.random() * spreadTypes.length)];
  return drawCards(deck, count);
}
//and your buttons could be dead simple
document.querySelector(".one-card").addEventListener("click", () => {
  const result = oneCardReading();
  renderReading(result);
});

document.querySelector(".three-card").addEventListener("click", () => {
  const result = threeCardReading();
  renderReading(result);
});
//shuffle function
document.querySelector(".shuffle").addEventListener("click", () => {
  const result = shuffle();
  // renderReading(result);
});
//counter event listener func
let theCount = 0;
document.querySelector(".count").addEventListener("click", () => {
  theCount++;
  renderReading(theCount);
});
//basic render idea
function renderReading(cards) {
  const output = document.querySelector(".output");
  output.innerHTML = cards
    .map(
      (card) => `
      <div class="card">
        ${card.position ? `<h3>${card.position}</h3>` : ""}
        <h2>${card.name}</h2>
        <p>${card.meaning}</p>
      </div>
    `,
    )
    .join("");
}
