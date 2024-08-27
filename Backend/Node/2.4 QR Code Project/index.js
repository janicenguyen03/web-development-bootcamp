/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import { writeFile, writeFileSync } from 'fs';

const URL = await input({ message: 'Enter a URL:' });
// var qr = require('qr-image');
import {imageSync} from 'qr-image';

// var qr_svg = qr.image(URL, { type: 'png' }); 
var qr_png = imageSync(URL, { type: 'png' });
writeFileSync('qr_code.png', qr_png);
// qr_png.pipe(createWriteStream('url_qr.png'));

writeFile('URL.txt', URL, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 