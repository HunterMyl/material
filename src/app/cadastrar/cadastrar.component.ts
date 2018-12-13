import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../shared/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  public usuarioForm: FormGroup;

  constructor(
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public router: Router,
  ) { }

  ngOnInit() {
    // this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.crudApi.GetUsuariosList();
    this.usuariForm();              // Call student form when component is ready
  }

  usuariForm() {
    this.usuarioForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+')]]
    });
  }
  submitUsuarioData() {
    this.crudApi.AddUsuario(this.usuarioForm.value);
    this.usuarioForm.reset();
    this.router.navigate(['']);
  }
}
