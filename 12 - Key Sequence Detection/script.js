const keyLogger = (function(){
    const konamiKeyCode = [38,38,40,40,37,39,37,39,66,65];

    return {
        keySequence: [],

        cornify: function(){
            cornify_add();
        },
        
        isKonami: function(keySequence){
            for(let i in keySequence){
                if(keySequence[i] !== konamiKeyCode[i]){
                    return false;
                }
            }
            cornify_add();
            return;
        },

        logToKeySequence: function(keyCode){
            const { keySequence, isKonami } = this;
            keySequence.push(keyCode);
            if(keySequence.length >= konamiKeyCode.length){
                isKonami(keySequence.slice(keySequence.length-konamiKeyCode.length, keySequence.length));
            }
            return;
        },

        keyUpHandler: function(e){
            return this.logToKeySequence(e.keyCode);
        },

        listen: function(){
            window.addEventListener('keyup', (e)=>{this.keyUpHandler(e)});
        },


        displayCode: function(){
            console.log(konamiKeyCode);
        }
    }
})();


keyLogger.listen();