import React from 'react';

const Header = props => {
    return (
        <header>
            <h2 data-testid="header">{props.text}</h2>
        </header>
    )
}

export default Header
