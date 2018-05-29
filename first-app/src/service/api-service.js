import cuid from 'cuid';

export const fetchData = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .catch(error => console.log(error));
}

export const fetchDataDummy = () => {
    return new Promise(resolve => setTimeout(() => {
        resolve([
            createNewItem('one'),
            createNewItem('two'),
            createNewItem('three'),
        ])
    }, 1000))
}

export function createNewItem(text) {
    return { id: cuid(), name: text }
}

const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()
    request.open('GET', api)
    request.onload = () => (request.status == 200) ?
        resolves(JSON.parse(request.response).results) :
        reject(Error(request.statusText))
    request.onerror = err => rejects(err)
    request.send()
})