import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Divider from "@material-ui/core/Divider";
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding:'0px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    marginLeft:'2%'
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowUpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
            <AcUnitIcon/>
          <Typography className={classes.heading}>
            Fruits & Vegetables
          </Typography>
        </AccordionSummary>
        <Grid container>
          <Grid item xs={12}>
            <List
              component="nav"
              className={classes.root}
            >
              <ListItem button>
                <ListItemText primary="All Fruits & Vegetables" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Fresh Vegetables" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Herbs & Seasoning" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Fresh Fruits" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowUpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
             <AcUnitIcon/>
          <Typography className={classes.heading}>
            Foodgrains, Oil & Masala
          </Typography>
        </AccordionSummary>
        <Grid container>
          <Grid item xs={12}>
          <List
              component="nav"
              className={classes.root}
            >
              <ListItem button>
                <ListItemText primary="All Fruits & Vegetables" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Fresh Vegetables" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Herbs & Seasoning" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Fresh Fruits" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowUpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
             <AcUnitIcon/>
          <Typography className={classes.heading}>
            Bakery, Cakes & Dairy
          </Typography>
        </AccordionSummary>
        <Grid container>
          <Grid item xs={12}>
          <List
              component="nav"
              className={classes.root}
            >
              <ListItem button>
                <ListItemText primary="All Fruits & Vegetables" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Fresh Vegetables" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Herbs & Seasoning" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Fresh Fruits" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowUpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
             <AcUnitIcon/>
          <Typography className={classes.heading}>Beverages</Typography>
        </AccordionSummary>
        <Grid container>
          <Grid item xs={12}>
          <List
              component="nav"
              className={classes.root}
            >
              <ListItem button>
                <ListItemText primary="All Fruits & Vegetables" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Fresh Vegetables" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Herbs & Seasoning" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Fresh Fruits" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<KeyboardArrowUpIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
             <AcUnitIcon/>
          <Typography className={classes.heading}>
            Snacks & Branded Foods
          </Typography>
        </AccordionSummary>
        <Grid container>
          <Grid item xs={12}>
          <List
              component="nav"
              className={classes.root}
            >
              <ListItem button>
                <ListItemText primary="All Fruits & Vegetables" />
              </ListItem>
              <Divider />
              <ListItem button divider>
                <ListItemText primary="Fresh Vegetables" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Herbs & Seasoning" />
              </ListItem>
              <Divider light />
              <ListItem button>
                <ListItemText primary="Fresh Fruits" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Accordion>
    </div>
  );
}
