
import { BoxProps } from "./types";
import{inputElement}from "./importer.js"
   const calculatedValues: number[] = [];
   export function generateRandomNumber() {
     const randomNumber = Math.floor(10000 + Math.random() * 90000);
     inputElement!.value = randomNumber.toString();
     return inputElement!.value;
     
   }
   
   export function clearInputAndPresentation() {
     inputElement!.value = '';
     calculatedValues.length = 0; 
     console.clear(); 
   }

   export function findPrimes() {
    const primes = [];
    if (inputElement!.value){
        for (let number = 2; number <= parseInt(inputElement!.value); number++) {
            let isPrime = true;
            for (let divisor = 2; divisor < number; divisor++) {
              if (number % divisor === 0) {
                isPrime = false;
                break;
              }
            }
            if (isPrime) {
              primes.push(number);
            }
          }
          console.log( `Prime numbers from 2 to ${parseInt(inputElement!.value)} are :\n`,primes);  
    }
    else {
        console.log("Nothing to calculate")
    }

    
  }
  