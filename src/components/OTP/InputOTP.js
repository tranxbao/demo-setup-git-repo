import {useState} from 'react'
import OtpInput from 'react-otp-input';
import Countdown from './Countdown';

const InputOTP = (props) => {
    const [otp, setOtp] = useState("")
    const handleChange = (otp) => {
        setOtp(otp)
        props.setUserOTPParent(otp)
    };

    const handleConfirmOTP = () => {
        props.handleSubmitOTP()
    }
  return (
    <div className='input-otp-container'>
        <div className='title'>Enter verification code</div>
        <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        separator={<span>-</span>}
        inputStyle={"input-customize"}
      />
      <div className='timer'>
        <Countdown
        setDisableBtn = {props.setDisableBtn}
        />
      </div>
      <div className='action'>
        <button className='clear-btn'>Clear</button>
        <button className='confirm-btn'
            onClick = {()=>handleConfirmOTP()}
            disabled={props.disableBtn}
        >
            Confirm
        </button>
      </div>
    </div>
  )
}

export default InputOTP