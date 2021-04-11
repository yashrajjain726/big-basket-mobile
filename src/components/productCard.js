import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import product1 from "../img/product1.webp";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "0",
  },
  cover: {
    padding: "12%",
    margin:'10% 1% 10% 1%'
  },

  formControl: {
    margin: '1% 1% 1% 0',
    width: "200px",
    height: "5px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: "25%",
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={props.image} />
      <div style={{marginLeft:'5%'}}>
        <div style={{textAlign:'left'}}>
            <span style={{fontWeight:'bold',color:"#A0A0A0"}}>FRESHO</span>
            <div >{props.name}</div>
            </div>
        <CardContent style={{ padding: "0" }}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Quantity</InputLabel>
            <Select value={age} onChange={handleChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={5}>5 Kg</MenuItem>
              <MenuItem value={10}>10 Kg</MenuItem>
              <MenuItem value={15}>15 Kg</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
        <div className={classes.controls}>
          <div style={{ textAlign: "left",marginRight:'25%'}}>
            <span >
              MRP <strike> RS 20 </strike>
            </span>
            <div>
                   <span style={{fontWeight:'bold'}}> Rs.135.00</span>
                   </div>
          </div>
          <Button variant="contained" color="secondary">
            ADD
          </Button>
        </div>
      </div>
    </Card>
  );
}
