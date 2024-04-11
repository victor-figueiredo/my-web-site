export type IProject = {
  id: number
  name: string
  image: string
  images: string[] | undefined
  links: { name: string; url: string }[]
  description: string
  tools: string[] | undefined
}

export type IProjectProps = {
  id: number
  name: string
  image: string
  images: string[]
  links: { name: string; url: string }[]
  description: string
  tools: string[]
}
