import { useEffect} from "react"
import '../css/eye.css'
import CircleWrapper from './CircleWrapper'

const BigEye= ()=>{
    useEffect(() => {

        const eyes = document.querySelectorAll(".circle-wrapper");
    
        const handleMouseMove = (e) => {
            eyes.forEach((eye) => {
                var rect = eye.getBoundingClientRect();
                var x = (e.screenX - (rect.left + rect.width)) / 10 + "px";
                var y = (e.screenY - (rect.top + rect.height)) / 10 + "px";
                eye.style.transform = "translate3d(" + x + "," + y + ", 0px)";
            });
        };
    
        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return(
        <>  
            <div className="bigEye">
                <div className="circle-wrapper">
                    <CircleWrapper size={55} step={20} id={1}></CircleWrapper>
                    <CircleWrapper size={40} step={30} id={2}></CircleWrapper>
                    <CircleWrapper size={70} step={11} id={3}></CircleWrapper>
                </div>
            </div>  
        </>
    )
}

export default BigEye;