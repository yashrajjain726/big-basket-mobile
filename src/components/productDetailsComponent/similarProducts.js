import React from "react";
import GridList from "@material-ui/core/GridList";
import ProductData from '../mainPageComponent/productData'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import product1 from '../../img/product1.webp'
import product2 from '../../img/product2.webp'
import product3 from '../../img/product3.webp'
import product4 from '../../img/product4.webp'
import product5 from '../../img/product5.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin:'1%'

  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width:'100%',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  margin: {
    width: "100%",
  },
}));
export default function ProductCard() {
  const classes = useStyles();
  return (
    <div>

          <div className={classes.root}>
            
           <GridList className={classes.gridList}>
            <Paper elevation={3} style={{margin:'2%',height:'max-content'}}>
                 <ProductData image={product1}/>  
            </Paper>
            <Paper elevation={3} style={{margin:'2%',height:'max-content'}}>

                 <ProductData image={product2}/>  
            </Paper>
            <Paper elevation={3} style={{margin:'2%',height:'max-content'}}>

                 <ProductData image={product3}/>  
            </Paper>
            <Paper elevation={3} style={{margin:'2%',height:'max-content'}}>

                 <ProductData image={product4}/>  
            </Paper>
            <Paper elevation={3} style={{margin:'2%',height:'max-content'}}>
                 <ProductData image={product5}/>  
            </Paper>
        
      </GridList>
      </div>

    </div>
  );
}
