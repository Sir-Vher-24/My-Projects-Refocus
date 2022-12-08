//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "'Nightmare' TV show 'Euphoria — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];

export function search(/*inputValue*/) {//Adding Parameter in search(inputValue) to test the function in main.test.js
  //inputValue is the variable that contains the search string
const inputValue = document.getElementById("search-input").value.toLowerCase();
//Temporary disable the variable const inputValue to test the search function in main.test.js
    for ( var i = 0 ; i < newsList.length ; i ++){
      if (newsList[i].toLowerCase().includes(inputValue)){
       newsList[i]
       console.log(newsList[i])
      }else{
        newsList[i] = "";
      }
    }
  return newsList;
}

export function sort(type) {
  if (type == "ascending") {
    newsList.sort();
  } else {
    newsList.reverse();
  }

  return newsList;
}
