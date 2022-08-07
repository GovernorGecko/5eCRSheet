/*
    Skills Enum

    Get all allowed enum values:
        Object.keys(Skills)
    Check if a value equals an enum value:
        val === Skills.ATHLETICS.name
    Check if a value is in the enum:
        Skills.ATHLETICS instanceof Skills

*/

import Stats from "./Stats";

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

/*
    Mapping of Skills to Stats, can be used
    vice versa.
*/
export const SkillToStat = [
  {
    skill: Skills.ATHLETICS,
    stat: Stats.STR,
  },
  {
    skill: Skills.INSIGHT,
    stat: Stats.WIS,
  },
  {
    skill: Skills.STEALTH,
    stat: Stats.DEX,
  },
];

/*
    Get all Skills associated with the given
    Stat
*/
export const GetSkillsFromStat = (stat) => {
  let listOfSkills = [];
  for (let obj of SkillToStat) {
    if (obj.stat.name === stat || obj.stat === stat) {
      listOfSkills.push(obj.skill);
    }
  }
  return listOfSkills;
};

/*
    Given a Skill, returns the Stat it is mapped
    to.
*/
export const GetStatFromSkill = (skill) => {
  for (let obj of SkillToStat) {
    if (obj.skill.name === skill || obj.skill === skill) {
      return obj.stat;
    }
  }
};
