import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SearchIcon from '@material-ui/icons/Search';
import MainPageGrid from './mainPageGrid'
import Grid from "@material-ui/core/Grid";
import ProductCard from './productCard'
import product1 from '../img/product1.webp'
import product2 from '../img/product2.webp'
import product3 from '../img/product3.webp'
import product4 from '../img/product4.webp'
import product5 from '../img/product5.webp'

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
      <AppBar position="static" style={{backgroundColor:'#7ed126'}}>
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIosIcon />
          </IconButton>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           BigBasket
          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      
      
      <Typography style={{ fontSize: "15px",margin:'1%',fontWeight:'bold' }}>SMART BASKET</Typography>
   <MainPageGrid/>
   <Typography style={{ fontSize: "15px",margin:'1%',fontWeight:'bold' }}>Our Recommendation For You</Typography>
   <Typography style={{ fontSize: "10px",margin:'1%'}}>Based on  what customers like you have bought</Typography>
    <Grid container >
        <Grid item xs={12} lg={4}  >
        <ProductCard image={product1} name="Onion"/>
        <ProductCard image={product2}  name="Potato - New"/>
        </Grid>
        <Grid item xs={12} lg={4}  >
        <ProductCard image={product3} name="Harpic 1ltr"/>
        <ProductCard image={product4} name="Patanjali Oil"/>
        </Grid>
        <Grid item xs={12} lg={4}  >
        <ProductCard image={product5} name="Ashirvaad Aata"/> 
        <ProductCard image={product1} name="Onion"/>
        </Grid>
    </Grid>
    
    </div>
  );
}
