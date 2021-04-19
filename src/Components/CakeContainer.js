import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    );
};

// this function get the redux state as a parameter and return an object
// think about second parameter which is a props that is already passed to the component
const mapStateToProps= state =>{
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

// This function gets the redux dispatch method as a paramter and return an object
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);