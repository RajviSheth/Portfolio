// import LogoS from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import './index.scss';
import Loader from 'react-loaders';
import night from '../../assets/images/night.png';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['S', 'h', 'e', 't', 'h']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>  
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <span className={`${letterClass} _15`}> </span>
                        <span className={`${letterClass} _16`}>R</span>
                        <span className={`${letterClass} _17`}>a</span>
                        <span className={`${letterClass} _18`}>j</span>
                        <span className={`${letterClass} _19`}>v</span>
                        <span className={`${letterClass} _20`}>i</span>
                        <span className={`${letterClass} _15`}> </span>
                        {/* <img src={LogoS} alt="developer"/>  */}
                        <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={21}
                        />
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={25}
                        />
                    </h1>
                    <h2>Full stack Developer / Python / SQL and Databases expert</h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    <img className='solid-logo' src={night} alt="R"/>
                </div>
                <Logo/>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home