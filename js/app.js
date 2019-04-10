console.log("assessment")

let userInput = ""
let firstVal = 0;

const addNumber = (num, num1) => {
  return num + num1;
}

const subNumber = (num, num1) => {
  return num - num1;
}

$('form').on('click', (e) => {
  e.preventDefault()
  userInput = parseInt($('#inNum').val());
  if(e.target.id === 'add-btn'){
    firstVal = addNumber(firstVal,userInput)
    $('p').text(firstVal)
    if(firstVal >= 0){
     $('p').css('color', "black")
    }
  }
  else if(e.target.id === 'sub-btn'){
    firstVal = subNumber(firstVal,userInput)
    $('p').text(firstVal)
    if(firstVal < 0){
     $('p').css('color', "red")
    }
  }
})
