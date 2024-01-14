
 function rollDice(){
    
    const numofDice = document.getElementById("#ofdice").value; 
    const diceResult = document.getElementById("result"); 
    const diceimages = document.getElementById("images"); 
    const values = []; 
    const images = []; 

    for(let i =0; i <numofDice; i++){
        const value = Math.floor(Math.random()*6) +1; 
        console.log(value); 
        values.push(value);
        images.push(`<img src="${value}.png">`); 
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');  
}
