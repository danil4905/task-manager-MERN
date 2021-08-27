import React from 'react';
import './input.scss';



const Input = props => {

    return(
        <>
            <input className={'Input input__'+ props.type} type="text" placeholder={props.placeholder}/>
            <img src={props.icon} alt="#" className='input__icon' />
            {}
            <button className='clearInput-btn' onClick={()=>{}}></button>
        </>
    )
}
export default Input;