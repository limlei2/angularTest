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

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'dataBinding',
        pathMatch:'full'
    },
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
    }
];
