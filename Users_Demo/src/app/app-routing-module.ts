import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListPageComponent } from './components/user-list-page/user-list-page.component';
import { UserPageComponent } from './components/user-page/user-page.component';

const routes:Routes = [
    { path: 'user', component:UserPageComponent },
    { path: '', component:UserListPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}
export const routesComponents = [UserPageComponent];