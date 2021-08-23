const translateBtn = document.querySelector('#translate-text');
const inputText = document.querySelector('#input-txt');
const outputtext = document.querySelector('#output-txt');


function error(){
    outputtext.innerText = "some error occured try again or wait for some time.."; 
}

 function Translate(){
    
  if(inputText.value){
    const url =`https://api.funtranslations.com/translate/minion.json?text=${inputText.value}`;
    console.log(url);
    fetch(url)
    .then(data => data.json())
    .then((data) => {
        console.log(data.contents.translated)  
         outputtext.innerHTML = data.contents.translated
    }).catch(error)

  }else{
      alert('Please Enter Text')
  }
    
}

translateBtn.addEventListener('click', Translate)