const textArea = document.getElementById('myTextarea');
// Buttons
const clearBtn = document.querySelector('.btn__clear');
const capitalizeBtn = document.querySelector('.btn__capitalize');
const sortBtn = document.querySelector('.btn__sort');
const reverseBtn = document.querySelector('.btn__reverse');
const stripBlankBtn = document.querySelector('.btn__strip_blank');
const addNumbersBtn = document.querySelector('.btn__add_numbers');
const shuffleBtn = document.querySelector('.btn__shuffle');

// Event Handlers
const clearBtnHandler = () => {
  textArea.value = '';
};

const capitalizeBtnHandler = () => {
  textArea.value = textArea.value.toUpperCase();
};

const sortBtnHandler = () => {
  const textAreaContent = textArea.value.trim();
  // split the string into an array, sort it, then join it back together
  textArea.value = textAreaContent.split('\n').sort().join('\n');
};

const reverseBtnHandler = () => {
  const textLines = textArea.value.trim().split('\n');
  let reversedlines = '';

  // forEach function will run a function on each lines
  textLines.forEach((textLine) => {
    //  at first .split() method converts a line string to array of each characters 
    // then I sorted characters alphabetically then join all alphabet into a string. 
    // Atlast add \n new line so that next reversed line will start from another line
    reversedlines += textLine.split('').reverse().join('') + '\n';
  });

  textArea.value = reversedlines;
};

const stripBlankBtnHandler = () => {
    const textLines = textArea.value.split('\n');
    let strippedLines = '';
    console.log(textLines)
    textLines.forEach((textLine) => {
        if (textLine=== "") {
            return
        } 

        strippedLines += textLine.trim() + '\n';
    })

    textArea.value = strippedLines;
}

const addNumbersBtnHandler = () => {
    const textLines = textArea.value.trim().split('\n');
    let numberAddedLines = '';

    textLines.forEach((textLine, index) => {
        numberAddedLines += `${index+1})` + textLine + '\n';
    })

    textArea.value = numberAddedLines;
}


const shuffleBtnHandler = () => {
    const textLines = textArea.value.trim().split('\n');
    textArea.value = textLines.sort(() => Math.random() - 0.5).join('\n')    
}


//Button event listener
clearBtn.addEventListener('click', clearBtnHandler);
capitalizeBtn.addEventListener('click', capitalizeBtnHandler);
sortBtn.addEventListener('click', sortBtnHandler);
reverseBtn.addEventListener('click', reverseBtnHandler);
stripBlankBtn.addEventListener('click', stripBlankBtnHandler);
addNumbersBtn.addEventListener('click', addNumbersBtnHandler);
shuffleBtn.addEventListener('click', shuffleBtnHandler);
