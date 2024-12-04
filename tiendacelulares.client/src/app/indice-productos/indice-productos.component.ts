import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CelularService } from '../celular.service';
import { Celular } from '../celular.models';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-indice-productos',
  imports: [MatButtonModule, RouterLink, MatTableModule, SweetAlert2Module],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {

  celularService = inject(CelularService);
  celulares?: Celular[];
  columnasAMostrar = ['marca', 'modelo', 'acciones']

  constructor() {
    this.CargarProductos();
  }

  CargarProductos() {
    this.celularService.obtenerTodos().subscribe(celulares => {
      this.celulares = celulares;
    });
  }

  borrar(id: number) {
    this.celularService.borrar(id).subscribe(() => {

      Swal.fire("Confirmado", "El registro se borro con exito", 'success');
      this.CargarProductos();
    });
  }
}
