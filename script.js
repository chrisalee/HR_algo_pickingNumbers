/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

const pickingNumbers = (a) => {
    a.sort((a, b) => a -b);
    // console.log(a);
    let checkNumber = a[0];
    // console.log(checkNumber);
    let group = 0;
    
    return Math.max(...a.reduce((target, number) => {
        !(Math.abs(number - checkNumber) <= 1) && (checkNumber = number, group++);
        
        // console.log(target[group]);
        target[group] ? target[group]++ : target.push(1);
        
        console.log(target);
        return target;
    }, []))
}

//////////////////////////////////////////////////////////////////////
const pickingNumbers = (a) => {

    // Construct our map
    var map = new Array(100);
    map.fill(0);

    // Populate map
    for(var i = 0; i < a.length; i++){
        map[a[i]]++;
    }

    // Find the max sum of two values with keys within one of each other
    var max = 0;
    for(var i = 1; i < map.length; i++){
        if(map[i] + map[i - 1] > max){
            max = map[i] + map[i - 1];
        }
    }
    
    console.log(max);
    return max;
}
