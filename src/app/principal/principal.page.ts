import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  usuarioNombre: string | null = null;
  public Productos: { url: string, nombre: string, descripcion: string }[] = [];
  selectedItem: string | null = null;

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  Ventana(item: string){
    this.selectedItem = item;
    this.router.navigate(['/detalles', {id: item}]);
  }

  ngOnInit() {
    var usuario = localStorage.getItem('usuario');
    if (usuario !== null) {
      this.usuarioNombre = JSON.parse(usuario).nom;
    }

    // Ejemplo de Productos como arreglo de objetos
    this.Productos = [
      { 
        url: 'https://ejemplo.com/imagen1.jpg',
        nombre: 'TV',
        descripcion: 'Descripción del TV'
      },
      { 
        url: 'https://ejemplo.com/imagen2.jpg',
        nombre: 'Estereo',
        descripcion: 'Descripción del Estereo'
      },
      { 
        url: 'https://ejemplo.com/imagen3.jpg',
        nombre: 'Proyector',
        descripcion: 'Descripción del Proyector'
      },
      { 
        url: 'https://ejemplo.com/imagen4.jpg',
        nombre: 'S',
        descripcion: 'Descripción de S'
      }
    ];
  }

  /////////////////////////////////////////////////////////////////////////
  // Ejemplo de cómo usar las funciones CRUD
  saveData() {
    const data = { 
      name: 'John',
      age: 30
    };
    this.localStorageService.create('userData', data);
  }

  getData() {
    const userData = this.localStorageService.read('userData');
    console.log(userData);
  }

  updateData() {
    const updatedData = { 
      name: 'Jane',
      age: 25
    };
    this.localStorageService.update('userData', updatedData);
  }

  deleteData() {
    this.localStorageService.delete('userData');
  }
}