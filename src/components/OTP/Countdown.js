import { useEffect, useState } from "react"


const Countdown = (props) => {
    const [count,setCount] = useState(60)


useEffect(()=>{
    if (count === 0) {
        props.setDisableBtn(true)
        return;
    }
   const timer = setInterval(() => {
        setCount(count-1)
    }, 1000);
    return ()=>{
        clearInterval(timer)
    }
},[count])

  return (
    <div>
        {count}
    </div>
  )
}

export default Countdown