import React from 'react';
import { Print } from '../screens';
import { Container, makeStyles } from "@material-ui/core";

export default function Body() {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <Print />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
}));

