import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function Contacts(props) {
    return(
        <div className="contacts">
            <article>
                <img className="contact-img" src="https://imgs.search.brave.com/4GyHsrmAjEALrM_HSHQTo7O62q8NlGDdh2xV2QPLzB0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLWNsYW4u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI2LzAxL3Bva2Vt/b24tZWV2ZWUtbG9m/aS1waXhlbC13aW50/ZXItcGFyay1kZXNr/dG9wLXdhbGxwYXBl/ci1jb3Zlci5qcGc" alt="img" />
                <h3>{props.name}</h3>
                <div className="infocard">
                    <FontAwesomeIcon icon={faPhone} />
                    <p className='phone'>{props.phone}</p>
                </div>
                <div className="infocard">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className='email'>{props.email}</p>
                </div>
            </article>
        </div>
    )
}