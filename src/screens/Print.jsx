import React from 'react';

import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default function Print() {
  const printerList = ['psc008', 'psc011'];
  const [selectedPrinter, setSelectedPrinter] = React.useState(printerList[0]);
  const handleChangePrinter = (event) => setSelectedPrinter(event.target.value);
  return (
    <>
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
    </>
  )
}
