document.getElementById("tituloCentro").innerHTML = 'ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA'

var radiologia = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA'
},
{
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE' 
},
{
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE' 
},
{
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA' 
},
{
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA' 
}
]

var traumatologia = [{
    hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA'
},
{
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE' 
},
{
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE' 
},
{
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE' 
},
{
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA' 
},
{
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE' 
},
{
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE' 
}
];

var dental = [{
    hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE' 
},
{
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE' 
},
{
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA' 
},
{
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA' 
},
{
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA' 
},
{
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE' 
},
]

//---------------------------------------RADIOLOGÍA-----------------------------------------

document.getElementById("tituloRadio").innerHTML = `<h3>Atención en RADIOLOGÍA:</h3>`
document.getElementById("atencionRadio").innerHTML = `<p><b>Primera atención</b> ${radiologia[0].paciente} - ${radiologia[0].prevision} | <b>Última atención</b> ${radiologia[4].paciente} - ${radiologia[4].prevision}</p>`

var tablaRadio = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr> ";

for (var i = 0; i < radiologia.length; i++){
    tablaRadio +=   `<tr>
                <td>${radiologia[i].hora}</td>
                <td>${radiologia[i].especialista}</td>
                <td>${radiologia[i].paciente}</td>
                <td>${radiologia[i].rut}</td>
                <td>${radiologia[i].prevision}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla1").innerHTML = tablaRadio

//-----------------------------------------TRAUMATOLOGÍA-----------------------------------------

document.getElementById("tituloTrauma").innerHTML = `<h3>Atención en TRAUMATOLOGÍA:</h3>`
document.getElementById("atencionTrauma").innerHTML = `<p><b>Primera atención</b> ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | <b>Última atención</b> ${traumatologia[6].paciente} - ${traumatologia[6].prevision}</p>`

var tablaTrauma = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr> ";

for (var i = 0; i < traumatologia.length; i++){
    tablaTrauma +=   `<tr>
                <td>${traumatologia[i].hora}</td>
                <td>${traumatologia[i].especialista}</td>
                <td>${traumatologia[i].paciente}</td>
                <td>${traumatologia[i].rut}</td>
                <td>${traumatologia[i].prevision}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla2").innerHTML = tablaTrauma

//-----------------------------------------------DENTAL-----------------------------------------

document.getElementById("tituloDental").innerHTML = `<h3>Atención en DENTAL:</h3>`
document.getElementById("atencionDental").innerHTML = `<p><b>Primera atención</b> ${dental[0].paciente} - ${dental[0].prevision} | <b>Última atención</b> ${dental[5].paciente} - ${dental[5].prevision}</p>`

var tablaDental = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Prevision</th></tr> ";

for (var i = 0; i < dental.length; i++){
    tablaDental +=   `<tr>
                <td>${dental[i].hora}</td>
                <td>${dental[i].especialista}</td>
                <td>${dental[i].paciente}</td>
                <td>${dental[i].rut}</td>
                <td>${dental[i].prevision}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla3").innerHTML = tablaDental