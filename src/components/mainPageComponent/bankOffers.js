import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import bankOffer1 from '../../img/bankOffer1.webp'
import bankOffer2 from '../../img/bankOffer2.webp'
import bankOffer3 from '../../img/bankOffer3.webp'
import bankOffer4 from '../../img/bankOffer4.webp'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    elevation:0,


  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <center>
        <Typography style={{fontSize:'25px'}}>
                  Bank Offers
            </Typography>
                 <hr></hr>
        </center>
    <Grid container  >
      <Grid item xs={12} md={3} lg={3} className={classes.cardsize}>
        <Paper className={classes.root} elevation={0}>
        <img className={classes.img} src={bankOffer1}style={{marginBottom:'10%',margin:'5%'}}/>


        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <img className={classes.img} src={bankOffer2}style={{marginBottom:'10%',margin:'5%'}}/>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
      <Paper className={classes.root} elevation={0}>
     
        <img className={classes.img} src={bankOffer3}style={{marginBottom:'10%',margin:'5%'}}/>

    
        </Paper>
      </Grid>
      <Grid item xs={12} md={3} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <img className={classes.img} src={bankOffer4} style={{marginBottom:'10%',margin:'5%'}}/>
        </Paper>
        
      </Grid>
      
    </Grid>
    
  </div>
  );
}