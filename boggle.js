const wordgenerator = document.querySelector('.word');
const letterContent = document.querySelector('.letter');
const inputBox = document.querySelector('input');
const words = [];

  

//console.log(letterContent.innerHTML);

function randomLetter() {
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomNumber = Math.floor(Math.random() * 26);
    const randomLetter = string.charAt(randomNumber);
    //console.log(randomNumber);
    //console.log(randomLetter);
    return randomLetter;
}

function scrambler() {

const randomGrid = `
<nav>
<ul class="pagination pagination-lg justify-content-center mt-4 mb-0">
    <li class="page-item spanwidth text-center">
        <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

</ul>
</nav>


<nav>
<ul class="pagination pagination-lg justify-content-center mb-0">
    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

    <li class="page-item spanwidth text-center">
       <span class="page-link text-dark">${randomLetter()}</span>
    </li>

</ul>
</nav>


<nav>
    <ul class="pagination pagination-lg justify-content-center mb-0">
        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
               <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

    </ul>
</nav>


<nav>
    <ul class="pagination pagination-lg justify-content-center mb-0">
        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
               <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

    </ul>
</nav>


<nav>
    <ul class="pagination pagination-lg justify-content-center mb-0">
        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
               <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

    </ul>
</nav>    


<nav>
    <ul class="pagination pagination-lg justify-content-center mb-0">
        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
               <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

        <li class="page-item spanwidth text-center">
           <span class="page-link text-dark">${randomLetter()}</span>
        </li>

    </ul>
</nav>    `


letterContent.innerHTML = randomGrid;

}

scrambler();

////////////////////////////////////////////////////////////// Selecting the letter and adding it input box (Letter Selection) /////////////////////
const liTag = document.querySelectorAll('li');
Array.from(liTag).forEach(element => {
    //console.log(element);
    element.addEventListener('click', cliclElement => {
        //console.log(element.textContent.trim());
        if(element.textContent.includes("Word")) {
            console.log("Do Noting");
        } else { 
          inputBox.value += element.textContent.trim();
        }
    });
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////// Word list creation (Submit Button)////////////////////////////////////////////
let wordNo = 0;
const wordList = document.querySelector('.wordlist');
const submitButton = document.querySelector('.submitbutton');
submitButton.addEventListener('click', element => {
    if (inputBox.value) {
      wordList.innerHTML += `<li class="word${wordNo}">${inputBox.value}</li>`;
      wordNo += 1;
      words.push(inputBox.value.toLowerCase());
    }
    inputBox.value ="";
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////// Calculate Score//////////////////////////////////////////////
let score = 0;
const badgeCount = document.querySelector('.scorebadge');

const getWord = async (word) => {

    const response = await fetch(`https://montanaflynn-spellcheck.p.rapidapi.com/check/?text=${word}`, {

    "method": "GET",
    "headers": {
		"x-rapidapi-host": "montanaflynn-spellcheck.p.rapidapi.com",
		"x-rapidapi-key": "5f0dea6a7emsh9fc80f35cc1e34dp1c1e82jsn7079126c00ab"
	}
    });
    
    const data = await response.json();
    
    return data;
};


const calculateButton = document.querySelector('.calculatebutton');
calculateButton.addEventListener('click', e => {
    words.forEach((arrayelement,index) => {
        getWord(arrayelement).then(data => {
            if (data.original == data.suggestion.toLowerCase()){
                //console.log("match");
                score += 1;
            } else {
               let addedWord = document.querySelector(`.word${index}`);
               addedWord.innerHTML = `<li><del>${addedWord.textContent}</del><span>&#10060;</span></li>`
            }
            badgeCount.textContent = `Word Score - ${score}`;
        }).catch(err => console.log(err));
        
    });
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////// Prevent use to enter in input box/////////////////////////////////////
inputBox.addEventListener('keyup', e => {
    inputBox.value = "";
});




