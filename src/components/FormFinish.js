import React, { useContext } from 'react';
import axios from 'axios';
import TokenProvider from './Context';
import './styles.css';

const FormFinish = () => {
    const { userDetails } = useContext(TokenProvider); // Menggunakan useContext untuk mengakses konteks
    const { username, token } = userDetails; // Mendapatkan username dan token dari konteks

    const finish = async () => {
        try {
            const config = {
                headers: {
                    'Authorization': `Bearer ${token}` // Sertakan token dalam header
                }
            };

            // Kirim permintaan ke API pertama dengan token bearer
            await axios.post('http://127.0.0.1:8000/api/auth/bios', userDetails, config);

            // Kirim permintaan ke API kedua dengan token bearer
            await axios.post('http://127.0.0.1:8000/api/auth/keluarga', userDetails, config);

            console.log('Data berhasil dikirim ke dua API');
        } catch (error) {
            console.error('Gagal mengirim data:', error);
        }
    };

    return (
        <div className="container">
            <p>Successfully Submitted</p>
            <p>Thanks for {username} your details</p> {/* Gunakan username dari konteks */}
            <img className="done" src="https://www.svgrepo.com/show/13650/success.svg" alt="successful" />
            <button className="doneSubmit" onClick={finish}>Done</button>
        </div>
    );
};

export default FormFinish;
