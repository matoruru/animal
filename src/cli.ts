import {getSounds} from "./animals";
import {getRandomInt} from "./util";

const animalToSound = (
  input: string,
  index: number
) => ({
  name: input,
  sound: ((mSounds) => mSounds ? mSounds[index % mSounds.length] : "...")(getSounds(input))
})

const helpText = "@matoruru/animal - Cries as the animals you type.\n\
\n\
Usage: animal [ANIMAL_NAME ...]\n\
\n\
Available animals are:\n\
- cat\n\
- cow\n\
- crow\n\
- dog\n\
- duck\n\
- giraffe\n\
- pig\n\
- pigeon\n\
- snake"

const parseArgv = (argv: string[]): string => {
  if (argv.length < 1)
    return ''
  else if (["--help", "-h"].includes(argv[0]))
    return helpText
  else {
    return argv.map((input) => {
      const randomNumber = getRandomInt(10)
      return animalToSound(input, randomNumber)
    }).reduce((acc, { name, sound }) => `${acc}${name}: ${sound}\n`, "")
  }
}

export const main = () => {
  const [, , ...argv] = process.argv

  console.log(parseArgv(argv))
}
