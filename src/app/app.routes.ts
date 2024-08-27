import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path:'todo-comp',
        component:TodoComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'register',
        component:RegisterComponent
    }
];
