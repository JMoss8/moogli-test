// node script to parse input CSV files to a JSON format
import fs from "fs"
import path from "path"

const filesToParse = ["data1", "data2", "data3"]
const ignoredKeys = ["Total"]

async function parseCSV(fileName, ignoredKeys) {
  const csvData = await fs.promises.readFile(path.join("db", fileName), "utf-8")
  const lines = csvData
    .trim()
    .split("\n")
    .map(line => line.split(";"))
  const header = lines[0]
  const result = []

  lines.forEach((row, i) => {
    if (i === 0) return

    if (ignoredKeys.map(e => row[0].includes(e)).find(e => !!e)) return

    header.forEach((key, j) => {
      if (j === 0 || row[j] === "" || ignoredKeys.map(e => key.includes(e)).find(e => !!e)) return

      const rowTitle = row[0]
      const value = Number(row[j].replaceAll(",", "").replaceAll('"', ""))
      result.push({[header[0]]: rowTitle, key, value})
    })
  })

  return result
}

filesToParse.forEach(file => {
  parseCSV(`${file}.csv`, ignoredKeys)
    .then(data => {
      if (!data) return

      return fs.promises.writeFile(path.join("public", `${file}.json`), JSON.stringify(data, null, 2), "utf-8")
    })
    .then(() => console.log(`${file} file parsed successfully`))
})
