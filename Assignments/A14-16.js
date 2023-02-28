// QUESTION NO 1

// let education =["matric","intermediate","bachelour","master","PhD"];
// console.log(education)


//  QUESTION NO 8
// write a program to store 3 students names in and array .takes another array to store the score 
// these students the toptal marks are 500 for each students like 


// let studentsName = ["NAIF","MUZAMMIL","HUZAIFA"];
// let obtainMarks = [444, 388, 480];
// let persenatgeNAIF  = 444/500*100;
// let persenatageMUZAMMIL  = 388/500*100;
// let persenatgeHUZAIFA  = 480/500*100; 
 
// console.log(`score of ${studentsName[0]} is ${obtainMarks[0]} and his % is ${persenatgeNAIF}%`)
// console.log(`score of ${studentsName[1]} is ${obtainMarks[1]} and his % is ${persenatageMUZAMMIL}%`)
// console.log(`score of ${studentsName[2]} is ${obtainMarks[2]} and his % is ${persenatgeHUZAIFA}%`)


// QUESTION NO 9
// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser

// (a) 

// let colorName = ["red","blue","green","pink","yellow"]
// let user = prompt("which color you want to add in the list ")
// colorName.unshift(user);
// console.log(colorName)

// (b) 

// let colorName1 = ["red","blue","green","pink","yellow"]
// let user1 = prompt("which color you want to add in the list ")
// colorName.push(user1);
// console.log(colorName1)

// (c) 

// let colorName2 = ["red","blue","green","pink","yellow"]
// let user3 = prompt("fist color in the bigninng ")
// let user2 = prompt("second color in the bigninng ")
// colorName.unshift(user3, user2);
// console.log(colorName2)

// (d) 

// let colorName3= ["red","blue","green","pink","yellow"]
// colorName.shift(user);
// console.log(colorName3);

// (e) 

// let colorName4 = ["red", "blue","green", "pink","yellow"]
// colorName.pop(user);
// console.log(colorName4);

// (f) 

// let colorName5 = ["red", "blue","green", "pink","yellow"]
// let userIndex = +prompt("from wich index number you want to add color name ?")
// let deleteOfColors = +prompt("how many colors you want to delete  ?")
// let addOfColors = prompt("write color name you want to add")
// colorName.splice(userIndex,deleteOfColors,addOfColors);
// console.log(colorName5)


// QUESTION NO 10
// let studentsScore = [ 20, 30, 56, 44, 70]
// studentsScore.sort();
// console.log(studentsScore)


// QUESTION NO 11
// let cityName = ["islamabad", "lahore", "karachi","multan","kpk",]
// let a = cityName.slice(0,2);
// let newArray = [a]
// console.log(newArray)


// QUESTION NO 12
// let value = ["this ","is","a","cat"]
// let ab = value.toString();
// console.log(ab)