// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp() {
    return (
        <div>
            <h1>custom app | chai</h1>
</div>
    )
    
}

const anotherUser = "chai aur react";

const reactElement = React.createElement(
    'a',
    {
    href: 'https://google.com', target: '_blank'
},
    'click me to visit google', anotherUser);



createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp></MyApp>
    reactElement
)
