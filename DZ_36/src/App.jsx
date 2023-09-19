import React from "react";
import Menu from "./menu";
import Header from "./Header";
import Container from "./Container";
import './css/app.css';

const App = () => {
    return <div className="app">
        <Menu />
        <div className="content">
            <Header />
            <Container />
        </div>
    </div>
};

export default App;