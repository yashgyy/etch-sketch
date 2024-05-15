 let temp1 = document.querySelector(".sketching");
temp1.parentElement.removeChild(temp1)

let buttons = document.querySelector("button")
buttons.addEventListener("click",(Event) => {
   let grid_size =  prompt("The Size of the grid that you want to make")
   while (grid_size > 100){
    grid_size = prompt("The Size of the grid that you want to make. Make sure below 100")
   }
   NewGrid(grid_size)
  
    
});


function hovering(Event) {
    let hovering = Event.currentTarget
    console.log("Running")
    hovering.style.setProperty("background-color","black")

}

function factoring(no){

    let temp1 = document.createElement("div");
    temp1.classList.add("sketching");
    document.querySelector(".container").appendChild(temp1);


    let width = 1000
    
    let total_width = width*no

    let width_each = total_width / (no*no)

    console.log(no)

    let height_each = 800/no

for(let i=0;i<(no*no);i++){
        temp2 = document.createElement('div');
        temp2.style.setProperty("display","flex")
        temp2.style.setProperty("flex-direction","row")
        temp2.style.setProperty("height",`${height_each}px`)
        temp2.style.width  = `${width_each}px`
        temp2.style.setProperty("background-color","white")
         temp2.addEventListener("mouseover",hovering);
        temp1.appendChild(temp2)
        console.log("j")
        }
    }


function NewGrid(new_value) {
    let no = Number(new_value)
    let element = document.querySelector(".sketching");
    console.log("PROCESSED")
    element.parentElement.removeChild(element)    
    factoring(no)
}

factoring(16)

