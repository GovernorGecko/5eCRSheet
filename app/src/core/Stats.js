/*
    Stats Enum

    Get all allowed enum values:
        Object.keys(Stats)
    Check if a value equals an enum value:
        val === Stats.STR.name
    Check if a value is in the enum:
        Stats.STR instanceof Stats

*/
export default class Stats {
  static STR = new Stats("STR");
  static DEX = new Stats("DEX");
  static CON = new Stats("CON");
  static INT = new Stats("INT");
  static WIS = new Stats("WIS");
  static CHA = new Stats("CHA");

  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
}

// Given a Stat Array of Objects, gets a Stat Mod by its Name
// {
//      type:   Stats.STR
//      value:  14
// }
export const GetStatMod = (stat, array) => {
  return GetStatModFromValue(GetStatValue(stat, array));
};

// Given a Stat Array of Objects, gets a Stat Value by its Name
// {
//      type:   Stats.STR
//      value:  14
// }
export const GetStatValue = (stat, array) => {
  for (let obj of array) {
    if (
      obj.hasOwnProperty("type") &&
      obj.hasOwnProperty("value") &&
      (obj.type.name === stat || obj.type === stat)
    ) {
      return obj.value;
    }
  }
  return;
};

/*
    Gets a Stat Modifier as a String
*/
export const GetStatModAsString = (mod) => {
  if (mod === undefined) return;
  let sign = mod >= 0 ? "+" : "-";
  return `${sign}${Math.abs(mod)}`;
};

/*
    Gets a Stat Modifier given a Stat Value
*/
export const GetStatModFromValue = (value) => {
  if (typeof value === "number") return Math.floor((value - 10) / 2);
  return;
};

// Given a Stat Array of Objects, gets the Stat Value and
// Mod as a String
// {
//      type:   Stats.STR
//      value:  14
// }
export const GetStatValueAndModAsString = (stat, array) => {
  let value = GetStatValue(stat, array);
  let mod = GetStatModFromValue(value);
  return `${value} (${GetStatModAsString(mod)})`;
};
