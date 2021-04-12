import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import OfferData from './offerData'
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding:0,
    elevation:'0 !important',
    marginTop:'5%',
    marginBottom:'5%',
    
    
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    
  },

}));

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

     <center>
     <GridList className={classes.gridList} >
        {OfferData.map((tile) => (
            <Container key={tile.img} style={{elevation:'0',width:'100%'}} >
           <img src={tile.img} alt={tile.title} style={{marginTop:'5%',marginBottom:'3%'}}/>
            <Typography style={{color:'black'}}>
                {tile.title}
            </Typography>
          </Container>

        ))}
      </GridList>
     </center>
    </div>
  );
}