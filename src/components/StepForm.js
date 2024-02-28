import React, {useState} from 'react';
import './styles.css';
import AppContext from './Context';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import FormFinish from './FormFinish';
import ProgressBar from './ProgressBar';

const StepForm = () => {

    const [step, setStep] = useState(0);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [otp, setOTP] = useState(null);
    const [brand, setBrand] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);
    const [value, setValue] = useState(null);
    const [dob, setDOB] = useState(null);
    const [issue, setIssue] = useState(null);
    const [company, setCompany] = useState(null);
    const [hobi, setHobi] = useState(null);
    const [keahlian, setKeahlian] = useState(null);
    const [nik, setNik] = useState(null);
    const [kk, setKk] = useState(null);
    const [aktifitas, setAktifitas] = useState(null);
    const [pendidikan, setPendidikan] = useState(null);
    const [ukuran_baju, setUkuranBaju] = useState(null);
    const [motivasi, setMotivasi] = useState(null);


    const userDetails = {
        userHobi: hobi,
        userKeahlian: keahlian,
        userNik: nik,
        userKk: kk,
        userAktifitas: aktifitas,
        userPendidikan: pendidikan,
        userUkuranBaju: ukuran_baju,
        userMotivasi: motivasi,
        currentPage: step,
        userName: name,
        userMail: email,
        userPhone: phone,
        userOTP: otp,
        vehBrand: brand,
        userVehicle: model,
        vehYear: year,
        vehValue: value,
        userDOB: dob,
        issueDate: issue,
        companyName: company,
        setName,
        setEmail,
        setPhone,
        setStep,
        setOTP,
        setBrand,
        setModel,
        setYear,
        setValue,
        setDOB,
        setIssue,
        setCompany,
        setHobi,
        setAktifitas,
        setKeahlian,
        setKk,
        setNik,
        setMotivasi,
        setUkuranBaju,
        setPendidikan,
    };
    
    return (
        <AppContext.Provider value={{userDetails}}>
            <div className="main">
            <div className="navbar">
                 <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg" alt="logo" />
             </div>
             <div className="body">
                 <h3>Multi Step Form using ReactJS</h3>
                 <div className="wrapper">
                 <ProgressBar />
                 {step === 0 && <FormOne /> }
                 {step === 1 && <FormTwo /> }
                 {step === 2 && <FormThree /> }
                 {step === 3 && <FormFour /> }
                 {step === 4 && <FormFinish /> }
                 </div>
             </div>
        </div>
        </AppContext.Provider>
    );
};

export default StepForm;