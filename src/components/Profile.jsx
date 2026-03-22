import data from '../data.json'
import photo from '../assets/photo.png'
import { ArrowDown } from 'lucide-react'

export const Profile = () => {
  const paragraphs = data.profile.bio.split('\n')

  return (
    <section id="profile" className="relative flex min-h-screen items-center justify-center px-4 py-24">
      <div className="container z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Geetha Naga Durga Lahari </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2">Maddu</span>
          </h1>

          <div className="mx-auto max-w-2xl text-md text-muted-foreground opacity-0 animate-fade-in-delay-3 lg:mx-0">
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>

          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>

            <a
              href="https://docs.google.com/document/d/13Ng4Keavlf8y8sdqIcfGMHqIpUPPE80Q/edit?usp=drive_link&ouid=102846225088703545539&rtpof=true&sd=true"
              download
              className="rounded-full border border-primary px-6 py-2 text-primary transition-colors duration-300 hover:bg-primary/10"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="profile-photo-shell opacity-0 animate-fade-in-delay-2">
            <div className="profile-photo-card">
              <img src={photo} alt="Geetha Naga Durga Lahari Maddu" className="profile-photo-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  )
}
