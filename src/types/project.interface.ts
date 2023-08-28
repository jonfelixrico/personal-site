export interface Project {
  title: string
  description: string
  image: string

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
