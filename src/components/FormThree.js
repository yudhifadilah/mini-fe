import React, {useContext} from 'react';
import AppContext from './Context';
import './styles.css';

const FormThree = () => {
    const myContext = useContext(AppContext);
    const updateContext = myContext.userDetails;

    const next = () => {
        if (updateContext.userUkuranBaju == null) {
            console.log('Please select Ukuran Baju')
        } else if (updateContext.userPendidikan == null) {
            console.log('Pilih pendidikan')
        } else (updateContext.setStep(updateContext.currentPage + 1))
    };

    return (
        <div className="container">
            <p>Silahkan Pilih dan Lengkapi</p>
            <div className="formContainer">
                <form className="form">
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setUkuranBaju(e.target.value)} >
                        <option >Pilih Ukuran</option>
                        <option value="small">S</option>
                        <option value="large">L</option>
                        <option value="extra-large">XL</option>
                    </select>
                    </label>
                    <label>
                    <select className="formSelect" onChange={e => updateContext.setPendidikan(e.target.value)} >
                        <option>Pendidikan</option>
                        <option value="sekolah-dasar">SD</option>
                        <option value="sekolah-menengah-pertama">SMP</option>
                        <option value="sekolah-menengah-akhir">SMA</option>
                    </select>
                    </label>
                    <button type="button" className="formSubmit" onClick={next}>Next </button>
                </form>
            </div>
        </div>
    );
};

export default FormThree;