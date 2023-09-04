
import{
 container,inputElement,buttonGenerateRandom ,buttonCalculateArray,buttonClear
}from "./src/importer.js"
import {Box} from "./src/functions.js"
import {generateRandomNumber,clearInputAndPresentation,findPrimes} from "./src/events.js"

// const el=Box({element:"div",attr:{id:"mytext",className:"text-green-700 mt-5"},children:"Random Number:"})
// container?.appendChild(el);
// const el1=Box({element:"input",attr:{id:"myInp",className:"border border-gray-300 bg-slate-100 rounded p-2 w-80", type: 'text',  placeholder: '5-digit number'} })
// container?.appendChild(el1);
// const el2=Box({element:"div",attr:{className:"flex justify-center p-2 w-80"},children:[Box({element:"button",attr:{  id: 'generateButton',
// className: 'bg-blue-500 border border-gray-300 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2 '},children:"Generate" }),
// Box({element:"button",attr:{  id: 'calculateButton',
// className: 'bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2'},children:"Calculate" }),
// Box({element:"button",attr:{  id: 'clearButton',
// className: 'bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2'},children:"Clear" })]})
// container?.appendChild(el2);

document.addEventListener('DOMContentLoaded', function () {

    buttonGenerateRandom!.addEventListener('click', generateRandomNumber);
    buttonCalculateArray!.addEventListener('click', findPrimes);
    buttonClear!.addEventListener('click', clearInputAndPresentation);

    inputElement!.addEventListener('input', () => {
      const inputValue = inputElement!.value;
      if (inputValue !== '' && !/^\d+$/.test(inputValue) || inputValue.length > 5) {
        console.log("Invalid input. Please enter a 5-digit number.")
      }
    });
  });

