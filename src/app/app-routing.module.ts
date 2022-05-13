import { AboutUsComponent } from './component/about-us/about-us.component';
import { BlogComponent } from './component/blog/blog.component';
import { NewsComponent } from './component/news/news.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'coin-list', pathMatch:'full'},
  {path:'coin-list', component: CoinListComponent},
  {path:'coin-detail/:id', component: CoinDetailComponent},
  {path:'news', component: NewsComponent},
  {path:'blog', component:BlogComponent},
  {path:'aboutus', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
