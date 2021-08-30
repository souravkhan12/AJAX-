const url = 'https://jsonplaceholder.typicode.com/users';

// const myAxios = (method,url,body = null) => {
//     return fetch(url).then(res=> {return res.json()});
// }

const myAxios = (method,url,body = null) => {
    const headers = {
        'Content-Type' : 'application/json'
    }

    return fetch(url,{
        method : method,
        headers : headers,
        body : JSON.stringify(body)
    }).then((res) => res.json());
}

myAxios('POST',url,{
    'name': 'sourav',
    'last_name' :'khan'
}).then((res)=> {
    console.log('fu',res);
}).catch(err => { });
