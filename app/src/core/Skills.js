/*
    Skills Enum

    Get all allowed enum values:
        Object.keys(Skills)
    Check if a value equals an enum value:
        val === Skills.ATHLETICS.name
    Check if a value is in the enum:
        Skills.ATHLETICS instanceof Skills

*/
export default class Skills {
  static ATHLETICS = new Skills("ATHLETICS");
  static INSIGHT = new Skills("INSIGHT");
  static STEALTH = new Skills("STEALTH");

  constructor(name) {
    this.name = name;
  }
  toString() {
    return this.name;
  }
}
