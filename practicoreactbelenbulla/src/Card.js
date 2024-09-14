import React from 'react';
import 'bulma/css/bulma.min.css';

function Card({ children }) {
    return (
        <div className="card has-background-info-light">
            <header className="card-header">
                <p className="card-header-title is-centered has-text-black"> {children[0]}</p>
            </header>
            <div className="card-content">
                <div className="content has-text-black">{children.slice(1)}</div>
            </div>
        </div>
    );
}

export default Card;
