let button=document.querySelectorAll('td button')
let box=document.getElementById("input").value;

let clickbtn=document.getElementById("btn")

let result=document.getElementById("ptag")

for(let butt of button){
    butt.addEventListener("click",(e)=>{
        let buttontxt=e.target.innerHTML

        let display=document.getElementById("input");
        let disp=display.value+=buttontxt
        
        clickbtn.addEventListener('click',()=>{
            let f= eval(disp);
            result.innerHTML=f;
            display.value=''  
        })

    })
}








