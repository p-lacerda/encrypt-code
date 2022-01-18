const inputTexto = document.querySelector('#campo-texto');
const inputResultado = document.querySelector('#result');
const decryptButton = document.querySelector('#decryptButton');
const encryptButton = document.querySelector('#encryptButton');
encryptButton.addEventListener('click', clickEncrypt);
decryptButton.addEventListener('click', clickDecrypt);

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
  
  function encrypt(phrase) {
    let newPhrase = '';
  
    newPhrase = phrase.replace(/[aeiou]/g, i => (chars)[i]);
  
    return newPhrase;
  }
  
  
  function decrypt(phrase) {
    let newPhrase = '';
  
    newPhrase = phrase.replace(/ai|enter|imes|ober|ufat/g, i => (invertedChars)[i]);
  
    return newPhrase;
  }

  function clickDecrypt () {
    inputResultado.value = decrypt(inputTexto.value);
  }


  function clickEncrypt () {
    inputResultado.value = encrypt(inputTexto.value);
  }
  