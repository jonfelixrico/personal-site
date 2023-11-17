export interface Project {
  title: string
  description: string
  image: string
  id?: string

  links: {
    icon: string
    url: string
    label: string
  }[]

  tech: {
    label: string
    icon: string
  }[]
}
