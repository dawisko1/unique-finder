import * as fs from 'node:fs'
import readline from 'node:readline'

// A control debug toggle for more verbose output
let _debugToggle = false

/**
 * A simple debug function which will output debug messages if debugging is toggled on
 * @param message
 */
function debug(message: string) {
  if (_debugToggle) {
    console.log(`[ DEBUG ] ${message}`)
  }
}

/**
 * A support function which checks and reads the file with input to process.
 * @param filename
 */
function checkAndReadFile(filename: string) {
  if (fs.existsSync(filename)) {
    return fs.readFileSync(filename, 'utf-8')
  }

  throw new Error('FileNotFoundException: Given file could not be found, please check the filename and try again.')
}

/**
 * The main business logic of the solution. This function takes in any string input and finds the first non-repeating
 * character in the string and return its index.
 * @param text
 */
function getFirstUniqueCharIndex(text: string) {
  let output = -1
  const uniqueChars = [...new Set(text.split(''))]

  debug('Started with ' + (text.length < 50 ? text : text.substring(0, 50) + `... (${text.length} characters long)`))
  debug(`String consists of following unique characters: ${uniqueChars.join(', ')}`)

  uniqueChars.some((char) => {
    const index = text.indexOf(char)

    if (text.indexOf(char) === text.lastIndexOf(char)) {
      output = index
      debug(`Found the one and only ${char} at ${output}`)
      return true
    }
  })

  return output
}

if (process.argv.includes('--debug') || process.argv.includes('-v')) {
  _debugToggle = true
}

if (process.argv.length >= 3 && process.argv.slice(2).filter((arg) => !arg.startsWith('-')).length > 0) {
  // Read the input from the console
  const input = process.argv
    .slice(2)
    .filter((arg) => !arg.startsWith('-'))
    .at(0)
  // If command run with inline option, treat the input as data to process rather than a file to load.
  const content =
    process.argv.includes('-i') || process.argv.includes('--inline') ? input : checkAndReadFile(input ?? '')

  console.log('Output: ' + getFirstUniqueCharIndex(content ?? '').toString())
} else {
  // Create a cli readline instance
  const prompter = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  // depending on the inline command option ask for a file or data to process
  if (process.argv.includes('-i') || process.argv.includes('--inline')) {
    prompter.question('Provide text to process: ', (response: string) => {
      console.log('Output: ' + getFirstUniqueCharIndex(response).toString())

      // Exit the process since readline will not allow the process to exit once it executes the above line of code
      process.exit(0)
    })
  } else {
    prompter.question('Provide full path to the file with data: ', (response: string) => {
      console.log('Output: ' + getFirstUniqueCharIndex(checkAndReadFile(response)).toString())

      process.exit(0)
    })
  }
}
