        let flag=0,i=0,word,s=""
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
        const play=document.querySelector('.playground');    
        const play2=document.querySelector('.play-wrapper');      
        const con= document.querySelector('.btn');
        const output= document.querySelector('.output');
        const output2= document.querySelector('.output2');

        const dot_hyphen = {
            'A': ".-",
            'B': "-...",
            'C': "-.-.",
            'D': "-..",
            'E': ".",
            'F': "..-.",
            'G': "--.",
            'H': "....",
            'I': "..",
            'J': ".---",
            'K': "-.-",
            'L': ".-..",
            'M': "--",
            'N': "-.",
            'O': "---",
            'P': ".--.",
            'Q': "--.-",
            'R': ".-.",
            'S': "...",
            'T': "-",
            'U': "..-",
            'V': "...-",
            'W': ".--",
            'X': "-..-",
            'Y': "-.--",
            'Z': "--..",
            '0': "-----",
            '1': ".----",
            '2': "..---",
            '3': "...--",
            '4': "....-",
            '5': ".....",
            '6': "-....",
            '7': "--...",
            '8': "---..",
            '9': "----.",
            '.': ".-.-.-",
            ',': "--..--",
            '?': "..--..",
            '\'': ".----.",
            '!': "-.-.--",
            '/': "-..-.",
            '(': "-.--.",
            ')': "-.--.-",
            '&': ".-...",
            ':': "---...",
            ';': "-.-.-.",
            '=': "-...-",
            '+': ".-.-.",
            '-': "-....-",
            '_': "..--.-",
            '"': ".-..-.",
            '$': "...-..-",
            '@': ".--.-."
        };

        async function glow(element) {
            element.classList.add('appear');
            await wait(1000);
            element.classList.remove('appear');
        }

        function select(event) {
            if(event.target.classList.contains('one-one'))
                return s1;
            
            if(event.target.classList.contains('one-two'))
                return s2;

            if(event.target.classList.contains('one-three'))
                return s3;

            if(event.target.classList.contains('one-four'))
                return s4;

            if(event.target.classList.contains('one-five'))
                return s5;
            
            if(event.target.classList.contains('two-one'))
                return s6;
            
            if(event.target.classList.contains('two-two'))
                return s7;

            if(event.target.classList.contains('two-three'))
                return s8;

            if(event.target.classList.contains('two-four'))
                return s9;

            if(event.target.classList.contains('two-five'))
                return s10;

                
        }

        play.addEventListener('click',function(event){

            if(event.target && event.target.nodeName==='IMG'){
                
                if(event.target.id==='top'){
                    let r=select(event);
                    if (r !== undefined){ 
                    r.style.opacity=1;
                    }
                    output.textContent+="-";
                    flag=0;
                }
                
                if(event.target.id==='btm'){
                    let r=select(event);
                    if (r !== undefined) {
                    r.style.opacity=1;
                    }
                    output.textContent+=".";
                    flag=0;
                }
                
                if(event.target.id==='char'){
                    play2.classList.add('appear')
                    output.textContent+=" ";
                    flag++;
                }

                if(flag===2){
                    output.textContent+="/ ";
                    flag=0;
                }
            }
        })

            con.addEventListener('click',function(){
                word=convert(output.textContent)
                while(i<word.length){
                    if(word[i]===" "){
                        output2.textContent+=morsetoString(s)
                        s=""
                        i++
                        
                    }

                    if(word[i]==="/"){
                        i+=2
                    }

                    s+=word[i]
                    i++

                }
            })


        function convert(text) {
            let r=text.split('')
            return r;
        }

        function morsetoString(s){
            for(let [key,value] of Object.entries(dot_hyphen)){
                if(s===value)
                {
                    console.log(key)
                    return key
                }
            }
            return "no";
        }