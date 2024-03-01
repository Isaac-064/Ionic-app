import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    constructor() { }

    // Create
    create(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }
    // Read
    read(key: string): any {
        var usuarioString = localStorage.getItem('usuario');   
        //Validacion
        if (usuarioString !== null) {
        var usuario = JSON.parse(usuarioString);
        return JSON.parse(usuario); //   localStorage.getItem(key)
        }
    }
    // Update
    update(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }
    // Delete
    delete(key: string): void {
        localStorage.removeItem(key);
    }
}
