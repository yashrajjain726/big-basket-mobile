import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import Typography from "@material-ui/core/Typography";
import SimilarProducts from './similarProducts'
import Card from '@material-ui/core/Card'
class Buttons extends Component {
  state = {};
  render() {
    return (
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            style={{
              backgroundColor: "#706f6f",
              width: "50%",
              color: "#fff",
              borderRadius: "0",
            }}
          >
            <TurnedInNotIcon />
            SAVE FOR LATER
          </Button>
          <Button
            style={{
              backgroundColor: "#e86464",
              width: "50%",
              color: "#fff",
              borderRadius: "0",
            }}
          >
            ADD TO BASKET
          </Button>
        </Grid>
        
        <Card
     style={{backgroundColor:'#fff',marginTop:'5%'}}
   >
       <div style={{padding:'3%'}}>
       
       <div style={{float:'left'}}>
           <strong>Ratings & Reviews</strong>
         </div>
         <div style={{marginTop:'6%'}}>
         <SimilarProducts/>
         </div>
       
        </div>
       
   </Card>
      </div>
    );
  }
}

export default Buttons;
