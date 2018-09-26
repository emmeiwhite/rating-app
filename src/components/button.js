import React,{Component} from 'react';

const Button = (props)=>{
    return <button onClick={props.clickEvent}>{props.children}</button>
}

export default Button;