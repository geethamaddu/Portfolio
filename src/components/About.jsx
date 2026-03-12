import React from 'react'
import data from '../data.json'

function About() {
    const heading=data.about.heading;
    const aboutme=data.about.aboutme.split('\n')

  return <section id="aboutme" className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
            About<span className='text-primary'> Me</span>
        </h2>

        <div className='grid grid-cols-1 gap-12 items-center'>
            <div className='space-y-6'>
                <h3 className='text-2xl font-semibold text-primary'>{heading}</h3>
                <div className='text-muted-foreground'>
                    {
                        aboutme.map((about,key)=>(
                            <p key={key}>{about}</p>

                        ))

                    }                    
                </div>
                

            </div>
            
        </div>

    </div>

  </section>
}

export default About
