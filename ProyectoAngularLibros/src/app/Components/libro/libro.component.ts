import { Component, OnInit } from '@angular/core';
import libros from './book.json'

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  
  public libros: {id:string, titulo:string, autor:string, editorial:string, descripcion:string }[] = libros;
   
  constructor() {
      this.libros = libros;
    }

  ngOnInit(): void {
  }

}
