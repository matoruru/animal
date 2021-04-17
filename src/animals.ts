export type Species = string
export type Sound = string

const animals: Record<string, string[]> = {
  cat: ["mew", "meow", "purr", "hiss", "nya"],
  cow: ["low", "moo"],
  crow: ["caw", "cah"],
  dog: ["wow", "woof"],
  duck: ["quack"],
  giraffe: ["hum"],
  pig: ["oink"],
  pigeon: ["coo"],
  snake: ["hiss"]
}

export const getSounds = (name: string): string[] | undefined => animals[name]
