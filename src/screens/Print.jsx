import React from 'react';

import { Box, Button, FormControl, FormLabel, FormControlLabel, InputLabel, MenuItem, Select, Radio, RadioGroup, Typography, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default function Print() {
  const classes = useStyles();
  const printerList = ['psc008', 'psc011'];
  const [selectedPrinter, setSelectedPrinter] = React.useState(printerList[0]);
  const handleChangePrinter = (event) => setSelectedPrinter(event.target.value);

  const pageNumberList = [1, 2, 4, 8];
  const [numberOfPages, setNumberOfPages] = React.useState(pageNumberList[0]);
  const handleChangePages = (event) => setNumberOfPages(event.target.value);

  const pageRangeOptions = ['All', 'Custom'];
  const [pageRange, setPageRange] = React.useState(pageRangeOptions[0]);
  const handleChangePageRange = (event) => setPageRange(event.target.value);

  return (
    <Box className={classes.root}>
      <Typography variant="h1">Print a document</Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
      >
        Upload file
      </Button>
      <FormControl>
        <InputLabel>Choose Printer</InputLabel>
        <Select
          value={selectedPrinter}
          onChange={handleChangePrinter}
        >
          {printerList.map(printer => <MenuItem value={printer}>{printer}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Pages per sheet</InputLabel>
        <Select
          value={numberOfPages}
          onChange={handleChangePages}
        >
          {pageNumberList.map(page => <MenuItem value={page}>{page}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Page Range</FormLabel>
        <RadioGroup row value={pageRange} onChange={handleChangePageRange}>
          {pageRangeOptions.map(option => (
            <FormControlLabel value={option} control={<Radio />} label={option} />
            )
          )}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
  },
}))
