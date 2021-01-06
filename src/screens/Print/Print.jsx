import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import PrintSettings from './PrintSettings';
import PrintPreview from './PrintPreview';
import PrintQuota from './PrintQuota';
import PrinterQueue from './PrinterQueue';

export default function Print() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <PrintQuota />
      <PrinterQueue />
      <PrintSettings />
      <PrintPreview />
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `
    "quota quota"
    "queue queue"
    "settings preview"
    `,
    gridGap: '1rem',
  },
}))
