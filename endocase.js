let low = 0
let moderate = 0
let high = 0
result = [
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [[0],[0],[0,0]],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0],
            [[0],[0,0,0,0,0],[0,0]],
            [[0],[0,0],[0,0,0,0,0,0,0,0]],
            [0,0,0],
            [[0],[0,0],[0,0]],
            [0,0,0],
            [[0],[0],[0,0,0]],
            [[0,0],[0,0], [0,0,0,0,0]],
            [[0],[0], [0,0]],
            [[0],[0],[0,0,0]]
        ]

function tampilhasil(param1, param2, param3){
    document.getElementById("keterangan").classList.remove("hidden")
    document.getElementById("kecil").classList.add("hidden")
    document.getElementById("sedang").classList.add("hidden")
    document.getElementById("besar").classList.add("hidden")

    document.getElementById("low").innerHTML = param1
    document.getElementById("moderate").innerHTML = param2 * 2
    document.getElementById("high").innerHTML = param3 * 5
    document.getElementById("total").innerHTML = param1 + (param2*2) + (param3*5)
    total = param1 + (param2*2) + (param3*5)
    if(total > 23){
        document.getElementById("besar").classList.toggle("hidden")
    }else if(total >= 22 && total <= 23){
        document.getElementById("sedang").classList.toggle("hidden")
    }else if(total < 22 && total > 0){
        document.getElementById("kecil").classList.toggle("hidden")
    }else{
        document.getElementById("keterangan").classList.add("hidden")
    }
}

function hasil(){
    low = 0
    moderate = 0
    high = 0
    for(a = 0; a < result.length; a++){
        if (typeof result[a][0] == 'number'){
            low = low + result[a][0]
            moderate = moderate + result[a][1]
            high = high + result[a][2]
            
        }else{
            for(b = 0; b < result[a][0].length; b++){
                low = low + result[a][0][b]
            }
            for(c = 0; c < result[a][1].length; c++){
                moderate = moderate + result[a][1][c]
            }
            for(d = 0; d < result[a][2].length; d++){
                high = high + result[a][2][d]
            }
        }
    }
    tampilhasil(low,moderate,high)
}

function radioinput(param1,param2,param3,param4) {
    result[param1-1] = [param2,param3,param4]
    hasil()
}

function checkboxinput(param1,param2,param3,param4) {
    if(document.getElementById(param4).checked == true){
        result[param1-1][param2-1][param3-1] = 1 
    }else{
        result[param1-1][param2-1][param3-1] = 0
    }
    hasil()
}

document.getElementById('refresh').addEventListener("click", function (e) {
    var inputelement = document.getElementsByTagName("input")
    for(a = 0; a < inputelement.length; a++){
       inputelement[a].checked = false
    }
    result = [
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [[0],[0],[0,0]],
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [0,0,0],
                [[0],[0,0,0,0,0],[0,0]],
                [[0],[0,0],[0,0,0,0,0,0,0,0]],
                [0,0,0],
                [[0],[0,0],[0,0]],
                [0,0,0],
                [[0],[0],[0,0,0]],
                [[0,0],[0,0], [0,0,0,0,0]],
                [[0],[0], [0,0]],
                [[0],[0],[0,0,0]]
            ]
    hasil()
})
