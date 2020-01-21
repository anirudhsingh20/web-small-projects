let  userChoice = 0;
let  compChoice = 0;

const userChoice_span = document.getElementById('user')
const compChoice_span = document.getElementById('comp')
const r_select = document.getElementById('r')
const p_select = document.getElementById('p')
const s_select = document.getElementById('s')
const result_div = document.querySelector('.result');
const resultMove =  document.querySelector('.move > h1');
 function convert(letter){
       if (letter === 'r' ) return 'Rock';
       else if (letter === 'p' ) return 'Paper';
       else return 'Scissors';
 }


function win(user,comp){
    userChoice++;
    userChoice_span.innerHTML = userChoice;
    compChoice_span.innerHTML = compChoice;
    const userSubscript = 'user'.fontsize(4).sub();
    const compSubscript = 'comp'.fontsize(4).sub();
    document.getElementById(user).classList.add('green-glow')
    setTimeout(()=>document.getElementById(user).classList.remove('green-glow'),500)
    result_div.innerHTML = ` ${convert(user)} ${userSubscript}    beats  ${convert(comp)} ${compSubscript} !!!`
    resultMove.innerHTML = 'User Wins'
}
function lose(user,comp){
    compChoice++;
    userChoice_span.innerHTML = userChoice;
    compChoice_span.innerHTML = compChoice;
    const userSubscript = 'user'.fontsize(4).sub();
    const compSubscript = 'comp'.fontsize(4).sub();
    document.getElementById(user).classList.add('red-glow')
    setTimeout(()=>document.getElementById(user).classList.remove('red-glow'),500)
    result_div.innerHTML = `${convert(comp)}${compSubscript}   beats    ${convert(user)}${userSubscript} !!!`
    resultMove.innerHTML = 'Computer Wins'


}
function draw(user,comp){
    const userSubscript = 'user'.fontsize(4).sub();
    const compSubscript = 'comp'.fontsize(4).sub();
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(()=>document.getElementById(user).classList.remove('gray-glow'),500)
    result_div.innerHTML = `${convert(comp)}${compSubscript} and  ${convert(user)}${userSubscript} draws!!!`
    resultMove.innerHTML = 'Its a Draw'

   
}

function getCompChoice(){
    const choices = [ 'r','p','s']
    const index = (Math.floor(Math.random()*3));
    return choices[index];
}

function game(u){
    c = getCompChoice();
    
    switch(u + c)
    {
        case 'rs':
        case 'pr':
        case 'sp':
            win(u,c); break;

        case 'sr':
        case 'rp':
        case 'ps':
            lose(u,c); break;

        case 'ss':
        case 'rr':
        case 'pp':
            draw(u,c);
             break;
           
    }
    
     
}

function main()
{
r_select.addEventListener('click',()=>game('r'))
p_select.addEventListener('click',()=>game('p'))
s_select.addEventListener('click',()=>game('s'))

}

main();