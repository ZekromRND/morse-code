        const s1= document.querySelector('.one-one');
        const s2= document.querySelector('.one-two');
        const s3= document.querySelector('.one-three');
        const s4= document.querySelector('.one-four');
        const s5= document.querySelector('.one-five');
        const s6= document.querySelector('.two-one');
        const s7= document.querySelector('.two-two');
        const s8= document.querySelector('.two-three');
        const s9= document.querySelector('.two-four');
        const s10= document.querySelector('.two-five');
        const input= document.querySelector('.input-bar');
        const button= document.querySelector('.input-send');
        const output= document.querySelector('.output');

    const wait = (msec) => new Promise((resolve) => {
        setTimeout(resolve, msec);
    })
     
    async function glow(element) {
        element.classList.add('appear');
        await wait(1000);
        element.classList.remove('appear');
    }

    const indexes= {
        'A': [s6,s2], 
        'B': [s1,s7,s8],
        'C': [s7,s8,s9],
        'D': [s1,s7,s8],
        'E': [s1,s7,s8],
        'F': [s1,s7,s8],
        'G': [s1,s7,s8],
        'H': [s6,s7,s8,s9],
        'I': [s6,s7],
        'J': [s1,s7,s8],
        'K': [s1,s7,s8],
        'L': [s1,s7,s8],
        'M': [s1,s7,s8],
        'N': [s1,s7],
        'O': [s1,s2,s3],
        'P': [s1,s2,,s3,s9],
        'Q': [s1,s7,s8],
        'R': [s6,s2,s8],
        'S': [s1,s7,s8],
        'T': [s1],
        'U': [s6,s7,s3],
        'V': [s1,s7,s8],
        'W': [s1,s7,s8],
        'X': [s1,s7,s8],
        'Y': [s1,s7,s8],
        'Z': [s1,s7,s8],
        ' ': []
      }

    const dot_hyphen= {
      "A": ".-/",
      "B": "-.../",
      "C": "-.-./",
      "D": "-../",
      "E": "./",
      "F": "..-./",
      "G": "--./",
      "H": "..../",
      "I": "../",
      "J": ".---/",
      "K": "-.-/",
      "L": ".-../",
      "M": "--/",
      "N": "-./",
      "O": "---/",
      "P": ".--./",
      "Q": "--.-/",
      "R": ".-./",
      "S": ".../",
      "T": "-/",
      "U": "..-/",
      "V": "...-/",
      "W": ".--/",
      "X": "-..-/",
      "Y": "-.--/",
      "Z": "--../",
      "0": "-----/",
      "1": ".----/",
      "2": "..---/",
      "3": "...--/",
      "4": "....-/",
      "5": "...../",
      "6": "-..../",
      "7": "--.../",
      "8": "---../",
      "9": "----./",
      ".": ".-.-.-/",
      ",": "--..--/",
      "?": "..--../",
      "'": ".----./",
      "!": "-.-.--/",
      "/": "-..-./",
      "(": "-.--./",
      ")": "-.--.-/",
      "&": ".-.../",
      ":": "---.../",
      ";": "-.-.-./",
      "=": "-...-/",
      "+": ".-.-./",
      "-": "-....-/",
      "_": "..--.-/",
      '"': ".-..-./",
      "$": "...-..-/",
      "@": ".--.-./",
      " ": " "
    };
          
    // Function to print block by block
      // async function playAnimations() {
      //   for(let i=0; i<word.length; i++) {
      //       for(let j = 0; j < indexes[word[i]].length; j++) {
      //           await glow(indexes[word[i]][j]);
      //       }

      //       await wait(500);
      //       }
      //   }
      
    // Function to print by entire letters block 
      async function playAnimations(input_text) {
        for(let letter of input_text) {
            indexes[letter].forEach(async (element) => {
                await glow(element);
            });
            output.textContent+=dot_hyphen[letter]
          await wait(1000);
        }
      }

// playAnimations()

let val, input_text

input.addEventListener("input", function(e){
  val=e.target.value
})

button.addEventListener("click", function(){
  output.innerHTML=" "
  input_text=val.split('')
  let i=0
input_text.forEach(() => {
  input_text[i]=input_text[i].toUpperCase()
  i++
})
  playAnimations(input_text)
})












