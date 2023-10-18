/* Getting numbers to show up,
    getting those numbers to display total in window, maybe even be animated when clicked on */

    const totalPreview = document.getElementById('total');
    const numberButtons = document.getElementsByClassName('number');
    const allOperations = document.querySelectorAll('.operator, #equal');
   
    const equalSign = document.querySelector('#equal');
    
    let numArray = ["1","2","3","4","5","6","7","8","9","0"]
    
    

   for (let button of numberButtons) {
        button.addEventListener('click', (e) => {
                    totalPreview.innerText += e.target.innerText})
        };  

// Giving numbers actual value , come back to this, may not need
    
for (let buttons of numberButtons) {
      buttons.addEventListener('click', () => {
        if(buttons.innerText + "numArray") {
        }
      }); 
    }

// Getting my clear button to work, also a base
        
    let allClear = document.getElementById('clear')
         allClear.addEventListener('click', (e) => {
            totalPreview.innerText = ""
         })
 
 
// Getting operators to show on display, base function for getting numbers to show on display */  

         for (let button of allOperations) {
            button.addEventListener('click', (e) => {
                totalPreview.innerText += e.target.innerText;
            })
         }

         
// Getting operators to work, actually computing 
        
         for (let operators of allOperations) {
          operators.addEventListener('click', () => {
            if(operators.innerText === "=") {
              console.log(eval(3+3))
              
            }
            if(operators.innerText === '+') {
              eval()
              
            }
            if(operators.innerText === "-") {
            }
            if(operators.innerText === "x") {
              
            }
            if(operators.innerText === "÷") {
              
            }
          }); console.log(operators)
         }


       
    

    
    //INSPIRATION :)
    
    
    //    numberButtons.forEach(element => {
      //  element.addEventListener('click', (b) => {
        //    if(b.target.innerText == '='){
          //      string = String(eval(string))
            //    totalPreview.value = string;
           // } //else{
             //   string += b.target.innerText
               // totalPreview.vale = string
           // }
     //   })
    //}); 

    // Below: used to compute the equal sign but added equal to allOperations variable a.k.a. dont need it
    //          equalSign.addEventListener('click', (e) => {
      //  totalPreview.innerText += e.target.innerText;
    //})//                      ^^ if you remove the "+" it will erase everything and place the equal, 
    

      

        // let displayBox = document.querySelector('.display')
         //equalSign.addEventListener('click', (e) => {
           // totalPreview.innerText = e.target.innerText;
         //})
       //  function equal() {
          //  let result = eval;
            //if (true) {
              //  let a = numberButtons;
                //var b = numberButtons;
                //console.log(a + b);
            //}
       // } 
    

        