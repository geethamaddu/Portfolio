import React, { useState } from 'react'
import Data from '../data.json'
import { cn } from '../lib/utils'

function Skills() {

    const [activeCategory,setActiveCategory]=useState("All")

    const skills=Data.skills
    const filterSkills=skills.filter((skill)=>activeCategory==="All"||skill.category===activeCategory)

    const categories=Data.categories

  return <section id='skills' className='py-24 px-4 re'>

        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'>Skills</span>
            </h2>

            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {
                    categories.map((category,key)=>(
                        <button key={key}
                        onClick={()=>setActiveCategory(category)}
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCategory===category?"bg-primary text-primary-foreground ":"bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                            {category}
                        </button>

                    ))
                }

            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    filterSkills.map((skill,key)=>(
                        <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
                            <div className='text-left mb-4'>
                                <h3 className='font-semibold text-lg'>{skill.name}</h3>
                            </div>
                        </div>
                    ))

                }
            </div>

        </div>

  </section>
    
  
}

export default Skills