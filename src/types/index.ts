// Global type definitions

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: string
}

export interface NavItem {
  label: string
  href: string
}
