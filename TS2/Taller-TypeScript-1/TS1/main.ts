
import {Serie} from "./serie.js"

import { series } from "./data.js";

let componentePromedio: HTMLElement = document.getElementById('promedio')!;
let componente: HTMLElement = document.getElementById('series')!;
let foto:HTMLElement = document.getElementById('image')!;
let descripcion: HTMLElement = document.getElementById('description')!;
let paginaWeb: HTMLElement = document.getElementById('link')!;
let titulo:HTMLElement = document.getElementById('title')!;

cargarFilas();
componentePromedio.innerHTML = `Seasons average: ${calcularPromedio()}`;


function cargarFilas(): void{
    series.forEach(c => crearFila(c));
}

function crearFila(serie: Serie):void{
    let fila = document.createElement('tr');
    fila.innerHTML = (`
    <td style = "font-weight: bold;"> 
        ${serie.id}
    </td>
    <td style = "color:#547dde;">
        ${serie.name}
    </td>
    <td>
        ${serie.channel}
    </td>
    <td>
        ${serie.seasons}
    </td>`);
    componente.appendChild(fila);
}


function alterCard(id: string){
    let idR: number = parseInt(id);
    let serie: Serie = series[idR - 1];
    foto.setAttribute('src', serie.image);
    titulo.innerHTML = `${serie.name}`;
    paginaWeb.setAttribute('href', `${serie.link}`);
    descripcion.innerHTML = `${serie.description}`;
    paginaWeb.innerHTML = 'Página Web Serie';
    const card = document.querySelector('.card');
    if (card && card.classList.contains('card')) {
    (card as HTMLElement).style.display = 'block';
    }

}


function createBotones(){
    series.forEach(c=>{
        let boton = document.getElementById(`${c.id}`)!;
        boton.onclick = () => {alterCard(boton.id)};
    });
}

function calcularPromedio(): string{
    let promedio = 0;
    series.forEach(s => promedio += s.seasons);
    promedio /= series.length;
    let promedioT = Math.round(promedio);
    return promedioT.toString();
}