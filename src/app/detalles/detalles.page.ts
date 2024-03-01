import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  productId: string|null = null;
  Producto: any;


  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    // Recuperar los datos del producto del localStorage
    const productoString = localStorage.getItem('Productos');
    if (productoString) {
      this.Producto = JSON.parse(productoString);
    }
  }

}
