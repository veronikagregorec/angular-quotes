import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { StoreModule } from '@ngrx/store/src';
import { reducers } from '../store/reducers';
import { PostsService } from '../service/http.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers)
  ],
  providers: [PostsService],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
