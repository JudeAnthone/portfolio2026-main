import type { ComponentType } from 'react'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Socials from '../components/sections/Socials'

export type SectionId = 'about' | 'skills' | 'projects' | 'socials'

export interface SectionRoute {
  id: SectionId
  label: string
  Component: ComponentType
}

export const sectionRoutes: ReadonlyArray<SectionRoute> = [
  { id: 'about', label: 'About', Component: About },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'socials', label: 'Socials', Component: Socials },
]