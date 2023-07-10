import React from 'react';

import './form-input.styles.scss';

const FormInput = ({changeHandler, label, ...otherComponentProps})=>(
    <div className="group">
        <input className='form-input' onChange={changeHandler} {...otherComponentProps}/>
         {
            label ? 
            (<label className={`${otherComponentProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>) :
            null
         }
    </div>

);

export default FormInput;