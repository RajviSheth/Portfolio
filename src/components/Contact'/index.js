import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
             setTimeout(() => {
                return setLetterClass('text-animate-hover')
            }, 3000)
          }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
        .sendForm(
            'service_qzwu53r',
            'template_q5u5659',
            refForm.current,
            'YqyJpYNfINq_T9hia'
        )
        .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I'm open to freelance opportunities - I would love to take 
                        up unique and creative ambitious projects. However, if you 
                        have any other requests, questions or suggestions, don't hesitate 
                        to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Rajvi Sheth
                    <br/>
                    Rochester Institute of Technology,
                    Rochester, NY <br/>
                    United States< br/>
                    <span>rajvi.sheth@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[43.08536, -77.67632]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.08536, -77.67632]}>
                            <Popup>
                                Rajvi studies here, come over for a cup of coffee :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>

        <Loader type='pacman'/>
        </>
    )
}

export default Contact