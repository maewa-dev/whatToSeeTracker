export function numberToArray(number:number) {
    let array = [];
    if (number){
        for (let i=0; i<number ; i++){
        array.push(i+1)          
        }
    }

    return array;
}

export function numberToArrayRange(initial:number, final:number) {
    let array = [];
    for (let i=initial; i<=final ; i++){
        array.push(i)          
    }

    return array;
}