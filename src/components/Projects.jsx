import React from 'react'
import Dataprojects from '../data.json'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

function Projects() {

  const projects=Dataprojects.projects

  return <section id="projects" className='py-24 px-4 relative '>
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
        Featured <span className='text-primary'>
           Projects
        </span>

      </h2>

      <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
        Here are some of my recent projects. Each project was carefully crafted with attention to  detail, performance, and user experience.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >

        {
          projects.map((project,key)=>(
            <div key={key} className='group bg-card border rounded-lg overflow-hidden shadow-xs card-hover'>
               <div className='h-48 overflow-hidden'>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
               </div>
                <div className='p-6'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {
                      project.tags.map((tag)=>(
                        <span className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 border text-secondary-foreground'>
                            {tag}
                        </span>
                      ))
                    }

                  </div>
                
                  <h3 className='text-xl font-semibold mb-1'>
                      {project.title}
                  </h3>

                  <p className='text-muted-foreground text-sm mb-4'>
                    {project.description}
                  </p>

                  <div className='flex justify-between items-center'>
                    <div className='flex space-x-2'>
                      <div className='flex flex-col items-center'>
                        <a href={project.demoLink} target='_blank' className='text-foreground/80 hover:text-primary transition-colors duration-300'><ExternalLink size={20}/></a>
                        
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-primary/35">
                          Demo
                        </span>
                      </div>

                      <div className='flex flex-col items-center'>
                        <a href={project.GitHub} target='_blank'  className='text-foreground/80 hover:text-primary transition-colors duration-300'><Github size={20} /></a>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm text-primary/35">
                          Github
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
            </div>
          ))
        }

      </div>

      <div className='text-center mt-12'>
        <a href= "https://github.com/geethamaddu" target='_blank' className="cosmic-button w-fit flex items-center mx-auto gap-2">Check My Github <ArrowRight size={16}/></a>
      </div>
    </div>
  </section>
}
export default Projects