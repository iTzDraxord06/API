
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EstudianteService, Estudiante } from '../estudiante';

@Component({
  selector: 'app-lista',
  imports: [CommonModule, RouterLink],
  styleUrl: './lista.css',
  templateUrl: './lista.html'
})
export class Lista implements OnInit {
  estudiantes: Estudiante[] = [];
  cargando = true;

  constructor(private servicio: EstudianteService) {}

  ngOnInit(): void {
    this.servicio.obtenerEstudiantes().subscribe((datos) => {
      this.estudiantes = datos;
      this.cargando = false;
    });
  }

  estado(creditos: number): string {
    if (creditos < 1 || creditos > 24) {
      return 'Créditos inválidos';
    } else if (creditos >= 12) {
      return 'Matriculado';
    }
    return 'Pendiente';
  }
}
