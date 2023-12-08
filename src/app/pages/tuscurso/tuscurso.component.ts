import { AsignarCursoService } from './../../services/asignar-curso.service';
import { Component } from '@angular/core';
import { curso } from 'src/app/domain/curso.model';
import { AutorizarService } from 'src/app/services/autorizar.service';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-tuscurso',
  templateUrl: './tuscurso.component.html',
  styleUrls: ['./tuscurso.component.scss']
})
export class TuscursoComponent {
  cursos: curso[] = [];  
  userId: string | undefined;

  constructor(private cursoService: CursoService, private authService: AutorizarService) { }

  ngOnInit(): void {
    // Obtén el userId del servicio de autenticación
    const user =  JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.userId = user.id;

    if (this.userId) {
      this.cargarCursosDeUsuario(this.userId);
    } else {
      console.error('UserId no definido');
    }
  }

<<<<<<< HEAD
  cargarCursosDeUsuario(userId: string) {
    this.cursoService.getCursosDeUsuario(userId).subscribe(
=======
  cargarCursosDeUsuario(idd: string) {
    this.cursoService.getCursosDeUsuario(idd).subscribe(
>>>>>>> 202884d16b844c4b37ae6d936b450205b211304f
      cursos => {
        this.cursos = cursos; // Aquí tienes la lista de detalles de los cursos
      },
      error => {
        console.error('Error al obtener los detalles de los cursos:', error);
      }
    );
  }
  
  
}