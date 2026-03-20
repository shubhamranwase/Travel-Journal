import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {
    const ToggleDarkMode = () => {
        document.body.classList.toggle("dark");
    }
        function ToggleIcon() {
            const [IsOn, setIsOn] = useState(false)
            return (
                <label className="switch">
                    <input type="checkbox" checked={IsOn} onClick={ToggleDarkMode} onChange={() => setIsOn(!IsOn)}/>
                    <span className="slider"></span>
                </label>  
            )
        }
    return(
        <nav className="navbar">
            <div className="main-Header">
                <div className="globe"><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <span>My Travel Journal</span>
            </div>
            <div className="toggle-container"><ToggleIcon/></div>
        </nav>
    )
}