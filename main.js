/* Getting numbers to show up,
    getting those numbers to display total in window, maybe even be animated when clicked on */

    let totalPreview = document.getElementById('total');
    let numberButtons = document.getElementsByClassName('number');
    

   for (let button of numberButtons) {
        button.addEventListener('click', (e) => {
                    totalPreview.innerText += e.target.innerText})
        };  

// Getting my clear button to work
        
    let allClear = document.getElementById('clear')
         allClear.addEventListener('click', (e) => {
            totalPreview.innerText = ""
         })
    
    
    
    

