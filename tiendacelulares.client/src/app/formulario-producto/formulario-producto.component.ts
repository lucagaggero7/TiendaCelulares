import { Component, EventEmitter, inject, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { CelularService } from '../celular.service';
import { Celular, CelularCreacion } from '../celular.models';

@Component({
  selector: 'app-formulario-producto',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormularioProductoComponent implements OnInit{
  

  private readonly formBuilder = inject(FormBuilder);
 
  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: Celular

  @Output()
  posteoFormulario = new EventEmitter<CelularCreacion>();

  ngOnInit(): void {
    if (this.modelo !== undefined)
    {
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    marca: [''],
    modelo: ['']
  })

  GuardarCambios()
  {
    let celular = this.form.value as CelularCreacion;
    this.posteoFormulario.emit(celular);

  }

}
