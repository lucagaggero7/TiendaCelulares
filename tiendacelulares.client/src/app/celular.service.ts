import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Celular, CelularCreacion } from './celular.models';
import { T } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CelularService {

  constructor() {}

    private http = inject(HttpClient);
    private URLbase = environment.apiURL + '/api/celulares';

    public obtenerTodos(): Observable<Celular[]>
    {
      return this.http.get<Celular[]>(this.URLbase);
    }


    public obtenerPorId(id: number): Observable<Celular>
    {
      return this.http.get<Celular>(`${this.URLbase}/${id}`);
    }

    public crear(celular: CelularCreacion)
    {
    return this.http.post(this.URLbase, celular);
    }

    public actualizar(id:number, celular: CelularCreacion)
    {
      return this.http.put(`${this.URLbase}/${id}`, celular);
    }

    public borrar(id: number)
    {
      return this.http.delete(`${this.URLbase}/${id}`);
    }
}
