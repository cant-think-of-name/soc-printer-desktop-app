import React from 'react';

import { Box, Card, Table, TableBody, TableCell, TableHead, TableRow, Typography, makeStyles } from '@material-ui/core';

export default function PrinterQueue() {
  const classes = useStyles();
  const printerList = [{
    printer: 'psc008',
    existingJobs: 0,
  }, {
    printer: 'psc011',
    existingJobs: 5,
  }]
  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1">Printer Queues</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Printer</TableCell>
              <TableCell>Existing Jobs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {printerList.map(({printer, existingJobs}) => (
              <TableRow>
                <TableCell>{printer}</TableCell>
                <TableCell>{existingJobs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Card>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "queue",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    alignItems: 'flex-start',
  },
}))
