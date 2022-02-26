var b1 = document.querySelector('.b1');
var b2 = document.querySelector('.b2');
var b3 = document.querySelector('.b3');
var b4 = document.querySelector('.b4');
var b5 = document.querySelector('.b5');
var b6 = document.querySelector('.b6');
var b7 = document.querySelector('.b7');
var b8 = document.querySelector('.b8');
var b9 = document.querySelector('.b9');
var res = document.querySelector('.res-btn');
var p1 = document.querySelector('.player1');
var p2 = document.querySelector('.player2');
var play = document.querySelector('.play-again');
let a = 9;

p1.textContent = "Player 1's Turn";

{

b1.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b1.textContent = "X";
    }
    else{
        b1.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b1.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
    
})

b2.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b2.textContent = "X";
    }
    else{
        b2.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b2.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b3.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b3.textContent = "X";
    }
    else{
        b3.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }
   
    b3.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b4.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b4.textContent = "X";
    }
    else{
        b4.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b4.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b5.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b5.textContent = "X";
    }
    else{
        b5.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b5.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b6.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b6.textContent = "X";
    }
    else{
        b6.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b6.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b7.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b7.textContent = "X";
    }
    else{
        b7.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b7.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b8.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b8.textContent = "X";
    }
    else{
        b8.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    
    b8.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

b9.addEventListener("click", () =>{
    if (p1.classList.length == 2){
        b9.textContent = "X";
    }
    else{
        b9.textContent = "O";
    }

    if(p1.textContent == "Player 1's Turn"){
        p2.textContent = "Player 2's Turn";
        p1.textContent = "Player 1";
    }
    else{
        p1.textContent = "Player 1's Turn";
        p2.textContent = "Player 2";
    }

    b9.disabled = true;
    checkres();
    p2.classList.toggle('active');
    p1.classList.toggle('active');
})

res.addEventListener("click", reset);

play.addEventListener("click", playagain);

}

function checkres(){
    if(b1.textContent == 'X' && b2.textContent == 'X' && b3.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b1.textContent == 'X' && b4.textContent == 'X' && b7.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b1.textContent == 'X' && b5.textContent == 'X' && b9.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b4.textContent == 'X' && b5.textContent == 'X' && b6.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b7.textContent == 'X' && b8.textContent == 'X' && b9.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }
    else if(b2.textContent == 'X' && b5.textContent == 'X' && b8.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b3.textContent == 'X' && b5.textContent == 'X' && b7.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b3.textContent == 'X' && b6.textContent == 'X' && b9.textContent == 'X'){
        document.querySelector('.res').textContent = "Player 1 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b1.textContent == 'O' && b2.textContent == 'O' && b3.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b1.textContent == 'O' && b4.textContent == 'O' && b7.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b1.textContent == 'O' && b5.textContent == 'O' && b9.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b4.textContent == 'O' && b5.textContent == 'O' && b6.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b7.textContent == 'O' && b8.textContent == 'O' && b9.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
    }

    else if(b2.textContent == 'O' && b5.textContent == 'O' && b8.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b3.textContent == 'O' && b5.textContent == 'O' && b7.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b3.textContent == 'O' && b6.textContent == 'O' && b9.textContent == 'O'){
        document.querySelector('.res').textContent = "Player 2 Won!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }

    else if(b1.disabled == true && b2.disabled == true && b3.disabled == true && b4.disabled == true && b5.disabled == true && b6.disabled == true && b7.disabled == true && b8.disabled == true && b9.disabled == true){
        document.querySelector('.res').textContent = "Match Draw!!!" ;
        document.querySelector('.p1').style.display = "none";
        document.querySelector('.p2').style.display = "none";
        document.querySelector('.result').style.display = "flex";
        res.style.display = "none";
    }
}










function reset(){
    b1.textContent = "";
    b2.textContent = "";
    b3.textContent = "";
    b4.textContent = "";
    b5.textContent = "";
    b6.textContent = "";
    b7.textContent = "";
    b8.textContent = "";
    b9.textContent = "";
    p1.textContent = "Player 1's Turn";
    p2.textContent = "Player 2";
    if(p1.classList.length == 1){
        p1.classList.add('active');
        p2.classList.remove('active');
    }
    b1.disabled = false;
    b2.disabled = false;
    b3.disabled = false;
    b4.disabled = false;
    b5.disabled = false;
    b6.disabled = false;
    b7.disabled = false;
    b8.disabled = false;
    b9.disabled = false;
     
}

function playagain(){
    reset();
    document.querySelector('.p1').style.display = "block";
    document.querySelector('.p2').style.display = "block";
    document.querySelector('.result').style.display = "none";
    res.style.display = "block";
}