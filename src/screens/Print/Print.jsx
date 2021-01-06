import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
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
    gridTemplateAreas: `
    "quota queue queue"
    "links queue queue"
    "settings preview preview"
    `,
    [theme.breakpoints.down('sm')]: {
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
