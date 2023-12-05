export const types = ["Language"] as const

export type ModelType = (typeof types)[number]

export interface Model<Type = string> {
  id: string
  name: string
  description: string
  strengths?: string
  type: Type
}

export const models: Model<ModelType>[] = [
 
  {
    id: "1",
    name: "Typescript",
    description:
      "You know... the industry standard. Typesafe, but not really.. because... javascript. 🤡",
    type: "Language",
  },
  {
    id: "2",
    name: "Javascript",
    description:
      "I miss jQuery.",
    type: "Language",
  },
]
