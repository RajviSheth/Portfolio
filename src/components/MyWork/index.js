import './index.scss';
import Loader from 'react-loaders'
import pic_1 from '../../assets/images/pic_1.jpg'
import pic_2 from '../../assets/images/pic_2.jpg'
import pic_3 from '../../assets/images/pic_3.jpg'
import pic_4 from '../../assets/images/pic_4.jpg'
import pic_5 from '../../assets/images/pic_5.jpg'
import pic_6 from '../../assets/images/pic_6.jpg'
import pic_7 from '../../assets/images/pic_7.jpg'
import pic_8 from '../../assets/images/pic_8.jpg'
import pic_9 from '../../assets/images/pic_9.jpg'
import pic_10 from '../../assets/images/pic_10.jpg'
import pic_11 from '../../assets/images/pic_11.jpg'
import pic_12 from '../../assets/images/pic_12.jpg'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const MyWork = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
         <div className="container mywork-page">
            <div><img class="illus" src={pic_1} alt="MyWork_1"/></div>
            <div><img class="illus" src={pic_2} alt="MyWork_2"/></div>
            <div><img class="illus" src={pic_3} alt="MyWork_3"/></div>
            <div><img class="illus" src={pic_4} alt="MyWork_4"/></div>
            <div><img class="illus" src={pic_5} alt="MyWork_5"/></div>
            <div><img class="illus" src={pic_6} alt="MyWork_6"/></div>
            <div><img class="illus" src={pic_7} alt="MyWork_7"/></div>
            <div><img class="illus" src={pic_8} alt="MyWork_8"/></div>
            <div><img class="illus" src={pic_9} alt="MyWork_9"/></div>
            <div><img class="illus" src={pic_10} alt="MyWork_10"/></div>
            <div><img class="illus" src={pic_11} alt="MyWork_11"/></div>
            <div><img class="illus" src={pic_12} alt="MyWork_12"/></div>
          </div>
            <Loader type='pacman'/>
        </>
    )
}

export default MyWork
