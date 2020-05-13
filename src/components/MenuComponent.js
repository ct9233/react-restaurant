import React, { Component } from 'react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: ''
        };
    }

    render() {

        return (
            <div className='container'>
                <h5>Menu</h5>
                <p>menu items</p>
            </div>
        );
    }
}

export default Menu;