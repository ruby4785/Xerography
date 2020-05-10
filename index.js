console.log("Dont see all this!!!");
let name=prompt("Enter your name");

document.getElementById("nam").innerHTML="Welcome"+" "+name;

let subject={
    First:['Physics Cycle','Chemistry Cycle'],
    Second:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
    Third:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
    Fourth:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
    Fifth:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
    Sixth:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
    Seventh:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
    Eighth:['Civil','Mechanical','Computer Science','Information Science','Electronics'],
}
var main=document.getElementById('main_menu');
var sub=document.getElementById('sub_menu');

main.addEventListener('change',function(){

    var selected_option = subject[this.value];

    while(sub.options.length > 0)
    {
        sub.options.remove(0);
    }


Array.from(selected_option).forEach(function(el){

    let option  = new Option(el, el);

    //append the child option in sub menu

    sub.appendChild(option);

});

});