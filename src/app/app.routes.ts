import { Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRecoverPasswordComponent } from './pages/page-recover-password/page-recover-password.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: PageLoginComponent },
    { path: "recover-password", component: PageRecoverPasswordComponent },
    { path: "register", component: PageRegisterComponent }
];