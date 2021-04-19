import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    // marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
      <FacebookIcon style={{margin:'5%'}}/>
      <ShopIcon style={{margin:'5%'}} />
      <br></br>
      <TextField id="standard-basic" style={{width:'100px'}}/>
          or
          <TextField id="standard-basic" style={{width:'100px'}}/>
      </CardContent>
        
        <TextField label="Mobile Number(10 digit) " style={{width:'300px'}}/>
        <CardContent>
        <Button size="large" style={{backgroundColor:'#fc357b',paddingRight:'20%',paddingLeft:'20%',marginTop:'10%',color:'white'}}>
          SignUp Using OTP
        </Button>
        </CardContent>
    </Card>
  );
}
