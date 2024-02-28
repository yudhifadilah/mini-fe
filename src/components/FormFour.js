import React, {useContext} from 'react';
import AppContext from './Context';
import './styles.css';

const FormFour = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.userAktifitas == null) {
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="container">
            <p>Enter your details</p>
            <div className="formContain">
                <form className="form">
                    <input className="formInput" type="text" placeholder="Aktifitas" onChange={e => updateContext.setAktifitas(e.target.value)} required/>
                    <div className="multipleButtons">
                    <button className="multipleButton" value="Previous" type="button" onClick={() => updateContext.setStep(updateContext.currentPage - 1)}>Previous </button>
                    <button className="multipleButton" value="Next" type="button" onClick={next}>Next </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormFour;