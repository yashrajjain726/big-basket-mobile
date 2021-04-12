import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../../img/logo.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color:'#000000',
      marginLeft:'10%'
      
    },
    color:'#000000',
    marginLeft:'10%'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '50%',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color:'#000000'
  },
  inputRoot: {
    // color:'#000000'
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',

    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor:'#ffffff'}}>
        <Toolbar>
          <img src={logo} style={{marginLeft:'10%',marginTop:'1%',marginBottom:'1%',marginRight:'5%'}}></img>
          <Form inline style={{width:'75%'}}>
      <input type="text" placeholder="Search" style={{width:'75%'}} />
      <Button variant="outline-success" style={{height:'5vh'}}>
        <center><SearchIcon/></center>
      </Button>
    </Form>
        </Toolbar>
      </AppBar>
    </div>
  );
}
