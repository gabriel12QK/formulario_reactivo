import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{RegistroComponent}from './registro/registro.component';
import{NotasComponent} from './notas/notas.component'
const routes: Routes = [
 { path: '',
  component:RegistroComponent
},
{ path: 'notas',
component:NotasComponent
},
{ path: 'registro',
  component:RegistroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
