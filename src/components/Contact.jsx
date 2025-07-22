import { Instagram,  LinkedinIcon, Mail, MapPinIcon, Phone, SendIcon } from 'lucide-react'
import Data from '../data.json'
import React, { useState } from 'react'
import { cn } from '../lib/utils'
import { useToast } from '../hooks/use-toast'

function Contact() {

    const {toast}=useToast();
    const [isSubmitting,setIsSubmitting]=useState(false)

    const contactInfo=Data.contact.info
    const socialmedia=Data.contact.socialmedia
    const  handleSubmit=async(e)=>{
        e.preventDefault()

        setIsSubmitting(true)

        const formData = new FormData(e.target);

        formData.append("access_key", "0e92a90c-a59d-4710-a8eb-89da0a1a4dbf");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
        setIsSubmitting(false);
         e.target.reset();
         } else {
            console.log("Error", data);
        }
 
        setTimeout(()=>{
            toast({
                title:"Message sent!",
                description:"Thank you for your message. I'll get back to you soon "

                
            });
            setIsSubmitting(false)

        },1500)

    }

  return <section id="contact" className='py-24 px-4 relative bg-secondary/30'>

    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities. 
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                <div className='space-y-10 justify-center'>

                    <div className="flex items-start space-x-4">

                        <div className='p-3 rounded-full bg-primary/10 border-b-primary border-b'>
                            <Mail className='h-6 w-6 text-primary'/>

                        </div>

                        <div>
                            <h4 className='text-primary'>Email</h4>
                            <a className=" text-muted-foreground hover:text-primary transition-colors " href="mailto:gndlahari@gmail.com">{contactInfo.email}</a>
                            
                        </div>

                    </div>

                    <div className="flex items-start space-x-4">

                        <div className='p-3 rounded-full bg-primary/10 border-b-primary border-b'>
                            <Phone className='h-6 w-6 text-primary'/>

                        </div>

                        <div>
                            <h4 className='text-primary'>Phone</h4>
                            <a className=" text-muted-foreground hover:text-primary transition-colors " href="tel:+14706014009">{contactInfo.phone}</a>
                            
                        </div>

                    </div>

                    <div className="flex items-start space-x-4">

                        <div className='p-3 rounded-full bg-primary/10 border-b-primary border-b'>
                            <MapPinIcon className='h-6 w-6 text-primary'/>

                        </div>

                        <div>
                            <h4 className='text-primary'>Location</h4>
                            <a className=" text-muted-foreground hover:text-primary transition-colors " >{contactInfo.location}</a>
                            
                        </div>

                    </div>

                </div>

                <div className='pt-8'>
                    <h4 className='font-medium mb-4'>Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a target="_blank" href={socialmedia.linkedin}>
                            <LinkedinIcon/>
                        </a>
                        <a target='_blank' href={socialmedia.insta}>
                            <Instagram/>
                        </a>

                    </div>
                </div>
            </div>

            <div className='bg-card p-8 rounded-lg bg-primary/5 border-y border-y-primary/20 shadow-lg shadow-primary/35'>
                <h3 className='text-2xl font-semibold mb-6 text-'>Send a Message</h3>
            
                <form action="" className='space-y-6' onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value="0e92a90c-a59d-4710-a8eb-89da0a1a4dbf"></input>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name:</label>
                        <input type='text' id='name' name='name' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden
                        focus:ring-2 focus:ring-primary' placeholder='John'/>
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email:</label>
                        <input type='email' id='email' name='email' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden
                        focus:ring-2 focus:ring-primary' placeholder='john@gmail.com'/>
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message:</label>
                        <textarea  id='message' name='message' required className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden
                        focus:ring-2 focus:ring-primary resize-none' placeholder="Hello, I'd like to talk about... "/>
                    </div>

                    <button type='submit'
                    disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                        {isSubmitting?"Sending...":"Send Message"}
                        <SendIcon size={16}/>
                    </button>

                </form>

            </div>
        </div>
        
    </div>
  </section>
}

export default Contact