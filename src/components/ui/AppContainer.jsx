import React from 'react';
import NavBar from './NavBar';

const AppContainer = (props) => {
    return (
        <div className='App-Container' >
            <NavBar/>
            <div className='page-content'>
                {props.children}
            </div>
        </div>
    );
}

export default AppContainer;
