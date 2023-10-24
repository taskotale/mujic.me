import '../styles/landing.css'

import bgImg from '../static/front-door-bg-img.png'

export default function Landing () {

    return (
        <div 
        className='landing-main'
        style={{ 
            backgroundImage: `url(${bgImg})`,
        }} ></div>
    )
}