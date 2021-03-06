import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CategoryCard from '../components/categoryComponent/categoryCard'

import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor:'#7ed126'}}>
        <Toolbar>
          <Typography  className={classes.title}>
           SHOP BY CATEGORY
          </Typography>
          <CloseIcon/>
        </Toolbar>
      </AppBar>
      <CategoryCard/>
    </div>
  );
}
