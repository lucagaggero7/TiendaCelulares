import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { CelularService } from '../celular.service';
import { Celular, CelularCreacion } from '../celular.models';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  imports: [FormularioProductoComponent],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent implements OnInit{

  @Input({transform: numberAttribute})
  id!:number

  celularService = inject(CelularService);
  router = inject(Router);
  modelo?: Celular;

  ngOnInit(): void {
    this.celularService.obtenerPorId(this.id).subscribe(celular => { 

      this.modelo = celular;
    });
  }

  GuardarCambios(celular: CelularCreacion)
  {
    this.celularService.actualizar(this.id, celular).subscribe(() => {
      this.router.navigate(['/productos']);
    })
  }
}
