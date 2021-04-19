import React, { Component } from 'react';
import Card from '@material-ui/core/Card'

class WouldView extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                 <Card
     style={{backgroundColor:'#fff',marginTop:'5%'}}
   >
       <div style={{padding:'3%',marginLeft:'5%'}}>
       
       <div style={{float:'left'}}>
           <strong>You Would also Like to View</strong>
         </div>
         <div style={{marginTop:'6%'}}>
         </div>
       
        </div>
       
   </Card>
   <Card >
       <Card style={{float:'left',padding:'2%',margin:'5%'}}>Indian</Card>
       <Card style={{float:'left',padding:'2%',margin:'5%'}}>Vegetarian</Card>
   </Card>
            </div>
         );
    }
}
 
export default WouldView;