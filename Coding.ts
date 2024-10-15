// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. 
// Return true if all the g's in the given string are happy.

function gHappy (str:string):boolean{
    let isHappy: boolean = false
    if (str === '') isHappy = true;
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'g'){
            const leftG = str[i - 1] === 'g';
            const rightG = str[i + 1] === 'g';
            if(!leftG && !rightG){
                isHappy = false;
            }else{
                isHappy = true
            }
        }
    }
    return isHappy;
}

// console.log(gHappy('xxggxx'));




// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, 
// but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an 
// alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

function countYZ(str1:string):number{
    let count = 0;
    let str = str1.toLowerCase();
    for(let i = 0; i < str.length; i++){
        if((str[i] === 'y' || str[i] === 'z') && (i === str.length - 1 || !str[i + 1].match(/[a-z]/i))){
            count++;
        }
        
    }
    return count;
}

// console.log(countYZ('feez goody'));





// Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. 
// In other words, zero or more characters at the very begining of the given string, and at the very end of the 
// string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

function mirrorEnds(string:string):string{
    let string2 = ''
    let newString = ''
    for(let i = string.length -1; i >= 0; i--){
        string2 += string[i]
    }
    for(let i = 0; i < string.length; i++){
        if(string[i] === string2[i]){
            newString += string[i]
        }else{
            break;
        }
    }
    return newString;
}

// console.log(mirrorEnds(''));
