import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { SignalComponent } from './components/signal/signal.component';
import { LinkedSignalComponent } from './components/linked-signal/linked-signal.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { GetApiComponent } from './api/get-api/get-api.component';
import { PostApiComponent } from './api/post-api/post-api.component';
import { CustomerComponent } from './api/customer/customer.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';
import { NgtempComponent } from './components/ngtemp/ngtemp.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'login',
        pathMatch:'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        canActivate: [authGuard],
        component: LayoutComponent,
        children: [
            {
                path:'admin',
                component:AdminComponent
            },
            {
                path:'dataBinding',
                component:DataBindingComponent
            },
            {
                path:'ng-class',
                component:NgClassComponent
            },
            {
                path:'ngfor',
                component:NgForComponent
            },
            {
                path: 'control-flow',
                component:ControlStatementComponent
            },
            {
                path:'signal',
                component:SignalComponent
            },
            {
                path:'linkedsignal',
                component:LinkedSignalComponent
            },
            {
                path:'templateform',
                component:TemplateformComponent
            },
            {
                path:'reactiveform',
                component:ReactiveformComponent
            },
            {
                path:'getapi',
                component:GetApiComponent
            },
            {
                path:'postapi',
                component:PostApiComponent
            },
            {
                path:'customer',
                component:CustomerComponent
            },
            {
                path:'lifecycle',
                component:LifeCycleComponent
            },
            {
                path:'ngtemp',
                component: NgtempComponent
            }
        ]
    }
    
];
