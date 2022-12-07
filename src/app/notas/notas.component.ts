import { Component, OnInit } from '@angular/core';
import{EstudianteService}from 'src/app/estudiante.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
 estudiante:any
 loaded=false
  constructor( 
    private est:EstudianteService,
    private router:Router
  ) { }

  ngOnInit(): void {
   this.show()
  }

show(){
  this.est.show().subscribe({
    next:(res)=>{
      this.loaded=true
      this.estudiante=res
      //debugger
    }
  })
}
cambio(){
  this.router.navigate(['registro'])
}
}
