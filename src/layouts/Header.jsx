import React from 'react'
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';

export default function Header() {
  const classes = useStyles()
  return (
    <AppBar position="relative">
      <Toolbar className={classes.root}>
        SOC Printer App
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(() => ({
  root: {
    left: 0,
  },
}))
