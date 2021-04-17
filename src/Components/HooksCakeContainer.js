import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

function HooksCakeContainer(props) {
    const numberOfCakes= useSelector(state => state.cake.numberOfCakes)
    const dispatch= useDispatch()
    return (
        <div>
            <h2>Number of cakes - {numberOfCakes}</h2>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
    );
}

export default HooksCakeContainer;