import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'


export default function Header() {
    const ToggleDarkMode = () => {
        document.body.classList.toggle("dark");
    }
    return(
        <nav className="navbar">
            <div className="main-Header">
                <div className="globe"><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <span>My Travel Journal</span>
            </div>
            <div className="mode" onClick={ToggleDarkMode} ><FontAwesomeIcon icon={faCircleHalfStroke} /></div>
        </nav>
    )
}