console.log('restoration')

let result = [
                [0,0,0],
                [0,0,0],
                [0,0,0]
            ]
let marginalridge = [0,0,0,0]

function caries(param1, param2, param3) {
    if (result[param1][param2] == 0 ){
        result[param1][param2] = 1 
    }else{
        result[param1][param2] = 0 
    }
    document.getElementById(param3).classList.toggle('bg-gray-600')
    ridgelost()
}

function ridgelost(){
    if((result[0][0] + result[0][1] + result[0][2])>1){
        marginalridge[0] = 1
    }else{
        marginalridge[0] = 0
    }
    if((result[0][2] + result[1][2] + result[2][2])>1){
        marginalridge[1] = 1
    }else{
        marginalridge[1] = 0
    }
    if((result[2][0] + result[2][1] + result[2][2])>1){
        marginalridge[2] = 1
    }else{
        marginalridge[2] = 0
    }
    if((result[0][0] + result[1][0] + result[2][0])>1){
        marginalridge[3] = 1
    }else{
        marginalridge[3] = 0
    }

    lost = 0
    for (let l in marginalridge) {
        lost = lost + marginalridge[l]
    }

    hasil(lost)
}


function hasil(lost){
    
    // document.getElementById('caries').innerHTML = result
    if(lost == 1){
        document.getElementById("ridgelost").innerHTML = "one ridge lost"
        document.getElementById("post").innerHTML = "no post"
        document.getElementById("restoration").innerHTML = "composite filling"
    }else if(lost == 2){
        document.getElementById("ridgelost").innerHTML = "both ridge lost"
        document.getElementById("post").innerHTML = "no post"
        document.getElementById("restoration").innerHTML = "cusp coverage"
    }else if(lost == 3){
        document.getElementById("ridgelost").innerHTML = "one wall remaining"
        document.getElementById("post").innerHTML = "no post"
        document.getElementById("restoration").innerHTML = "cusp coverage"
    }else if(lost == 4){
        document.getElementById("ridgelost").innerHTML = "no walls remaining"
        document.getElementById("post").innerHTML = "post"
        document.getElementById("restoration").innerHTML = "ferrule and crown"
    }else{
        document.getElementById("ridgelost").innerHTML = ""
        document.getElementById("post").innerHTML = ""
        document.getElementById("restoration").innerHTML = ""

    }
}