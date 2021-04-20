import React, { Component } from "react";
import Card from '@material-ui/core/Card'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import receipe1 from '../../img/receipe1.webp'
import receipe2 from '../../img/receipe2.webp'
import receipe3 from '../../img/receipe3.webp'
import { Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class Recipies extends Component {
  state = {};
  render() {
    return (
      <div>
       <Card >
           <div style={{margin:'5%'}}>
           <Typography align="left">
               <strong>Receipes</strong>
           </Typography>
           <Typography align="left">
             Have a look at what you ca make with this item
           </Typography>
       <Grid container spacing={3}>
          <Grid item xs={4}>
          <Paper elevation={3} style={{ margin: "5%" }}>
              <img src={receipe1} style={{width:'100%'}}></img>
              Indian Recipies
              </Paper>
          </Grid>
          <Grid item xs={4}>
            
          <Paper elevation={3} style={{ margin: "5%" }}>
          <img src={receipe2} style={{width:'100%'}}></img>
              Chinese Receipes
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} style={{ margin: "5%" }}>
            <img src={receipe3} style={{width:'100%'}}></img>
              Italian Receipes
            </Paper>
          </Grid>
        </Grid>
        
        </div>
        <Card>
            <Typography>
            <span style={{color:'red'}}> <strong>VIEW ALL <ArrowForwardIosIcon/></strong></span> 
                </Typography>
        </Card>
       </Card>
      </div>
    );
  }
}

export default Recipies;
