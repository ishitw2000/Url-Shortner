import React from 'react';
import Sidebar from '../containers/Sidebar';
import Body from '../containers/Body';

const App = () => (
    <div className="main">
        {/* 
            Sidebar 
                Title Bar
                Body
                    Created Urls
                User Panel
                    Avatar
                    Name
                    Logout
        */}
        <Sidebar />
        <Body />
    </div>
);

export default App;