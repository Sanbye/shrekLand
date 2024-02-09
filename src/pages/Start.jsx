import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Start() {

    const navigate = useNavigate()
    const [step, setStep] = useState(1)
    const [comfirm, setComfirm] = useState(true)

    useEffect(() => {
        if (comfirm === false) {
          navigate('/goodBye')
        }
        if(step >6){
            navigate('/shrek')
        }
    }, [comfirm, step, navigate]);

    const handleNext = () => {
        setStep(step + 1)
    }

    const handleConfirm = (yes) => {
        if (yes){
            handleNext()
        }else{
            setComfirm(false)
        }
    }

    return (

        <div className='info_container'>
            {step === 1 && <div className='box_info'>
                <h1>Welcome To SHREKLAND</h1>
                <p>You are about to visit the magical place named SHREKLAND</p>
                <p>On this very website SHREKLAND.com</p>
                <div className='buttons_container'>
                    <button onClick={()=>handleConfirm(true)}>OK</button>
                    <img src='/imagesShrek/shrekHead.png' style={{height: "70px"}}></img>
                </div>
            </div>}
            {step === 2 && <div className='box_info'>
                <h1>Welcome To SHREKLAND</h1>
                <p>You are sure ?</p>
                <div className='buttons_container'>
                    <button onClick={()=>handleConfirm(true)}>Yes</button>
                    <img src='/imagesShrek/shrekHead.png' style={{height: "70px"}}></img>
                    <button onClick={()=>handleConfirm(false)}>No</button>
                </div>
            </div>}
            {step === 3 && <div className='box_info'>
                <p>Don't you have anything else to do ?</p>
                <div className='buttons_container'>
                    <button onClick={()=>handleConfirm(false)}>Yes</button>
                    <button onClick={()=>handleConfirm(true)}>No</button>
                </div>
            </div>}
            {step === 4 && <div className='box_info'>
                <p>Ok, but if you are epileptic, you shouldn't continu, this is no joke</p>
                <div className='buttons_container'>
                    <button onClick={()=>handleConfirm(true)}>I'm not</button>
                    <button onClick={()=>handleConfirm(false)}>I'm epileptic, I will leave for my safety</button>
                </div>
            </div>}
            {step === 5 && <div className='box_info'>
                <p>Last chance, do you want to continu ?</p>
                <div className='buttons_container'>
                    <button onClick={()=>handleConfirm(false)}>No</button>
                    <button onClick={()=>handleConfirm(false)}>No</button>
                    <button onClick={()=>handleConfirm(true)} style={{position: "absolute", top: "440px", left: "-730px"}}>Yes</button>
                </div>
            </div>}

            {step === 6 && <div className="box_info">
                <p>For optimal use, we recommend putting this page in full-screen mode</p>
                <div className="buttons_container">
                    <button onClick={()=>handleConfirm(true)}>OK</button>
                </div>
            </div>}

        </div>
    )
}

