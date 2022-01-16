import { Injectable } from '@angular/core';


@Injectable()
export class VideojuegosService {
  private videojuegos: Videojuego[] = [
    {
      nombre: "Fornite",
      descripcion: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011",
      img: "assets/img/juegos/fortnite.jpg",
      lanzamiento: "21 de julio de 2017",
      consola: "PlayStation 4"
    },
    {
      nombre: "Grand Theft Auto V",
      descripcion: "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​",
      img: "assets/img/juegos/gtav.jpg",
      lanzamiento: "17 de septiembre de 2013",
      consola: "xbox"
    },
    {
      nombre: "Grand Theft Auto IV",
      descripcion: "Grand Theft Auto IV es un videojuego de acción-aventura de mundo abierto desarrollado por Rockstar North.​ El videojuego, precedido por Grand Theft Auto: Vice City Stories, es el noveno título de la serie Grand Theft Auto y el primero de la misma en aparecer en las videoconsolas de séptima generación.",
      img: "assets/img/juegos/gtaiv.jpg",
      lanzamiento: "28 de abril de 2008",
      consola: "PlayStation 4"
    },
    {
      nombre: "Resident Evil Village",
      descripcion: "Resident Evil Village es un videojuego perteneciente al género de los videojuegos de terror desarrollado y publicado por Capcom.",
      img: "assets/img/juegos/residen_evil_village.jpg",
      lanzamiento: "1 de mayo de 2021",
      consola: "PlayStation 4"
    },
    {
      nombre: "Resident Evil 5",
      descripcion: "Resident Evil 5 —cuyo título original es Biohazard 5 es un videojuego de acción-aventura de estilo videojuego de terror desarrollado por Capcom y distribuido por la misma en colaboración con THQ Asia Pacific. ",
      img: "assets/img/juegos/resident_evil_v.jpg",
      lanzamiento: "5 de marzo de 2009",
      consola: "xbox"
    },
    {
      nombre: "SimCity 4",
      descripcion: "SimCity 4 es un videojuego de construcción de ciudades, la cuarta entrega de la serie SimCity, desarrollado por Maxis y distribuido por Electronic Arts. Fue lanzado para Windows el 12 de enero de 2003 en América del Norte, el 17 de enero en varios países de Europa y el 31 de enero en España.",
      img: "assets/img/juegos/sim_city_iv.webp",
      lanzamiento: "14 de enero de 2003",
      consola: "PlayStation 4"
    },
    {
      nombre: "Gran Turismo",
      descripcion: "Gran Turismo 7 es un próximo videojuego de carreras y simulación desarrollado por Polyphony Digital y distribuido por Sony Interactive Entertainment para PlayStation 4 y PlayStation 5. Será el primer Gran Turismo en ser lanzado al mercado en dos generaciones de consolas al mismo tiempo.",
      img: "assets/img/juegos/gran_turismo_vii.jpg",
      lanzamiento: "4 de marzo de 2022",
      consola: "PlayStation 5"
    },
    {
      nombre: "Cities: Skylines",
      descripcion: "Cities: Skylines es un videojuego de construcción de ciudades de 2015 desarrollado por Colossal Order y publicado por Paradox Interactive. El juego es una simulación de construcción de ciudades abierta para un solo jugador.",
      img: "assets/img/juegos/city_skylines.jpg",
      lanzamiento: "10 de marzo de 2015",
      consola: "xbox"
    },
    {
      nombre: "Euro Truck Simulator 2",
      descripcion: "Euro Truck Simulator 2 es un videojuego de simulación de camiones desarrollado y publicado por SCS Software el 19 de octubre de 2012 para Microsoft Windows, Mac OS y Linux. Es una secuela directa del videojuego de 2008 Euro Truck Simulator y es el segundo de la serie Euro Truck Simulator.",
      img: "assets/img/juegos/euro_truck_simulator_ii.jpg",
      lanzamiento: "19 de octubre de 2012",
      consola: "xbox"
    },
    {
      nombre: "Los Sims 4",
      descripcion: "Los Sims 4 es la cuarta entrega de la serie de videojuego de simulación social y de vida, Los Sims. El juego fue anunciado originalmente el 6 de mayo de 2013, ​ y puesto a la venta el 2 de septiembre de 2014, para Microsoft Windows.",
      img: "assets/img/juegos/sims_iv.jpg",
      lanzamiento: "2 de septiembre de 2014",
      consola: "PlayStation 4"
    }

  ];

  constructor() {
    console.log("servicio listo para usarse");
  }

  getVideoJuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];
    termino = termino.toLowerCase();
    this.videojuegos.forEach(videojuego => {
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        videojuegosArr.push(videojuego);
      }
    });
    return videojuegosArr;
  }



}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}