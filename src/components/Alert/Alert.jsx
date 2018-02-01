//imports the React module
import React from 'react';

//import css
import Alertcss from './AlertCss';

//Alert react component
const Alert = (props) => (
    <div className={`alert alert-${props.type||"sucess"}`} style={Alertcss.alertStyle}>
        {props.children}
    </div>
)

export default Alert;