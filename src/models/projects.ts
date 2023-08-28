export interface Project {
  title: string
  description: string

  links: {
    iconUrl: string
    url: string
    label: string
  }[]

  tech: {
    label: string
    iconUrl: string
  }[]
}
