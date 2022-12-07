import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {registroI} from './registro/registro.interface'

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
 url:string="https://pythonapilogroa.herokuapp.com/api/"
  constructor(private http:HttpClient) { }

store(_form:any)
{
 let dir=this.url+"estudiante/"
 let aux=JSON.stringify(_form)
  return this.http.post<any>(dir,aux);
}

show(){
  let dir=this.url+"estudiante/"
  return this.http.get<any>(dir);
}


}
