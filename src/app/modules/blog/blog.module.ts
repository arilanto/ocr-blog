import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';

import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [PostlistComponent, PostlistitemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
