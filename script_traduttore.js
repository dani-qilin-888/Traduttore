const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');
const resetButton = document.querySelector('.reset-button');

function reset() {
    textInput.value = '';
    translationText.innerText = 'Traduzione';
    translationFlag.innerHTML = '';
  }

async function translate(text, lang, flag) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText;
    console.log(result);
    translationText.innerText  = result;
    translationFlag.innerHTML = flag;
}

langButtons.forEach(function(langButton){
    langButton.addEventListener('click', function(){
        const text = textInput.value.trim();
        const lang = langButton.dataset.lang;
        const flag = langButton.innerHTML;
        translate(text, lang, flag);
        if(text.length > 0) {
            translate(text, lang, flag);
        }
    });
});

resetButton.addEventListener('click', reset);