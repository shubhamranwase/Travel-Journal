import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export default function MainContent(props) {
    return(
    <div className="card-list">
    <img className="img-container"  src={props.image} alt="img" />
    <div className="text-container">
        <a href={props.link}><FontAwesomeIcon icon={faCircleInfo} /></a>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
    </div>
    </div>
    )
}