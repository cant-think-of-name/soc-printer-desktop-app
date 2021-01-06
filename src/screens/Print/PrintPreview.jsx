import React from 'react';

import { Box, Card, Typography, makeStyles } from '@material-ui/core';

export default function PrintPreview() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1">Print Preview</Typography>
      </Box>
    </Card>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    gridArea: "preview",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    alignItems: 'flex-start',
  },
}));
