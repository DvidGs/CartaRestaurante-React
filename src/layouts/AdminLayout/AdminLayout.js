import React from 'react';
//import "./AdminLayout.scss";

export function AdminLayout(props) {
    const { children } = props;

    return (
        <div>
            <p>Hola AdminLayout</p>

            {children}
        </div>
    );
}
