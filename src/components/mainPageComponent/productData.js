import React from "react";
import Card from "react-bootstrap/Card";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputGroup from "react-bootstrap/InputGroup";
import Paper from "@material-ui/core/Paper";

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
  return (
    <div>
      <Card style={{ elevation: "0", width: "" }}>
        <center>
          <div >
          <img src={props.image}></img>
          </div>
         
        </center>
        <div style={{ textAlign: "left", margin: "1%" }}>
          <span style={{ fontWeight: "bold", color: "#A0A0A0" }}>FRESHO</span>
          <div>Mtr - Hing</div>
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

          <Card.Body style={{ padding: "0" }}>
            <div>
              <div style={{ textAlign: "left" }}>
                <span style={{ fontSize: "10px" }}>
                  MRP
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
                ></InputGroup.Prepend>
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
              }}
            >
              <Typography style={{ fontSize: "9px", color: "#ffffff" }}>
                Add
              </Typography>
            </Button>
          </Card>
        </center>
      </Card>
    </div>
  );
}
