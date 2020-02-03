import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  mostrar=true;
  frase:any = {
    mensaje:"este es el listado de peliculas  ",
    autor:'Josue Caviadez Marquez',
  }

  personajes: string[] =['Civil War','Rambo','Rise Of The Skywalker','Toy Story 4','el hobbit','Jhon Wick','Matrix'];

  constructor() { }

  ngOnInit() {
  }

}
