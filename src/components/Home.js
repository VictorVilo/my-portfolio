import React from "react"
import image from "../background.jpg";
import GlassCard from './glasscard';

/*export default function Home() {
    return  (
        <main>
            <img src={image} alt="Background" className="absolute" object-cover w-full h-full/>  
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Victor.</h1>
            </section>
        </main>
    )
}*/

 
export default function Home() {
    return (
            
        <div className="Home"
        style={{
            width: '100vw',
            height: '100vh',
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            backgroundAttachment: "fixed"
        }}>

            <GlassCard />

        </div>

        
        

        
    )
}