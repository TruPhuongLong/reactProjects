import fs from 'fs';

export const read = path => new Promise((resolve, reject)=>{
    fs.readFile(path, (err, data)=>{
        if(err){
            reject(err);
        }
        resolve(data);
    })
})

export const write = (path, data) => new Promise((resolve, reject)=>{
    fs.writeFile(path, data, err => {
        if(err) reject(err);
        resolve();
    })
})