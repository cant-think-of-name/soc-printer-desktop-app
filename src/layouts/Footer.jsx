import React from 'react';
import { Box, Link, Typography, makeStyles } from '@material-ui/core';

function Copyright() {
  // TODO: Add a link to the Printer App
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="">
        SOC Printer App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <footer className={classes.footer} >
        Credits to:
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column">
            Chow Jia Ying:
            <Link href="https://www.github.com/C-likethis123" >
              GitHub
            </Link>
            <Link href="https://c-likethis123.github.io/website/" >
              Website
            </Link>
          </Box>
          <Box display="flex" flexDirection="column">
            Lim Kang Yee:
            <Link href="https://github.com/kangyeelim" >
              GitHub
            </Link>
            <Link href="https://kangyeelim.github.io/aboutme/" >
              Website
            </Link>
          </Box>
          <Box display="flex" flexDirection="column">
            Evon Dong Bing Bing:
            <Link href="https://github.com/EvonDong" >
              GitHub
            </Link>
          </Box>
          <Box display="flex" flexDirection="column">
            Michaela Tang:
            <Link href="https://github.com/MichaelaTSH" >
              GitHub
            </Link>
          </Box>
        </Box>
        <Copyright />
      </footer>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    ...theme.typography.body1,
    width: '100%',
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.grey[200],
  },
}));
