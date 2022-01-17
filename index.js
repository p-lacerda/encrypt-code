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
  
  console.log(decrypt("pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!"));
  