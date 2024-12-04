import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IndiceProductosComponent } from "../indice-productos/indice-productos.component";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { CelularService } from '../celular.service';
import { CelularCreacion } from '../celular.models';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-crear-producto',
  imports: [FormularioProductoComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  router = inject(Router);
  celularService = inject(CelularService);

  GuardarCambios(celular: CelularCreacion)
  {
    this.celularService.crear(celular).subscribe(() =>
    {
      this.router.navigate(["productos"]);
    });
  }
}
