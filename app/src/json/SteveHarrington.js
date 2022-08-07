import Skills from "../core/Skills";
import Stats from "../core/Stats";

export const SteveHarrington = {
  name: 'Steve "The Hair" Harrington',
  size: "Medium",
  race: "Human",
  alignment: "Neutral Good",
  armorClass: 16,
  armor: "amazing hair and good looks",
  hitPoints: 84,
  hitDie: 8,
  hitDieCount: 13,
  hitDieBonus: 26,
  movement: [
    {
      type: "walk",
      value: 30,
    },
    { type: "swim", value: 30 },
  ],
  attributes: [
    {
      type: Stats.STR,
      value: 14,
    },
    {
      type: Stats.DEX,
      value: 16,
    },
    {
      type: Stats.CON,
      value: 15,
    },
    {
      type: Stats.INT,
      value: 10,
    },
    {
      type: Stats.WIS,
      value: 14,
    },
    {
      type: Stats.CHA,
      value: 18,
    },
  ],
  proficiencyBonus: 3,
  savingThrows: [Stats.STR, Stats.CON, Stats.WIS],
  skills: [Skills.ATHLETICS, Skills.INSIGHT, Skills.STEALTH],
  damageResistances: ["bludgeoning"],
  senses: [],
  languages: ["Common", "all five love languages"],
};

export default SteveHarrington;
