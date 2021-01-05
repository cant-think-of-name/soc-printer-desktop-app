import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import PrintSettings from './PrintSettings';
import PrintPreview from './PrintPreview';

export default function Print() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <PrintSettings />
      <PrintPreview />
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
