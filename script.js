var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
"v", "w", "x", "y", "z"];
var letraAcento = [ " ã " , " á " , " à " , " â " , " é " , " è " , " ê " , " í " , " î " , " ì " , " ó " , " ô " , "ò " , 
"Õ " , " ú " , " ù " , " û " , " ç " ];
var letraSemAcento = [ " a " , " a " , " a " , " a " , " e " , " e " , " e " , " i " , " i " , " i " , " o " , " o " , 
"o " ," O " , " u " , " u " , " u " , " c " ];


function cipher() {
	var palavra = (document.getElementById('exampleFormControlTextarea1').value);
	var chave = parseInt(document.getElementById('inputGroupSelect01').value);
	console.log(`chave ${chave}`);
	
	var result = '';

	for (let i = 0; i < palavra.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (palavra[i] == alphabet[j]) {
				if (j + chave < 27) {
					result += alphabet[(j + chave)]
				}			
				else{
					result += alphabet[j];
				}
			}
			
		}

		document.getElementById('return-cipher').value = result;
		
		
	}
	
}

function decipher() {
	var palavra = (document.getElementById('exampleFormControlTextarea1').value);
	var chave = parseInt(document.getElementById('inputGroupSelect01').value);
	console.log(`chave ${chave}`);
	
	var result = '';

	for (let i = 0; i < palavra.length; i++) {
		for (let j = 0; j < alphabet.length; j++) {
			if (palavra[i] == alphabet[j]) {
				if (j - chave < 27) {
					result += alphabet[(j - chave)]
				}			
				else{
					result += alphabet[j];
				}
			}
			
		}

		document.getElementById('return-decipher').value = result;
		
		
	}
}
