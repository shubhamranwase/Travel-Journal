import { useEffect } from "react";

export default function Actions() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor");

        const mousemove = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + "px";
                cursor.style.top = e.clientY + "px";
            }
        }
        document.addEventListener("mousemove", mousemove);
        return () => {
            document.removeEventListener("mousemove", mousemove);
        }
    }, [])


    return (
        <div className="cursor"></div>
    )
}