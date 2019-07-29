import {
  lorem_twenty_words,
  lorem_twenty_words_alternative
} from "utilities/lorem";
import Typography from "@material-ui/core/Typography/Typography";
import React, { Fragment } from "react";
import Divider from "@material-ui/core/Divider/Divider";
import Button from "@material-ui/core/Button/Button";
import { Value } from "slate";
import { getRandomItemFromArray } from "utilities/utilities";
import Grid from "@material-ui/core/Grid/Grid";
import InboxIcon from "@material-ui/icons/Inbox";
import ArrowUpIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MouseIcon from "@material-ui/icons/Mouse";

// these are cached for a day to have a much faster loading time
const PROMPTS_TO_USE = [
  "The software innovations in the 20th century ",
  "Climate change has ",
  "The breakthrough in ",
  "Cancer research has revolutionized ",
  "Recent developments in "
];

export const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            text: getRandomItemFromArray(PROMPTS_TO_USE)
          }
        ]
      }
    ]
  }
});
export const HowToSelectPromptSection = (
  <Typography variant="subtitle1" gutterBottom color={"textPrimary"}>
    {/*Don't judge me for using bold. I got lazy.*/}
    <b>
      Click <MouseIcon fontSize={"small"} />{" "}
    </b>
    to Select. Or Use{" "}
    <b>
      Up
      <ArrowUpIcon fontSize={"small"} />
    </b>
    /<b>Down</b>
    <ArrowDownwardIcon fontSize={"small"} /> keys. <b>Enter</b> to Insert.
    <b> Spacebar</b> gets suggestions.
  </Typography>
);
export const WritingHeader = (
  <Typography color="secondary" gutterBottom variant={"h5"}>
    Write.
  </Typography>
);
export const DividerSection = (
  <Fragment>
    <br />
    <Divider />
    <br />
  </Fragment>
);

export const NetlifyLogo = (
  <a href="https://www.netlify.com">
    <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" />
  </a>
);
export const LearnMoreButton = ({ classes }) => {
  return (
    <div className={classes.alignRight}>
      <Button
        color="primary"
        variant="contained"
        className={classes.actionButton}
      >
        {/*TODO - Switch To MenuList Upon Click or Speed Dial*/}
        Actions
      </Button>
    </div>
  );
};
export const promptOne = `${lorem_twenty_words} `;
export const promptTwo = `${lorem_twenty_words_alternative} `;
export const promptThree = `${lorem_twenty_words} 3 `;
export const promptFour = `${lorem_twenty_words_alternative} 4 `;

export const SPECIAL_CHARACTERS = [",", "!", ".", '"'];
export const GridLayout = ({ classes, children }) => {
  // extracted because i really hate seeing the 20 layers of indent in renders
  return (
    <Grid container justify="center">
      <Grid
        spacing={4}
        alignItems="center"
        justify="center"
        container
        className={classes.grid}
      >
        <Grid container item xs={12}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
