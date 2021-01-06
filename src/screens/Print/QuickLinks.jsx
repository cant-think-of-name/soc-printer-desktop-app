import React from 'react';

import { Box, Card, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography, makeStyles } from '@material-ui/core';

export default function QuickLinks() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1">Quick Links</Typography>
        <Typography>
          <Link href="https://socpay.comp.nus.edu.sg/" variant="body2">
            Want coloured printing?
          </Link>
        </Typography>
        <Typography>
          <Link href="https://socpay.comp.nus.edu.sg/" variant="body2">
            Increase printing quota!
          </Link>
        </Typography>
      </Box>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "links",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}))
