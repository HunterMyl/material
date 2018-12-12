import { Component, OnInit } from '@angular/core';
import { CrudService } from '../shared/crud.service';
import { Usuario } from '../shared/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  Usuario: Usuario[];
  displayedColumns: string[] = ['nome', 'email'];

  constructor(
    public crudApi: CrudService
  ) { }

  ngOnInit() {
    this.crudApi.GetUsuariosList().snapshotChanges().subscribe(data => {
      this.Usuario = [];
      data.forEach(item => {
        let a = item.payload.toJSON();
        console.log(a);
        this.Usuario.push(a as Usuario);
      });
    });
  }

}
