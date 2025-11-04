import React from 'react'
import Image from 'next/image'

// assetes
import HeroImage from "@/app/assets/hero.png"
function Hero() {
    return (
        <div>
            <div className='bg-black flex items-center text-white'>
                <Image src={HeroImage} />
                <div>
                    <h1 className='md:text-3xl lg:text-5xl'>New Collections of Fashion Clothes</h1>
                    <p className='text-base'>Find fashion-forward outfits perfect for every occasion</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
