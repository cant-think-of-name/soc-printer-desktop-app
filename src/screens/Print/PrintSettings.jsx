import React from 'react';

import { Box, Button, Card, FormControl, FormLabel, FormControlLabel, InputLabel, MenuItem, Select, Radio, RadioGroup, TextField, Typography, makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useHandleChange } from 'hooks';

const { ipcRenderer } = window.require("electron");

export default function PrintSettings() {
  const classes = useStyles();
  const [fileName, setFileName] = React.useState('');
  const printerList = ['psc008', 'psc011'];
  const [selectedPrinter, handleChangePrinter] = useHandleChange(printerList[0]);

  const pageNumberList = [1, 2, 4, 8];
  const [numberOfPages, handleChangePages] = useHandleChange(pageNumberList[0]);

  const pageRangeOptions = ['All', 'Custom'];
  const [pageRange, handleChangePageRange] = useHandleChange(pageRangeOptions[0]);

  const getFileName = async () => {
    ipcRenderer.invoke("open-file")
      .then(({ cancelled, filePaths: [filePath] }) => {
        if (!cancelled) {
          const trimmedFilePath = filePath.split("/");
          setFileName(trimmedFilePath[trimmedFilePath.length - 1]);
        }
      });
  };
  
  return (
    <Card className={classes.root}>
      <Box className={classes.container}>
        <Typography variant="h1">Print a document</Typography>
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={getFileName}
            className={classes.rightSpacing}
          >
            Upload file
          </Button>
          <Typography variant="body2">{fileName}</Typography>
        </Box>
        <FormControl className={classes.formControl}>
          <InputLabel>Choose Printer</InputLabel>
          <Select
            value={selectedPrinter}
            onChange={handleChangePrinter}
          >
            {printerList.map(printer => <MenuItem key={printer} value={printer}>{printer}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Pages per sheet</InputLabel>
          <Select
            value={numberOfPages}
            onChange={handleChangePages}
          >
            {pageNumberList.map(page => <MenuItem key={page} value={page}>{page}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Page Range</FormLabel>
          <RadioGroup row value={pageRange} onChange={handleChangePageRange}>
            {pageRangeOptions.map(option => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ),
            )}
          </RadioGroup>
        </FormControl>
        {pageRange === 'Custom' && (
          <Box display="flex">
            <FormControl className={classes.rightSpacing}>
              <TextField label="From" />
            </FormControl>
            <FormControl>
              <TextField label="To" />
            </FormControl>
          </Box>
        )}
        <Button variant="contained" color="primary">Print</Button>
      </Box>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    gridArea: "settings",
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  formControl: {
    marginTop: theme.spacing(3),
  },
  rightSpacing: {
    marginRight: theme.spacing(3),
  },
}));
