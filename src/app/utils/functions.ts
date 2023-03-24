export function numberToArray(number:number) {
    let array = [];
    if (number){
        for (let i=0; i<number ; i++){
        array.push(i+1)          
        }
    }

    return array;
}