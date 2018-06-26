import { read , write} from './file';

describe('my test', () => {
    // it('learning toBe', ()=>{
    //     expect(true).toBe(true);
    // })

    // it('something' , () => {
    //     expect(false).toBe(true);
    // })

    // it('check null, undifine: with toBeTruthy , not.toBeFalsy' , () => {
    //     expect(null).toBeTruthy();
    //     expect(1).not.toBeFalsy();
    // })

    // it('toEqual', ()=>{
    //     // expect({one: 1}).toEqual({one: 1})
    //     const a = [1,2]
    //     const b = a;
    //     const c = {one: 1, two: 2}
    //     expect(c).toHaveProperty('one', 1)
    // })


    it('read file', () => {
        write('src/text.txt', 'good day')
        .then( () => console.log('write success'))
        .catch(err => console.log(err))

        read('src/text.txt')
            .then(data => console.log(data.toString()))
            .catch(error => console.log(error))
    })
})