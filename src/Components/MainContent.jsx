import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import CardData from './CardData'

export default function MainContent(props) {
    const Card = CardData.map((card, index) => {
        return (
    <div className="card" key={index}>
    <img className="img-container"  src={card.image} alt="img" />
    <div className="text-container">
        <a className='country' href={card.countrylink}><FontAwesomeIcon icon={faLocationDot} />{card.country}</a>
        <a className='wiki' href={card.link}><FontAwesomeIcon icon={faCircleInfo} /></a>
        <span><a className='location' href={card.location}>View on google maps</a></span>
        <h1>{card.name}</h1>
        <p>{card.desc}</p>
    </div>
    </div>
        )
    })
    return (
        <div className="gap">
            <div className="card-grid">
            {Card}
        </div>
        </div>
    )
}