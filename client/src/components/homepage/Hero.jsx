import React from 'react'
import { Link } from 'gatsby'

import {GiEarthAmerica} from 'react-icons/gi'
import {GiPlantWatering} from 'react-icons/gi'
import {GiPlantSeed} from 'react-icons/gi'
import {MdNaturePeople} from 'react-icons/md'
import {IoIosPeople} from 'react-icons/io'

import HeroSlider from './HeroSlider'

export default function Hero() {
    

    return (
        <section className='hero'>
            <div className="overlay">
                <div className="container">
                    <div className="heroFlex">
                        <div className="hero__content" data-aos="zoom-in">
                            <h1>Edmonton Native Plant Society</h1>
                            <h2>Native Plant Stewards</h2>
                            <Link className='hero__button borderGradient borderGradientPink' to='/membership'>Become a Member</Link>
                        </div>
                        <HeroSlider/>
                    </div>
                    <aside className="hero__about">
                        <h2 className='hero__aboutHeading'>Who we Are</h2>
                        <p className='hero__subText'>The Edmonton Native Plant Society (ENPS) is a group of people in the Edmonton, Alberta area who like to grow native plants and promote their use in gardening and landscaping. ENPS members participate in restoration activities, sell native plants and seeds, and maintain several demonstration beds. </p>
                    </aside>
                </div>
                
            </div>
        </section>
    )
}
