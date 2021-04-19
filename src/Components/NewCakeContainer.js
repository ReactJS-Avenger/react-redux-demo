import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numberOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button>
        </div>
    );
};

// this function get the redux state as a parameter and return an object
const mapStateToProps= state =>{
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

// This function gets the redux dispatch method as a paramter and return an object
const mapDispatchToProps = dispatch =>{
    return {
        buyCake: (number)=> dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);