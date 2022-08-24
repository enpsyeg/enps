import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as PIXI from 'pixi.js'
import gsap from "gsap"

import { Carousel } from 'react-bootstrap'



export default function HeroSlider() {

    const data = useStaticQuery(graphql`
        query MyQuery {
            allSanityHeroSlider {
            nodes {
                title
                id
                nativePlantImage {
                alt
                asset {
                    gatsbyImageData
                }
                }
            }
            }
        }
    `)

    const Application = PIXI.Application
    const slideEffect = new Application({

    })

    const heroSlider = data.allSanityHeroSlider.nodes
    
    
    return (
        <div className='imageSlider'>
            <Carousel slide={false} controls={false} indicators={false}>
                {heroSlider.map((obj, index) => {

                    return(
                        <Carousel.Item key={obj.id}>
                        <GatsbyImage 
                            image={obj.nativePlantImage.asset.gatsbyImageData}
                            alt={obj.nativePlantImage.alt}
                            className="slide__img"
                        />
                        <p>{obj.title}</p>
                    </Carousel.Item>      
                    )
                               
                })}
            </Carousel>
        </div>
    )
}

