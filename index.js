/* jshint esversion: 6 */

const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const filename = 'cam.jpg';
const filepath = path.join(__dirname, filename);
const cmd = `raspistill --output ${filepath} --width 640 --height 480`;

capture();

function capture () {
  console.log('Trying to capture...');
  exec(cmd, (error, stdout, stderr) => {
    if (error || stderr) { return console.log('Something went wrong', error); }
    let stats = fs.statSync(filepath);
    let filesize = (stats.size / 1024).toFixed(0);
    console.log(`Capture successful: ${filepath} (${filesize} kb)`);
  });
}
