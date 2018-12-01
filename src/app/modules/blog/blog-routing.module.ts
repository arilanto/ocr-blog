import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [
	{path:'blog', component:PostlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
