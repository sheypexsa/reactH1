// 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"
function getTrueNumber(number) {
    if (typeof number === 'number' && number < 0) {
        return "უარყოფითია"
    }
    else if (typeof number === 'number' && number > 0 ) {
        return "დადებითია"
    }
    else {
        return "მიუთითეთ ციფრი"
    }
}
console.log(getTrueNumber(2))
// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე
function sumOfDigitsInRange(start, end) {
    let sum = 0;

    for (let x = start; x <= end; x++) {
        let number = x;
        while (number > 0) {
            sum += number % 10; 
            number = Math.floor(number / 10); 
        }
    }

    return sum;
}

const result = sumOfDigitsInRange(1, 100);
console.log(result); 

// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი
function detectNumber(number) {
    if (typeof number === 'number' && number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(detectNumber(3))
console.log(detectNumber(4));
console.log(detectNumber("sityva"))

// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი
const car = {
    model: "passat",
    year: 2017,
}
function howOldIsCar(car) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    if (car.hasOwnProperty('year')) {
        return currentYear - car.year;
    } else {
        return "უნდა ქონდეს მითითებული წელი";
    }
}

console.log(howOldIsCar(car));
// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი
const numbersArray = [1,4,88,99, 123];
function findLargestDigit(array) {
    if (!Array.isArray(array) || array.length === 0) {
      return undefined;
    }
  
    return array.find((element, index, arr) => element === Math.max(...arr));
  }
  
  console.log(findLargestDigit(numbersArray));

// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი
function findSmallestDigit(array) {
    if (!Array.isArray(array) || array.length === 0) {
      return undefined;
    }
  
    return array.find((element, index, arr) => element === Math.min(...arr));
  }
  
  console.log(findSmallestDigit(numbersArray));
// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე"
function reverseWord(string) {
    if (typeof string !== 'string' || string.length <= 1) {
      return string;
    }
  
    return string.split('').reverse().join('');
  }
  
  const reversedWord = reverseWord("შემწვარი კარტოფილი");
  console.log(reversedWord);