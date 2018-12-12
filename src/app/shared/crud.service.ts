import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  usuarioRef: AngularFireObject<any>; // o objeto usuario
  usuariosRef: AngularFireList<any>; // a lista de usuarios

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Cria usuário

  AddUsuario(usuario: Usuario) {
    this.usuariosRef.push({
      nome: usuario.nome,
      email: usuario.email
    });
  }
    /*
    GetStudent(id: string) {
      this.studentRef = this.db.object('students-list/' + id);
      return this.studentRef;
    }
    GetStudentsList() {
      this.studentsRef = this.db.list('students-list');
      return this.studentsRef;
    } */
  GetUsuariosList() {
    this.usuariosRef = this.db.list('usuarios-list'); // nome tabela
    return this.usuariosRef;
  }
}
