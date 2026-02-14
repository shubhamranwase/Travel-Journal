import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return(
        <nav className="navbar">
            <div className="globe"><FontAwesomeIcon icon={faEarthAmericas} /></div>
            <span>My Travel Journal</span>
        </nav>
    )
}