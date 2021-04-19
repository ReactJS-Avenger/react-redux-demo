import React from 'react';
import CakeContainer from './Components/CakeContainer';
import { Provider } from "react-redux";
import store from './redux/store';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';

const App=()=>{
    return(
        <Provider store={store}>
        <div>
            <IceCreamContainer/>
            <hr/>
            <HooksCakeContainer/>
            <hr/>
            <CakeContainer/>
            <hr/>
            <NewCakeContainer/>
        </div>
        </Provider>
    )
}
export default App;