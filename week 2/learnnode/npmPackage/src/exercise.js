const superagent = require('superagent')
const fs = require('fs')

console.log(__dirname)
let data;
fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) =>{
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        .then(res => {
            console.log(res.body.message)
            fs.writeFile("test.txt", res.body.message, (err) => {
                if(err) return console.log(err)
                console.log("Image saved successfully")
            })
        })
        .catch(err => console.log("Error", err));
})

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

const writeFilePro = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile("test.txt", data, (err) => {
            if(err) return reject("File Not found")
            resolve("Dog image saved")
        })
    })
}

readFilePro(`${__dirname}/dog.txt`)
.then(
    data => superagent.get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        .then(res => writeFilePro(res.body.message))
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(() => console.log("Finally done"))
)

//Async/await
/*
const getDogPics = async() => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`)
        const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        const text = await writeFilePro(res.body.message)
        return text
    }catch (e){
        console.log(e)
    }
}

// Trying async

console.log("1");
(async () => {
    const data = await getDogPics()
    console.log("2:", data)
})()
console.log("3")

 */

const getDogPics = async() => {
    try{
        const data = await readFilePro(`${__dirname}/dog.txt`)
        const res1 = await superagent.get(
            `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        const res2 = await superagent.get(
            `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        const res3 = await superagent.get(
            `https://dog.ceo/api/breed/${data.trim().toLowerCase()}/images/random`)
        const all = await Promise.all([res1, res2, res3])
        const images = all.map(el => el.body.message)
        console.log(images)

        //const text = await writeFilePro(res.body.message)
        //return text
    }catch (e){
        console.log(e)
    }
}

getDogPics()