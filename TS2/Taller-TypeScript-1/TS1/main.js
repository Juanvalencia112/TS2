import { series } from "./data.js";
var componentePromedio = document.getElementById('promedio');
var componente = document.getElementById('series');
var foto = document.getElementById('image');
var descripcion = document.getElementById('description');
var paginaWeb = document.getElementById('link');
var titulo = document.getElementById('title');
cargarFilas();
componentePromedio.innerHTML = "Seasons average: ".concat(calcularPromedio());
function cargarFilas() {
    series.forEach(function (c) { return crearFila(c); });
}
function crearFila(serie) {
    var fila = document.createElement('tr');
    fila.innerHTML = ("\n    <td style = \"font-weight: bold;\"> \n        ".concat(serie.id, "\n    </td>\n    <td style = \"color:#547dde;\">\n        ").concat(serie.name, "\n    </td>\n    <td>\n        ").concat(serie.channel, "\n    </td>\n    <td>\n        ").concat(serie.seasons, "\n    </td>"));
    componente.appendChild(fila);
}
function alterCard(id) {
    var idR = parseInt(id);
    var serie = series[idR - 1];
    foto.setAttribute('src', serie.image);
    titulo.innerHTML = "".concat(serie.name);
    paginaWeb.setAttribute('href', "".concat(serie.link));
    descripcion.innerHTML = "".concat(serie.description);
    paginaWeb.innerHTML = 'Página Web Serie';
    var card = document.querySelector('.card');
    if (card && card.classList.contains('card')) {
        card.style.display = 'block';
    }
}
function createBotones() {
    series.forEach(function (c) {
        var boton = document.getElementById("".concat(c.id));
        boton.onclick = function () { alterCard(boton.id); };
    });
}
function calcularPromedio() {
    var promedio = 0;
    series.forEach(function (s) { return promedio += s.seasons; });
    promedio /= series.length;
    var promedioT = Math.round(promedio);
    return promedioT.toString();
}
