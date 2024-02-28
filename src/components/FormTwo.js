import React, { useContext } from 'react';
import AppContext from './Context';
import './styles.css';

const FormTwo = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.motivation === null) {
            console.log('Please enter your motivation');
        } else {
            updateContext.setStep(updateContext.currentPage + 1);
        }
    };

    return (
        <div className="container">
            <p>Enter your motivation:</p>
            <div className="formContain">
                <form className="form">
                    <input
                        className="formInput"
                        type="text"
                        placeholder="Enter your motivation"
                        value={updateContext.motivation}
                        onChange={e => updateContext.setMotivation(e.target.value)}
                        required
                    />
                    <button className="formSubmit" type="button" onClick={next}>
                        Next
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormTwo;
