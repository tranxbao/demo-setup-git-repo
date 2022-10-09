import { useState } from 'react'
import GenerateOTP from './GenerateOTP'
import InputOTP from './InputOTP'
import './OTP.scss'


const OTP = () => {
    const [originOTPParent,setOriginOTPParent] = useState ("")
    const [userOTPParent,setUserOTPParent] = useState("")
    const [disableBtn,setDisableBtn] = useState(false)

    const handleSubmitOTP = () =>{
       if(+originOTPParent === +userOTPParent){
         alert ("Correct OTP !!!")
       }else{
        alert("Wrong OTP !!!")
       }
    }
  return (
    <div className='otp-main-container'>
        <GenerateOTP
        setOriginOTPParent ={setOriginOTPParent}
        />
        <InputOTP
        setUserOTPParent={setUserOTPParent}
        handleSubmitOTP = {handleSubmitOTP}
        disableBtn = {disableBtn}
        setDisableBtn={setDisableBtn}
        />
    </div>
  )
}

export default OTP