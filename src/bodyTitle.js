import React, { Component } from 'react';


const BodyTitle = ({title, class_name, children}) => (
    <div className={`BodyTitle ${class_name}`}>
        {children}
    </div>
);

const Title = ({title, class_name, icon}) => (
    <div className={`header `}> 
        <p className={`border-bottom  ${class_name}`}>
        <i class="material-icons">{icon}</i>{title}</p>
    </div>
);

export default BodyTitle;
export {Title};