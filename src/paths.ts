export const BASE_PATH = "/moogli-test"

const validPaths = ["emissionsByLocation", "totalEmissions", "fuelTypes"] as const

const snakeCase = (str: string) => str.replace(/([A-Z])/g, "-$&").toLowerCase()

const paths = validPaths.reduce(
  (acc, path) => {
    acc[path] = `${BASE_PATH}/${snakeCase(path)}`
    return acc
  },
  {} as Record<(typeof validPaths)[number], string>
)

console.log({paths})

export default paths
