// Asynchronous calls 
// fetch vs Xhr

// Doing same as axios
const myAxios = (method,url,endpoint,body = null) => {
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest(); // we create an object

        url = url + endpoint;
        xhr.open(method,url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type','application/json');

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } 
            resolve(xhr.response);
        }

        xhr.onerror = () => {
            reject(xhr.response);
        }
        // all event must be above send
        xhr.send(JSON.stringify(body));
    }
   )
}


const url = 'https://jsonplaceholder.typicode.com';

myAxios('POST',url,'/users',{
    name : 'sourav',
    last_name : 'khan'
}).then((res) => { console.log('Then block',res)})
.catch(err => { console.log(err) })