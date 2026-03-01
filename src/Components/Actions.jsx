import { useState, useEffect } from "react";

export default function Actions(){
        // const [ClientX, setClientX] = useState(0);
        // const [ClientY, setClientY] = useState(0);

        // useEffect(() => {
        // const mouselocation = (e) => {
        //     setClientX(e.clientX);
        //     setClientY(e.clientY);
        // }
        // document.addEventListener("mousemove", mouselocation);
        // return () => {
        //     document.removeEventListener("mousemove", mouselocation);
        // }
        // }, []);

        useEffect(() => {
            const cursor = document.querySelector(".cursor");

            const mousemove = (e) => {
            if(cursor){
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            }
        }
        document.addEventListener("mousemove", mousemove);
        return () => {
            document.removeEventListener("mousemove", mousemove);
        }
    },[])
        
        
    return(
            <div className="cursor"></div>
            // <div className="coordinates">
            //     <h1>{ClientX} & {ClientY}</h1>
            // </div>
    )
}