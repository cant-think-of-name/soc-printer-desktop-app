import React from 'react';

import { Box, Card, Typography, makeStyles } from '@material-ui/core';
import { ColorLens, Print } from '@material-ui/icons';
import clsx from 'clsx';

export default function PrintQuota() {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Card className={clsx(classes.rightSpacing, classes.card)}>
        <Print />
        <Typography variant="h1">50</Typography>
        <Typography variant="caption">Pages Left</Typography>
      </Card>
      <Card className={clsx(classes.rightSpacing, classes.card)}>
        <ColorLens />
        <Typography variant="h1">0</Typography>
        <Typography variant="caption">Coloured Pages Left</Typography>
      </Card>
    </Box>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    textAlign: 'center',
    '& .MuiSvgIcon-root': {
      width: '3rem',
      height: '3rem',
    },
  },
  card: {
    width: 150,
    height: 80
  },
  rightSpacing: {
    marginRight: theme.spacing(3),
  },
}))
