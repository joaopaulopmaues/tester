import * as spawn from 'child_process'

export function decmsg(image){ //decoded message inside '.jpg' file from input
  const childPython = spawn('python', ['./python/steganography.py', image])
  return childPython.stdout.on('data', (data)=>{return data})
}