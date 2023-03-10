import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { PostsService } from '../service/http.service';
import { EffectsModule } from '@ngrx/effects';
import { PostsEffects } from '../store/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [PostsService],
  declarations: [PostsComponent],
  exports: [PostsComponent],
})
export class PostsModule {}
