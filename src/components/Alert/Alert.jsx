//imports the React module
import React from 'react';

//style for the Alert messages
const alertStyle = {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold"
}

//Alert react component
const Alert = (props) => (
    <div className={`alert alert-${props.type||"sucess"}`} style={alertStyle}>
        {props.children}
    </div>
)

export default Alert;