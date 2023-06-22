import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faGithub, faJava, faPython, faSalesforce } from '@fortawesome/free-brands-svg-icons'
import { faMysql } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    // useEffect(() => {
    //         return setTimeout(() => {
    //           setLetterClass('text-animate-hover')
    //         }, 3000)
    //       }, [])
    return (
        <>
        
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>I'm a full-time software developer and a part-time Digital
                        Illustrator who loves to channel the 
                        inner chef within, experimenting with new dishes.</p>
                    <p>One thing that defines me, is my unyielding ambition and tireless work ethic. As a 
                        passionate individual, I constantly strive to push the boundaries of my abilities. </p>
                    <p>I'm eagerly seeking a role in a dynamic company where I can contribute my expertise and collaborate with 
                        like-minded professionals. My ultimate goal is to be part of a team that embraces cutting-edge 
                        technologies and thrives on challenging and diverse projects. With my dedication and hunger for 
                        growth, I am ready to take on any opportunity that allows me to excel and make a 
                        significant impact.</p>
                    <p>I'm quietly confident, naturally curious, great communicator and persistently working on improving my chops 
                        one curveball at a time. </p>
                </div>

                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                    <div className="face2">
                            <FontAwesomeIcon icon={faPython} color='#EFD81D'/>
                        </div>
                        <div className="face1">
                            <FontAwesomeIcon icon={faDatabase} color='#00008B'/>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJava} color='#FF0000'/>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faAndroid} color='#3DDC84'/>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color='#111111'/>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faSalesforce} color='#21A0DF'/>
                        </div>
                    </div>
                </div>
            </div>

            <Loader type='pacman'/>
        </>
    )
}

export default About