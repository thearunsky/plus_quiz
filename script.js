const inputBoxes = document.getElementsByName("selector")

// It is used to create random quetions
function createQustion(){
    const random1 = parseInt(Math.random() * 100)
    const random2 = parseInt(Math.random() * 100)
    const ans = random1 + random2

    console.log("Answer is",ans);
    

    // Writing question on HTML file
    document.getElementById("question").innerHTML = `${random1} + ${random2}`



    // It will suffel options
    function arrangeOptionsRandomly(){
        const suffal = parseInt(Math.random() * 4)
        
        const op1 = ans + 10
        const op2 = ans + 20
        const op3 = ans - 10
        
        const array = [op1, op2, op3]
    
        // Used to suffel array
        array.splice(suffal, 0, ans)
    
        let i = 0
        // Getting choices and updating
        const choices = document.getElementsByClassName("choice")
        for (let index = 0; index < choices.length; index++) {
    
            // Changing UI options-value
            choices[index].innerHTML = array[i]
    
            // Changing inputs options-value
            inputBoxes[i].value = array[i]
            i++
        }
    }
    
    arrangeOptionsRandomly()

    return ans
}




let ans = createQustion();

// Inrease in future
let questionNumber = 1
document.getElementById("questionNumber").innerHTML = questionNumber
let score = 0
document.getElementById("score").innerHTML = score

function next() {

    
    for (let i = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i].checked) {
            
            if(inputBoxes[i].value==ans){

                // Increasing score and question number
                document.getElementById("questionNumber").innerHTML = parseInt(document.getElementById("questionNumber").innerHTML) + 1
                document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) + 10
                
                ans = createQustion()
                
            }else{
                alert("Oww oww, You Loss 10 points")
                // Decresing score
                document.getElementById("score").innerHTML = parseInt(document.getElementById("score").innerHTML) - 10
            }

        }
    }
}