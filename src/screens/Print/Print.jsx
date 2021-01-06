import React from 'react';

import { Box, Container, makeStyles } from '@material-ui/core';
import PrintSettings from './PrintSettings';
import PrintPreview from './PrintPreview';
import PrintQuota from './PrintQuota';
import PrinterQueue from './PrinterQueue';

export default function Print() {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.root}>
        <PrintQuota />
        <PrinterQueue />
      </Box>
      <Box className={classes.root}>
        <PrintSettings />
        <PrintPreview />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))
