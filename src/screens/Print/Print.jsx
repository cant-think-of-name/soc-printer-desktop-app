import React from 'react';

import { Container, makeStyles } from '@material-ui/core';
import PrintPreview from './PrintPreview';

export default function Print() {
  const classes = useStyles();
  return (
    <Container>
      <PrintPreview />
    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(50),
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    alignItems: 'flex-start',
  },
  formControl: {
    marginTop: theme.spacing(3),
  },
  rightSpacing: {
    marginRight: theme.spacing(3),
  },
}))
