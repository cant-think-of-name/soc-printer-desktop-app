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
      <Card className={classes.card}>
        <ColorLens />
        <Typography variant="h1">0</Typography>
        <Typography variant="caption">Coloured Pages Left</Typography>
      </Card>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridArea: "quota",
    columnGap: theme.spacing(3),
    textAlign: 'center',
    '& .MuiSvgIcon-root': {
      width: '3rem',
      height: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'unset',
      gridTemplateRows: '1fr 1fr',
      columnGap: 'unset',
      gridRowGap: theme.spacing(3),
    },
  },
}));
