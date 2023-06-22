import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSalesforce } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar"> 
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="rajviSheth"/>
        </Link>
        <nav>
            <NavLink exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
            {/* <NavLink activeclassname="active" className="myWork-link" to="/mywork">
                <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
            </NavLink> */}
        </nav>
        <ul>
            <li>
                <a
                    target='_blank' 
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/rajvisheth10/'
                    >
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                    target='_blank' 
                    rel='noreferrer'
                    href='https://github.com/RajviSheth'
                    >
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a
                    target='_blank' 
                    rel='noreferrer'
                    href='https://trailblazer.me/id'
                    >
                        <FontAwesomeIcon icon={faSalesforce} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar