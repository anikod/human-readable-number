module.exports = function toReadable (number) {
  let blackjack = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
        
  let dozens = ['zero','zero', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  let result = '';

  let tempHundreds, tempDozens;

  if (number > 99) {
    console.log('HUNDREDS block here----------');
    tempHundreds = Math.floor(number/100);
    console.log('number: ', number);

    console.log('hundreds: ', tempHundreds);
    result += blackjack[tempHundreds] + ' hundred';
    console.log('Now result is: ', result);
  }

  number -= (Math.floor(number/100))*100;
  console.log('Now number is: ', number);

  if (number >= 20) {
    console.log('DOZENS >20 block here----------');
    tempDozens = Math.floor(number/10);
    console.log('number: ', tempDozens);
    if (tempDozens > 0) {
      result += (tempHundreds) ? ' ' + dozens[tempDozens] : dozens[tempDozens];
    }

    number -= (Math.floor(number/10))*10;
    console.log('Now number is: ', number);
    if (number > 0) {
      result += ' ' + blackjack[number];
    }
    return result;
  }

  if (number < 20) {
    console.log('BLACKJACK block here----------');
    if (number > 0) {
      console.log('20 Now number is: ', number);
      console.log('Now result is: ', result);
      console.log('blackjack number: ', blackjack[number]);
      result += (tempHundreds || tempDozens) ? ' ' + blackjack[number] : blackjack[number];

      console.log('Now result is: ', result);
      return result;
    }
  }
  console.log('Now result is: ', result);
  if (tempHundreds || tempDozens) { return result; }
  return 'zero';

// isn't it too much debugging comments? It's time to use more powerful IDE, I suppose (:


  console.log('----------');
  
}
