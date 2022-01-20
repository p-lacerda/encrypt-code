const inputTexto = document.querySelector('#campo-texto');
const inputResultado = document.querySelector('#textresult');
const divResultado = document.querySelector('#resultdiv');
const decryptButton = document.querySelector('#decryptButton');
const copyButton = document.querySelector('#copy');
const encryptButton = document.querySelector('#encryptButton');
encryptButton.addEventListener('click', clickEncrypt);
decryptButton.addEventListener('click', clickDecrypt);
copyButton.addEventListener('click', clickCopy);

let chars = {
  'a': 'ai',
  'e': 'enter',
  'i': 'imes',
  'o': 'ober',
  'u': 'ufat'
}

let invertedChars = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  }
  
  if (inputResultado.value.length >= 1) {
    if (!divResultado.contains('noMobile')) {
      divResultado.classList.add('hidden');
    }
    inputResultado.classList.remove('hidden');
  }


  function encrypt(phrase) {
    let newPhrase = '';
  
    newPhrase = phrase.replace(/[aeiou]/g, i => (chars)[i]);

    if (!divResultado.classList.contains('noMobile')) {
      divResultado.classList.add('hidden')
    }

    inputResultado.classList.remove('hidden');
  
    return newPhrase;
  }
  
  
  function decrypt(phrase) {
    let newPhrase = '';
  
    newPhrase = phrase.replace(/ai|enter|imes|ober|ufat/g, i => (invertedChars)[i]);
  
    return newPhrase;
  }

  function clickDecrypt () {
    const saveInput = inputTexto.value;
    inputResultado.value = decrypt(saveInput);
    inputTexto.value = '';
  }


  function clickEncrypt () {
    const saveInput = inputTexto.value;
    inputResultado.value = encrypt(saveInput);
    inputTexto.value = '';
  }
  
  function clickCopy () {
    inputResultado.select();
    inputResultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputResultado.value);
  }