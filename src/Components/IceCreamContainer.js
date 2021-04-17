import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCream/iceCreamAction';

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of IceCream - {props.numberOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy IceCream</button>
        </div>
    );
};

// this function get the redux state as a parameter and return an object
const mapStateToProps= state =>{
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

// This function gets the redux dispatch method as a paramter and return an object
const mapDispatchToProps = dispatch =>{
    return {
        buyIceCream: ()=> dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);