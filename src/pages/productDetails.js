import React, { Component } from 'react';
import AppBar from '../components/mainPageComponent/appbar'
import ProductCarousel from '../components/productDetailsComponent/productCarousel'
import DescriptionCard from '../components/productDetailsComponent/descriptionCard'
import Buttons from '../components/productDetailsComponent/buttons'
import WouldView from '../components/productDetailsComponent/wouldView';

import Recipies from './../components/productDetailsComponent/receipes';

class ProductDetails extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <AppBar/>
            <ProductCarousel/>
            <DescriptionCard/>
            <Buttons/>
            <WouldView/>
            <Recipies/>

            </div>
         );
    }
}
 
export default ProductDetails;