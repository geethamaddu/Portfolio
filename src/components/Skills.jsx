import React, { useState } from 'react'
import {
  Blocks,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Sparkles,
  Wrench,
} from 'lucide-react'
import Data from '../data.json'
import { cn } from '../lib/utils'

const normalizeCategory = (category) => {
  if (category === 'Backendend') {
    return 'Backend'
  }

  return category
}

const categoryConfig = {
  All: {
    icon: Blocks,
    eyebrow: 'Full stack and AI skills',
    description: 'A curated set of tools I use across AI workflows, product engineering, and shipping production apps.',
  },
  AI: {
    icon: BrainCircuit,
    eyebrow: 'Intelligent systems',
    description: 'LLM apps, retrieval pipelines, embeddings, orchestration, and agentic workflows.',
  },
  Frontend: {
    icon: Code2,
    eyebrow: 'Interface craft',
    description: 'Responsive, accessible interfaces built with modern JavaScript frameworks and UI systems.',
  },
  Backend: {
    icon: Database,
    eyebrow: 'Systems and APIs',
    description: 'Application services, APIs, databases, and distributed architecture for scalable products.',
  },
  Programming: {
    icon: Code2,
    eyebrow: 'Core languages',
    description: 'Strong foundations for problem solving, implementation speed, and maintainable software.',
  },
  'Cloud Technology': {
    icon: Cloud,
    eyebrow: 'Deployment and infra',
    description: 'Cloud platforms and managed services that help take products from local builds to real users.',
  },
  Tools: {
    icon: Wrench,
    eyebrow: 'Daily workflow',
    description: 'The tools I rely on for design, debugging, collaboration, testing, and delivery.',
  },
}

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const skills = Data.skills.map((skill) => ({
    ...skill,
    category: normalizeCategory(skill.category),
  }))

  const categories = Data.categories
  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  )

  const activeConfig = categoryConfig[activeCategory] ?? categoryConfig.All
  const ActiveIcon = activeConfig.icon
  const uniqueSkillCount = new Set(skills.map((skill) => skill.name)).size
  const visibleCount = filteredSkills.length
  const rowCount = filteredSkills.length > 18 ? 3 : filteredSkills.length > 8 ? 2 : 1
  const skillRows = Array.from({ length: rowCount }, (_, rowIndex) =>
    filteredSkills.filter((_, skillIndex) => skillIndex % rowCount === rowIndex)
  ).filter((row) => row.length > 0)

  const getCategoryCount = (category) =>
    category === 'All'
      ? skills.length
      : skills.filter((skill) => skill.category === category).length

  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            <Sparkles size={16} />
            What I build with
          </span>

          <h2 className="text-3xl font-bold md:text-4xl">
            Skills that power <span className="text-primary">AI-first products</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From intelligent workflows to scalable web apps, this stack reflects the tools I use to design, build,
            and ship modern software end to end.
          </p>
        </div>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1.15fr_2fr]">
          <div className="rounded-3xl border border-primary/15 bg-card/80 p-6 text-left shadow-sm backdrop-blur">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
              <ActiveIcon size={24} />
            </div>

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              {activeConfig.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl font-semibold">{activeCategory}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{activeConfig.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                <p className="text-2xl font-bold">{visibleCount}</p>
                <p className="text-sm text-muted-foreground">
                  {activeCategory === 'All' ? 'skills listed' : 'skills in view'}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/70 p-4">
                <p className="text-2xl font-bold">{uniqueSkillCount}</p>
                <p className="text-sm text-muted-foreground">unique tools</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-border/60 bg-card/60 p-4 backdrop-blur">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'group rounded-2xl border px-4 py-3 text-left transition-all duration-300',
                  'min-w-[150px] sm:min-w-[170px]',
                  activeCategory === category
                    ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'border-border/70 bg-background/80 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5'
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{category}</span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-1 text-xs',
                      activeCategory === category
                        ? 'bg-primary-foreground/15 text-primary-foreground'
                        : 'bg-primary/10 text-primary'
                    )}
                  >
                    {getCategoryCount(category)}
                  </span>
                </div>
                <p
                  className={cn(
                    'mt-2 text-xs',
                    activeCategory === category
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground group-hover:text-foreground/80'
                  )}
                >
                  {category === 'All' ? 'Complete toolkit' : `Explore ${category.toLowerCase()} skills`}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/55 p-5 sm:p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-card via-card/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-card via-card/80 to-transparent" />

          <div className="space-y-3">
            {skillRows.map((row, rowIndex) => (
              <div key={`skill-row-${rowIndex}`} className="overflow-hidden">
                <div
                  className={cn(
                    'skills-marquee flex w-max gap-3',
                    rowIndex % 2 === 1 && 'skills-marquee-reverse'
                  )}
                  style={{ animationDuration: `${18 + rowIndex * 4}s` }}
                >
                  {[...row, ...row].map((skill, index) => (
                    <article
                      key={`${skill.category}-${skill.name}-${rowIndex}-${index}`}
                      className="inline-flex shrink-0 items-center rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <span>{skill.name}</span>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
