import moment from 'moment';
import fs from 'fs';
import dotenv from "dotenv";
dotenv.config();

export function insertFiles(files: string, title: string){
    const pathdata = './storage/files/' + moment().format('YYYY') + '/' + moment().format('MM') + '/' + moment().format('DD');
    const pathdatadb = process.env.BASE_URL+'storage/files/' + moment().format('YYYY') + '/' + moment().format('MM') + '/' + moment().format('DD');

    if (!fs.existsSync(pathdata)) { // CREATE DIRECTORY IF NOT FOUND
        fs.mkdirSync(pathdata, {
            recursive: true
        });
    }
    const filenames = generateFileNameFromTitle(title);
    const [, type]  = files.split(';')[0].split('/');
    const filesd    = pathdatadb + '/' + filenames + '.' + type;
    let base64image = files.split(';base64,').pop();

    fs.writeFile(pathdata + '/' + filenames + '.' + type, base64image!, {
        encoding: 'base64'
    }, function( err ){
        return err
    })

    return filesd;
}
function generateFileNameFromTitle(title: string) {
    // Define a regular expression for invalid characters
    const invalidChars = /[\/:*?"<>|]/g;
    
    // Convert title to lowercase
    let fileName = title.toLowerCase();
    
    // Replace spaces with underscores or hyphens
    fileName = fileName.replace(/\s+/g, '_');
    
    // Remove invalid characters
    fileName = fileName.replace(invalidChars, '');
    
    return fileName;
}