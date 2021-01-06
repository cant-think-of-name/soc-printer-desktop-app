import React from 'react';

import { Box, makeStyles } from '@material-ui/core';
import PrintSettings from './PrintSettings';
import PrintPreview from './PrintPreview';
import PrintQuota from './PrintQuota';
import PrinterQueue from './PrinterQueue';
import QuickLinks from './QuickLinks';

export default function Print() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <PrintQuota />
      <QuickLinks />
      <PrinterQueue />
      <PrintSettings />
      <PrintPreview />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateAreas: `
    "quota queue queue"
    "links queue queue"
    "settings preview preview"
    `,
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gridTemplateAreas: `
      "quota"
      "links"
      "queue"
      "settings"
      "preview"
      `,
    },
    gridGap: '1rem',
  },
}));
