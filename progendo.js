console.log('prognosis endodonti')

let result = [
                [0,0,0,0,0,0],
                [0,0,0,0,0],
                [0,0]
            ]

function prognosa(param1, param2, param3) {
    result[param1][param2] = param3
    prog()
}



function prog(){
    let preoperatif = 0
    let intraoperatif = 0
    let postoperatif = 0
    let total = 0
    for(a = 0; a < result[0].length; a++){
        if (result[0][a] == 0 ){

        }else{
            preoperatif += 1
            total += (result[0][a] / (preoperatif * 4)) * 40
        }
    }
    for(b = 0; b < result[1].length; b++){
        if (result[1][b] == 0 ){

        }else{
            intraoperatif += 1
            total += (result[1][b] / (intraoperatif * 4)) * 40
        }
    }
    for(c = 0; c < result[2].length; c++){
         if (result[2][c] == 0 ){

        }else{
            postoperatif += 1
            total += (result[2][c] / (postoperatif * 4)) * 20
        }
    }
    console.log(total)
    if (total >= 85){
        document.getElementById("prognosis").innerHTML = "Sangat Baik"
    }else if(total <= 84 && total >= 70){
        document.getElementById("prognosis").innerHTML = "Baik"
    }else if(total <= 69 && total >= 55){
        document.getElementById("prognosis").innerHTML = "Baik"
    }else if(total <= 54 && total >= 40){
        document.getElementById("prognosis").innerHTML = "Buruk"
    }else if(total <= 40 && total > 0){
        document.getElementById("prognosis").innerHTML = "Sangat Buruk"
    }else{
        document.getElementById("prognosis").innerHTML = ""
    }
}

document.getElementById('refresh').addEventListener("click", function (e) {
    document.getElementById("prognosis").innerHTML = ""
    var inputelement = document.getElementsByTagName("input")
    for(a = 0; a < inputelement.length; a++){
       inputelement[a].checked = false
    }
    result = [
                [0,0,0,0,0,0],
                [0,0,0,0,0],
                [0,0]
            ]
    total = 0
})