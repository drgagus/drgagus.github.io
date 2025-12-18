
let pulp = [ 
            'Reversible Pulpitis',
            'Symptomatic Irreversible Pulpitis', 
            'Asymptomatic Irreversible Pulpitis', 
            'Pulp Necrosis', 
            'Previously Treated', 
            'reviously Initiated Therapy'
        ]
let periapical = [
            'Normal Apical Tissues',
            'Symptomatic Apical Periodontitis',
            'Asymptomatic Apical Periodontitis',
            'Chronic Apical Abscess',
            'Acute Apical Abscess',
            'Condensing Osteitis'
]

function diagnosa(){

    document.getElementById("pulp").innerHTML = pulp[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
    document.getElementById("periapical").innerHTML = periapical[Math.floor(Math.random() * (5 - 0 + 1)) + 0]
    // Math.floor(Math.random() * (max - min + 1)) + min
}