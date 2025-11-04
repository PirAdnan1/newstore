import React from 'react'
import Image from 'next/image'

// components
import Container from '../Container'

// assetes
import HeroImage from "@/app/assets/hero.png"
function Hero() {
    return (
        <div className='bg-black'>
        <Container>
            <div className='flex flex-col md:flex-row items-center text-white pt-4 md:pt-10'>
                <Image src={HeroImage} className='order-2 md:order-1' />
                <div className='order-1 md:order-2'>
                    <h1 className='md:text-3xl lg:text-5xl text-xl font-semibold'>New Collections of Fashion Clothes</h1>
                    <p className='text-base'>Find fashion-forward outfits perfect for every occasion</p>
                </div>
            </div>
        </Container>
        </div>
    )
}

export default Hero
