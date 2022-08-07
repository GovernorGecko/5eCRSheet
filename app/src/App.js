import * as React from "react";
import { Box } from "@mui/material";

// Components
import { GetStatFromSkill } from "./core/Skills";
import { GetStatMod, GetStatModAsString } from "./core/Stats";
import StatBlock from "./components/StatBlock";

// Json
import SteveHarrington from "./json/SteveHarrington";

const json = SteveHarrington;

function App() {
  return (
    <Box>
      <Box>{json.name}</Box>
      <Box>
        {json.size} {json.race} {json.alignment}
      </Box>
      <Box>
        Armor Class {json.armorClass} ({json.armor})
      </Box>
      <Box>
        Hit Points {json.hitPoints} ({json.hitDieCount}d{json.hitDie} +
        {json.hitDieBonus})
      </Box>
      <Box>
        Speed
        {json.movement.map((move, index) => {
          if (move.type === "walk") return move.value;
          else return move.type + " " + move.value;
        })}
      </Box>
      <StatBlock attributes={json.attributes} />
      <Box>
        Saving Throws
        {json.savingThrows.map((savingThrow, index) => {
          return `${savingThrow.name} ${GetStatModAsString(
            GetStatMod(savingThrow, json.attributes) + json.proficiencyBonus
          )} `;
        })}
      </Box>
      <Box>
        Skills
        {json.skills.map((skill, index) => {
          return `${skill.name} ${GetStatModAsString(
            GetStatMod(GetStatFromSkill(skill), json.attributes) +
              json.proficiencyBonus
          )} `;
        })}
      </Box>
      <Box>
        Damage Resistances
        {json.damageResistances.map((damagaResistance, index) => {
          return damagaResistance;
        })}
      </Box>
    </Box>
  );
}

export default App;
