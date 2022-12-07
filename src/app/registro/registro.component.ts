import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import{EstudianteService}from 'src/app/estudiante.service'
import {registroI} from './registro.interface'
import { Router } from '@angular/router'
import swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  prom:any;
  aux=Array()
  estudiante:any
  Auxnotas:any
  not=Array()
  est=Array()
  aux2:any
  auxEstudiantesNotas=Array();
  _notas=Array();
  valid=false
  public _form !: FormGroup

  constructor(
    private estudianteService:EstudianteService,
    private _formB:FormBuilder,
    private router:Router,
   
    ) { }

  ngOnInit(): void {
    this._form=this._formB.group({
      name: ['',[Validators.required]],
      last_name:['',[Validators.required]],
      CI:['',[Validators.required,Validators.minLength(10),Validators.pattern(/^[1-9]/)]],
      email: ['',[Validators.required,Validators.email]],
      parcial1:['',[Validators.required, Validators.pattern(/^[1-9]/)]],
      parcial2:['',[Validators.required, Validators.pattern(/^[1-9]/)]],
      parcial3:['',[Validators.required, Validators.pattern(/^[1-9]/)]],
      parcial4:['',[Validators.required, Validators.pattern(/^[1-9]/)]],
      promedio:new FormControl,
    })
  }

  calcular(){
    if(this._form.value.parcial1==null){
      this._form.value.parcial1=0
    }
    else if(this._form.value.parcial2==null){
      this._form.value.parcial2=0
    }
    else if(this._form.value.parcial3==null){
      this._form.value.parcial3=0
    }
    else if(this._form.value.parcial4==null){
      this._form.value.parcial4=0
    }
    let n1, n2,n3,n4
    n1=parseInt(this._form.value.parcial1)
    n2=parseInt(this._form.value.parcial2)
    n3=parseInt(this._form.value.parcial3)
    n4=parseInt(this._form.value.parcial4)
    this.prom=(n1+n2+n3+n4)/4
    this._form.value.promedio=this.prom
    this.valid=true
  }

store(_form:any)
{
   if (this._form.valid) {
    this.estudianteService.store(_form).subscribe({
      next: (res)=>{
        console.log(res.message);
      },
      error:(err)=>{
  
      }
     })
     this.succes()
     this._form.reset()
   } else {
    this.error()
    this._form.markAllAsTouched()
   }
  
   
  }
  
  succes(){
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registrado con exito',
        showConfirmButton: false,
         timer: 1500
      }
      )

  } 
  error(){
    swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Asegurese de llenar todos los datos',
      showConfirmButton: false,
       timer: 1500
    }
    )
  }

  cambio(){
    this.router.navigate(['notas'])
  }
  
}
