import React, {useState} from 'react'

const GenerateOTP = (props) => {
    const [originOTP, setOriginOTP] = useState ("")
    
    const handleClickBtn = () => {
     const otp = Math.floor(100000 + Math.random() * 900000)
     setOriginOTP(otp)
     props.setOriginOTPParent(otp)
    }
  return (
    <div className='generate-otp-container'>
        <button onClick ={()=> handleClickBtn()}>Generate OTP</button>
        <div className='title'>Your OTP: {originOTP}</div>

    </div>
  )
}

export default GenerateOTP