import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShopIcon from '@material-ui/icons/Shop';

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
      <FacebookIcon style={{margin:'5%'}}/>
      <ShopIcon style={{margin:'5%'}} />
      <br></br>
      <TextField id="standard-basic" style={{width:'100px'}}/>
          or
          <TextField id="standard-basic" style={{width:'100px'}}/>
          <br></br>
          
      </CardContent>
      <TextField label="Mobile Number(10 digit)/Email Address" style={{width:'300px'}}/>
        <CardContent>
        
        <Button size="large" style={{backgroundColor:'#fc357b',paddingRight:'20%',paddingLeft:'20%',marginTop:'10%',color:'white'}}>
          Login Using OTP
        </Button>
        </CardContent>
    </Card>
  );
}
