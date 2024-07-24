import { useRef, useState } from 'react'
import '../css/chill.css'
import Draggable from 'react-draggable'
import Message from "../components/Message"
import useStore from '../stores/store'

export default function Chill(){

    const colorsAnimation = useStore((state) => state.colorsAnimation)
    const setColorsAnimation = useStore((state) => state.setColorsAnimation)

    const messages= [
        "So you came here..",
        "I'm not the only person here, but I won't go to the next stage.",
        "I'm stuck, and she's stuck as well.",
        "She's stuck in the stages.",
        "Please, take care of her."
    ]

    const [currentMessage, setCurrentMessage] = useState(0)

    const [play, setPlay] = useState(true)
    const buttonTextRef = useRef(null)
    const leftSliderRef = useRef(null)
    const rightSliderRef = useRef(null)

    const stopPlay = ()=>{
        setColorsAnimation()
    }

    const getTranslateY = (element)=> {
        const style = window.getComputedStyle(element)
        const matrix = new DOMMatrixReadOnly(style.transform)
        const y = matrix.m42
        
        return y
    }

    const handleSliderDrag = (element, axis)=>{
        const y = getTranslateY(element)
        sessionStorage.setItem(`skew${axis}`, y)
    }

    const Y = Number(sessionStorage.getItem("skewY"))
    const X = Number(sessionStorage.getItem("skewX"))

    return(
        <div className='container'>
            <section className='centerFlex' style={{height: "100%", gap: "100px"}}>
                <div className='slider vertical'>
                    <Draggable defaultPosition={{x: 0, y: Y ? Y : 0}} onDrag={()=>handleSliderDrag(leftSliderRef.current,"Y")} axis="y" bounds="parent">
                        <div className='neuButton' ref={leftSliderRef}></div>
                    </Draggable>
                </div>
                <div className="full_square square centerFlex neuDialog" style={{flexDirection: "column"}}>
                <div className="dialogAuthor neuText">John Doe</div>
                    <Message message={messages[currentMessage]} key={currentMessage} addClass={"neuText"}/> 
                    <button className='neuText neuButton2 centerFlex' style={{ borderRadius: "100px", padding: "0.5rem"}} onClick={()=>setCurrentMessage((prevState)=>prevState+1)}>
                        Next
                    </button>
                </div>
            </section>

            <section className='centerFlex' style={{flexDirection: "column", height: "100%", justifyContent: "space-between"}}>

                <h1 className='title'>Chill here</h1>

                <div className="large_btn slider" >
                    <input type="checkbox" id="check" checked={!colorsAnimation}/>
                    <label id="boutonPlay" htmlFor="check" onClick={stopPlay}><span ref={buttonTextRef}>{colorsAnimation ? "ON" : "OFF"}</span></label>
                </div>
                    
                <div className="waves">
                    <div className="wave1"></div>
                    <div className="wave2"></div>
                </div>
            </section>

            <section className='centerFlex' style={{height: "100%", gap: "150px"}}>
                <div className="square centerFlex">
                    <div className="hint neuText">53</div>
                    <Draggable bounds="parent">
                        <div className='neuButton'></div>
                    </Draggable>
                </div>
                <div className='slider vertical'>
                    <Draggable axis="y" bounds="parent" defaultPosition={{x: 0, y: X ? X : 0}} onDrag={()=>handleSliderDrag(rightSliderRef.current,"X")}>
                        <div className='neuButton' ref={rightSliderRef}></div>
                    </Draggable>
                </div>
            </section>


        </div>
    )
}