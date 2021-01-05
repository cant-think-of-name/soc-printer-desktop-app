import React from 'react';

import { Button, Typography } from '@material-ui/core';
import { Add } from '@material-ui/icons';

export default function Print() {
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
    </>
  )
}
