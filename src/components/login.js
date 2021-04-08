import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LoginCard from './loginCard'
import SignUpCard from './signUpCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:'2%',
    // marginTop:'30%'
    position:'absolute',
    top:'15%',
    left:'0%',right:'0%'
    ,botton:'0%'
    
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <center>
        <Tabs
    value={value}
    indicatorColor="#ffffff"
    textColor="#ffffff"
    style={{backgroundColor:'#7ed126'}}
    onChange={handleChange}

  >
     <Tab
            value="one"
            label="Login"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="SignUp" {...a11yProps('two')} />
  </Tabs>
        </center>
      </AppBar>
      <TabPanel value={value} index="one">
        <LoginCard/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <SignUpCard/>
      </TabPanel>
    </div>
  );
}
