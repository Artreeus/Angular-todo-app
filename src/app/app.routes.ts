import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/todo-comp',
        pathMatch: 'full'
    },
    {
        path: 'todo-comp',
        component: TodoComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    // Optional: Add a wildcard route for handling 404 errors
    {
        path: '**',
        redirectTo: '/todo-comp'
    }
];
