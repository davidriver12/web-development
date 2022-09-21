/*
Pig Latin
*/
const resultSpan = document.createElement('span');
const bodyElement = document.getElementsByTagName("BODY")[0];
bodyElement.appendChild(resultSpan);

function igpayAtinlay() {
    const textInput = document.getElementById('num');
    let str = num.value;
    var returnArray = [],
        wordArray = str.split(' ');

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        var beginning = word.charAt(0);

        if (/[aeiouAEIOU]/.test(beginning)) {
            returnArray.push(word += 'way');
            continue;
        }

        for (var ii = 1; ii < word.length; ii++) {
            if (/[aeiouAEIOU]/.test(word.charAt(ii))) {
                break;
            } else {
                beginning += word.charAt(ii);
            }
        }

        returnArray.push(word.substr(beginning.length) + beginning + 'ay');
    }
    resultSpan.textContent = returnArray.join(' ');
    return returnArray.join(' ');
}

//console.log(igpayAtinlay("pizza")); // "izzapay"
//console.log(igpayAtinlay("apple")); // "appleway"
//console.log(igpayAtinlay("happy meal")); // "appyhay ealmay"