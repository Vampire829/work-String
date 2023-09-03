// работа со строками
const myName = "Alim"
const programmingLanguage ="JavaScript"
const courseCreatorName= "Maksim"
const reasonText = `наглядно видны изменения в коде`
const numberOfMonth = 3;
let muInfotext= `Всем привет, Меня зовут ${myName} я изучию язык програмирования ${programmingLanguage} на курсе по ${programmingLanguage} 
y ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText} до этого я изучал ${programmingLanguage} ${numberOfMonth} месяцa. Я уверенн то что я дойду до результата!`
console.log(muInfotext)
let myInfoUp = muInfotext.replaceAll(programmingLanguage, programmingLanguage.toLocaleUpperCase())
let myInfoEnd=myInfoUp[0]+myInfoUp[myInfoUp.length -1];
console.log(myInfoEnd)

const userName = prompt("Как вас зовут?")
const userAge = prompt("сколько вам лет")

 function userClient(userName,userAge){
    userName = userName.toLocaleLowerCase();
    if(isNaN(userAge)){
        return alert("Нужно вести возраст!")
    }else{
         return alert(`вас зовут ${userName.trim()} вам ${userAge.trim()}`)
    }
 }
userClient(userName,userAge)

const userString =prompt("Ведите слово, которое нужно обрезать").trim();
const startSliceIndex =prompt("Ведите номер индекса с котрого нужно начать обрезку строки").trim();
const endSliceIndex =prompt("Ведите номер индекса с которого нужно закончить обрезку строки").trim();

const userSlice = (userString, startSliceIndex, endSliceIndex)=>alert(userString.slice(startSliceIndex, endSliceIndex));
userSlice(userString, startSliceIndex, endSliceIndex)

const userText =prompt("Ведите слово, которое нужно обрезать").trim();
const wordFromText =prompt("Ведите слово, до которого нужно обрезать текст").trim();
const indexOfWord=(userText, wordFromText)=>{
   let indexUser = userText.indexOf(wordFromText);
   return alert(userText.slice(0,indexUser))
}
indexOfWord(userText, wordFromText)

let javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.';
const middleIndex = Math.floor(javaScriptDescription.length / 2);
function textjs (middleIndex){
   middleIndex.replaceAll("a","A"); 
   middleIndex.replaceAll(" ","");
   middleIndex.repl(3);
   return middleIndex
}
console.log(textjs(middleIndex))

// подчет гласных 
console.log(textGlas(glas, text))
function countVowels(str){
   const vowels = ['a', 'e', 'i', 'o', 'u'];
   let count = 0;
   for (let char of str.toLowerCase()){
     if (vowels.includes(char)){
       count++;
     }
   }
   return count;
 }
 
 console.log(countVowels("Hello World")); // 3
 console.log(countVowels("JavaScript")); // 3
 console.log(countVowels("YouBot is awesome")); // 6
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString("Hello")); 



