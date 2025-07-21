import data from '../data.json'
import {ArrowDown} from 'lucide-react'
export const Profile=()=>{
    const paragraphs = data.profile.bio.split('\n');

    return <section id="profile" className="relative min-h-screen flex  col items-center justify-center px-4 ">

            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in ">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Geetha Naga Durga Lahari </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Maddu</span>
                    </h1>

                    <div className="text-md
                     text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3" >
                        {paragraphs.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
                    </div>
                    <div className=' pt-4 opacity 0animate-fade-in-delay-4'>
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>



                </div>
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>

                <span className='text-sm text-muted-foreground mb-2'>Scroll</span>
                <ArrowDown className='h-6 w-6 text-primary'/>

            </div>

            </div>

        </section>
}