import { Grid } from "@mui/material";

import Stats, { GetStatValueAndModAsString } from "../core/Stats";

/*

*/
export const StatBlock = ({ attributes }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        {Stats.STR.toString()}
      </Grid>
      <Grid item xs={2}>
        {Stats.CON.toString()}
      </Grid>
      <Grid item xs={2}>
        {Stats.DEX.toString()}
      </Grid>
      <Grid item xs={2}>
        {Stats.INT.toString()}
      </Grid>
      <Grid item xs={2}>
        {Stats.WIS.toString()}
      </Grid>
      <Grid item xs={2}>
        {Stats.CHA.toString()}
      </Grid>
      <Grid item xs={2}>
        {GetStatValueAndModAsString(Stats.STR, attributes)}
      </Grid>
      <Grid item xs={2}>
        {GetStatValueAndModAsString(Stats.CON, attributes)}
      </Grid>
      <Grid item xs={2}>
        {GetStatValueAndModAsString(Stats.DEX, attributes)}
      </Grid>
      <Grid item xs={2}>
        {GetStatValueAndModAsString(Stats.INT, attributes)}
      </Grid>
      <Grid item xs={2}>
        {GetStatValueAndModAsString(Stats.WIS, attributes)}
      </Grid>
      <Grid item xs={2}>
        {GetStatValueAndModAsString(Stats.CHA, attributes)}
      </Grid>
    </Grid>
  );
};

export default StatBlock;
