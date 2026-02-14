import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import CardData from './CardData'

export default function MainContent(props) {
    const Card = CardData.map((card) => {
        return (
            <div className="card-list">
    <img className="img-container"  src={card.image} alt="img" />
    <div className="text-container">
        <a href={card.link}><FontAwesomeIcon icon={faCircleInfo} /></a>
        <h1>{card.name}</h1>
        <p>{card.desc}</p>
    </div>
    </div>
        )
    })
    return (
        <div className="card-grid">
            {Card}
        </div>
    )
}