import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import productImage1 from "../../img/product1_img2.webp";
import productImage2 from "../../img/product1_img2.webp";
import productImage3 from "../../img/product1_img3.webp";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <div>
    <Card>
         <Card
          style={{backgroundColor:'#78c2ff',marginBottom:'2%',padding:'2%'}}
        >
            <div style={{float:'left'}}>
            <EditLocationIcon/>
            </div>
            <div style={{float:'left'}}>
            <Typography>
                Select Delivery Location For Best Offers
            </Typography>
            
            </div>
            <div style={{float:'right'}}>
            <ExpandMoreIcon/>
            </div>
            
        </Card>
      <Paper elevation={0} style={{ alignContent: "left", }}>
          <div style={{marginLeft:'5%',marginTop:'2%'}}>
        <Typography align="left"  >Prestige Sanwich Maker, 2 Kg</Typography>
        <Typography align="left" ><strong> Rs 9.50</strong> MRP <strike>Rs 17.50</strike> <span style={{color:"red"}}>46% Off</span></Typography>
        <Typography align="left" >(Inclusive of all taxes)</Typography>
        </div>
      </Paper>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img  src={productImage1} />
        </Carousel.Item>
        <Carousel.Item>
          <img  src={productImage2} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={productImage1} />
        </Carousel.Item>
      </Carousel>
      <div style={{margin:'5%'}}>
      <Typography align="left" style={{marginBottom:'2%'}}>Pack Sizes</Typography>
      <Container style={{padding:'0'}}>
        <Card
          style={{backgroundColor:'#c7e394',marginBottom:'2%'}}
        >
           <div>
           <div style={{float:'left',margin:'3%'}}>
            500 g
            </div>
            <div style={{float:'left',margin:'3%'}}>
            <Typography >
            <strong> Rs 9.50</strong><span style={{color:"red"}}>46% Off</span>
            <div>MRP <strike>Rs 17.50</strike> </div>
            </Typography>
            
            </div>
           </div>
            <div style={{float:'right',height:'max-content'}}>
            <Button style={{backgroundColor:'#00c735',height:'70px'}}>
                <DoneIcon/>
                </Button>
            </div>
            
        </Card>
        <Typography align='right'>
            +2 More Combos  <ArrowForwardIosIcon/>
        </Typography>
       
      </Container>
      </div>
    </Card>
     <Card
     style={{backgroundColor:'#fff',marginTop:'5%'}}
   >
       <div style={{padding:'1%'}}>
       
       <div style={{float:'left'}}>
       <DirectionsCarIcon/> Standard :
       </div>
       <div style={{float:'left'}}>
       <Typography>
          21 Apr 4:30 PM - 6:30 PM
       </Typography>
       
       </div>
   </div>
       
   </Card>
   </div>
  );
}
