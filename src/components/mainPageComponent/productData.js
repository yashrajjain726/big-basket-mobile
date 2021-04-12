import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputGroup from "react-bootstrap/InputGroup";
const useStyles = makeStyles((theme) => ({
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "100%",
  },
  margin: {
    width: "100%",
  },
}));
export default function ProductData(props) {
  const classes = useStyles();
  const [setIndex] = useState(0);
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <center>
          <Card>
            <img src={props.image}></img>
          </Card>
        </center>
        {/* <Card.Title
          style={{ fontSize: "15px", textAlign: "left", marginLeft: "2%" }}>
          {props.title}
        </Card.Title> */}
        <div style={{textAlign:'left',margin:'1%'}}>
            <span style={{fontWeight:'bold',color:"#A0A0A0"}}>FRESHO</span>
            <div >Mtr - Hing</div>
            </div>
        <Card>
          <FormControl className={classes.margin}>
            <InputLabel
              htmlFor="demo-customized-select-native"
              style={{ fontSize: "70%" }}
            >
              50g - Rs 72.00
            </InputLabel>
            <NativeSelect id="demo-customized-select-native">
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </NativeSelect>
          </FormControl>

          <Card.Body>
            <div>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "10px" }}>
                  <strike> RS 20 </strike>{" "}
                </span>
                <span style={{ fontSize: "10px" }}>Rs.14.85</span>
              </div>
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend
                  style={{
                    height: "55% !important",
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                  }}
                >
                 
                </InputGroup.Prepend>
              </InputGroup>
            </div>
          </Card.Body>
        </Card>
       <center>
       <Card>
        <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#fc1e4b",
                    }}>
                    <Typography style={{ fontSize: "9px",color:'#ffffff'}}>Add</Typography>
                  </Button>
        </Card>
       </center>
      </Card>
    </div>
  );
}
