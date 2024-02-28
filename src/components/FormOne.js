import React, { useContext } from 'react';
import AppContext from './Context';
import './styles.css';

const FormOne = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

        if (updateContext.userHobi == null) {
            console.log('Please enter your Hobi')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="contain">
            <p>Enter Your Details</p>
            <form className="form">
                <input className="formInput" type="text" placeholder="Hobi" onChange={e => updateContext.setHobi(e.target.value)} required/>
                <input className="formInput" type="text" placeholder="Nik" maxLength="20" onChange={e => updateContext.setNik(e.target.value)}  required/>
                <button type="button" className="formSubmit" onClick={next} >Next</button>
            </form>
        </div>
    );
};

export default FormOne;