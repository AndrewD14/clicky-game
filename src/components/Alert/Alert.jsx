import React from 'react';

const alertStyle = {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold"
}

const Alert = (props) => (
    <div className={`alert alert-${props.type||"sucess"}`} style={alertStyle}>
        {props.children}
    </div>
)

export default Alert;