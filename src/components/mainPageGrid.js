import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';    
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor:'#c9c7c3',
    margin:'1%'
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    width:'100%',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

 const tileData = [
       {
         category: 'All',
       },
       {
        category: 'Fruits',
      },
      {
        category: 'Foodgrains',
      },
      {
        category: 'Beverages',
      },
      {
        category: 'Snacks',
      },
      {
        category: 'Drinks',
      },
      {
        category: 'Oils',
      },
      
    ]
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {tileData.map((tile) => (
            <Paper elevation={3} style={{margin:'2%',height:'max-content',padding:'2%'}}>
                <Typography style={{}}>
                    {tile.category}
                </Typography>
            </Paper>
        ))}
      </GridList>
    </div>
  );
}
