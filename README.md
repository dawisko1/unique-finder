# Solution to leetcode #387

A solution I've come up with for the [leetcode #387](https://leetcode.com/problems/first-unique-character-in-a-string/description/) trying to not bruteforce the issue. 

to run, simply download the code and run the following commands:
```bash
npm run build
```

Followed by:
```bash
./main testfile.txt
```
or
```bash
./main testfile-large.txt
```
or just:
```mash
./main -i loveleetcode
```

When using the **-i, --inline flag** the input to the command is treated as the data to process, rather than the file to load.

where **testfile-large.txt** is a file with 100,000 characters long string with a single 'c' letter at index 11,268.

You can control the input via testfile.txt or pass any other file as an argument.

## Usage:

```bash
./main [-v|--debug] path-to-file
```
### Command options:

**-v**, **--debug** Toggle verbose output on.

**-i**, **--inline** Toggle the inline mode, where the text passed to the command is treated as data to be processed rather than a file to load.

**-h**, **--help** Display a help message.