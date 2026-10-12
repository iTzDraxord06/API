
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Estudiante {
  nombre: string;
  creditos: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private url = 'estudiantes.json';

  constructor(private http: HttpClient) {}

  obtenerEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.url);
  }
}
