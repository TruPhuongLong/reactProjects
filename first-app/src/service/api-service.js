import cuid from 'cuid';

export const fetchData = ()=>{
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .catch(error => console.log(error));
}

export const fetchDataDummy = ()=>{
    return new Promise(resolve => setTimeout(() => {
        resolve([
            createNewItem('one'),
            createNewItem('two'),
            createNewItem('three'),
        ])
    }, 1000))
}

export function createNewItem(text){
    return {id: cuid(), name: text}
}