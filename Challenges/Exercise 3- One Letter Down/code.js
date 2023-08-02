//Create a function
                          //passes in a string
                          const moveCharsForward = (str) => 
                          str                              //since we want to modify the contents of a string
                          .split('')                       //lets split it into an array, split returns every character as an array
                          .map(char =>                     //map changes every item of an array; so for every character we are going to pass
                             String.fromCharCode           //this function to convert the array back to a string, and we pass that
                             (char.charCodeAt(0) + 1))     //this gives the character a numerical value and increases it by 1
                          .join('');                       //since we have our string split into an arrays we need to join it back together
                        
                        document.getElementById("result1").innerHTML = moveCharsForward("string");
                        
                        //step 1 (take all the character of the string and turn them into individual entities)
                        const moveCharsForwardStep1 = (str) => str.split('');
                        document.getElementById("step1").innerHTML = moveCharsForwardStep1("string");
                        
                        //step 2 (turn the individual entity characters into numbers)
                        const moveCharsForwardStep2 = (str) => str.split('').map(char => char.charCodeAt(0));
                        document.getElementById("step2").innerHTML = moveCharsForwardStep2("string");
                        
                        //step 3 (increase their numerical value by 1)
                        const moveCharsForwardStep3 = (str) => str.split('').map(char => char.charCodeAt(0) + 1);
                        document.getElementById("step3").innerHTML = moveCharsForwardStep3("string");
                        
                        //step 4 (turn the numerical entities back into letter entities)
                        const moveCharsForwardStep4 = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1));
                        document.getElementById("step4").innerHTML = moveCharsForwardStep4("string");
                        
                        //step 5 (join all the individual character objects back together)
                        const moveCharsForwardStep5 = (str) => str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
                        document.getElementById("step5").innerHTML = moveCharsForwardStep5("string");