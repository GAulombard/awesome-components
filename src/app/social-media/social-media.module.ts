import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostService } from './services/post.service';
import { PostResolver } from './resolvers/post.resolver';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [CommonModule, SocialMediaRoutingModule],
  providers: [PostService,PostResolver],
})
export class SocialMediaModule {}
