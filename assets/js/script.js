document.getElementById("tituloCentro").innerHTML = 'ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA'

var radiologia = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    previsión: 'FONASA'
},
{
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    previsión: 'ISAPRE' 
},
{
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    previsión: 'ISAPRE' 
},
{
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    previsión: 'FONASA' 
},
{
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    previsión: 'FONASA' 
}
]

var traumatologia = [{
    hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    previsión: 'FONASA'
},
{
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    previsión: 'ISAPRE' 
},
{
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    previsión: 'ISAPRE' 
},
{
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    previsión: 'ISAPRE' 
},
{
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    previsión: 'FONASA' 
},
{
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    previsión: 'ISAPRE' 
},
{
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    previsión: 'ISAPRE' 
}
];

var dental = [{
    hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    previsión: 'ISAPRE' 
},
{
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    previsión: 'ISAPRE' 
},
{
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    previsión: 'FONASA' 
},
{
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    previsión: 'FONASA' 
},
{
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    previsión: 'FONASA' 
},
{
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    previsión: 'ISAPRE' 
},
]

//---------------------------------------RADIOLOGÍA-----------------------------------------

document.getElementById("tituloRadio").innerHTML = `<h3>Atención en RADIOLOGÍA:</h3>`
document.getElementById("atenciónRadio").innerHTML = `<p><b>Primera atención</b> ${radiologia[0].paciente} - ${radiologia[0].previsión} | <b>Última atención</b> ${radiologia[4].paciente} - ${radiologia[4].previsión}</p>`

var tablaRadio = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr> ";

for (var i = 0; i < radiologia.length; i++){
    tablaRadio +=   `<tr>
                <td>${radiologia[i].hora}</td>
                <td>${radiologia[i].especialista}</td>
                <td>${radiologia[i].paciente}</td>
                <td>${radiologia[i].rut}</td>
                <td>${radiologia[i].previsión}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla1").innerHTML = tablaRadio

//-----------------------------------------TRAUMATOLOGÍA-----------------------------------------

document.getElementById("tituloTrauma").innerHTML = `<h3>Atención en TRAUMATOLOGÍA:</h3>`
document.getElementById("atenciónTrauma").innerHTML = `<p><b>Primera atención</b> ${traumatologia[0].paciente} - ${traumatologia[0].previsión} | <b>Última atención</b> ${traumatologia[6].paciente} - ${traumatologia[6].previsión}</p>`

var tablaTrauma = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr> ";

for (var i = 0; i < traumatologia.length; i++){
    tablaTrauma +=   `<tr>
                <td>${traumatologia[i].hora}</td>
                <td>${traumatologia[i].especialista}</td>
                <td>${traumatologia[i].paciente}</td>
                <td>${traumatologia[i].rut}</td>
                <td>${traumatologia[i].previsión}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla2").innerHTML = tablaTrauma

//-----------------------------------------------DENTAL-----------------------------------------

document.getElementById("tituloDental").innerHTML = `<h3>Atención en DENTAL:</h3>`
document.getElementById("atenciónDental").innerHTML = `<p><b>Primera atención</b> ${dental[0].paciente} - ${dental[0].previsión} | <b>Última atención</b> ${dental[5].paciente} - ${dental[5].previsión}</p>`

var tablaDental = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>RUT</th><th>Previsión</th></tr> ";

for (var i = 0; i < dental.length; i++){
    tablaDental +=   `<tr>
                <td>${dental[i].hora}</td>
                <td>${dental[i].especialista}</td>
                <td>${dental[i].paciente}</td>
                <td>${dental[i].rut}</td>
                <td>${dental[i].previsión}</td>
                </tr>`;
};
document.getElementById("cuerpo-tabla3").innerHTML = tablaDental