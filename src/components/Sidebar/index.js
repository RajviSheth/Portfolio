import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBuilding, faClose, faEnvelope, faHome, faNewspaper, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSalesforce } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (
    <div className="nav-bar"> 
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo"/>
            <img className='sub-logo' src={LogoSubtitle} alt="rajviSheth"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)}
            exact='true' activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink onClick={() => setShowNav(false)}
            activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            {/* <NavLink activeclassname="active" className="myWork-link" to="/MyWork">
                <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
            </NavLink> */}
            <NavLink onClick={() => setShowNav(false)}
            activeclassname="active" className="portfolio-link" to="/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e'/>
            </NavLink>

            {/* <NavLink onClick={() => setShowNav(false)}
            activeclassname="active" className="experience-link" to="/experience">
                <FontAwesomeIcon icon={faBuilding} color='#4d4d4e'/>
            </NavLink> */}

            <NavLink onClick={() => setShowNav(false)}
            activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>

            <NavLink onClick={() => setShowNav(false)}
            activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faNewspaper} color='#4d4d4e'/>
            </NavLink>

            

            <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
            />
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
        <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
        />
    </div>
        )
    }

export default Sidebar