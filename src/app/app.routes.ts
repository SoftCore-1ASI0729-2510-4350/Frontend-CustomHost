import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';

const LoginComponent = () => import('./auth/pages/login/login.component').then(m => m.LoginComponent);
const RegisterComponent = () => import('./auth/pages/register/register.component').then(m => m.RegisterComponent);
const AdminComponent = () => import('./billing/pages/admin/admin.component').then(m => m.AdminComponent);

const BookComponent = () => import('./crm/pages/book/book.component').then(m => m.BookComponent);
const BookingsTrackerComponent = () => import('./crm/pages/bookings-tracker/bookings-tracker.component').then(m => m.BookingsTrackerComponent);
const CustomerRequestsComponent = () => import('./crm/pages/customer-requests/customer-requests.component').then(m => m.CustomerRequestsComponent);
const CustomerServiceComponent = () => import('./crm/pages/customer-service/customer-service.component').then(m => m.CustomerServiceComponent);
const MyBookingsComponent = () => import('./crm/pages/my-bookings/my-bookings.component').then(m => m.MyBookingsComponent);
const RequestStaffComponent = () => import('./crm/pages/request-staff/request-staff.component').then(m => m.RequestStaffComponent);

const IotDevicesComponent = () => import('./guest-experience/pages/iot-devices/iot-devices.component').then(m => m.IotDevicesComponent);

const ProfileComponent = () => import('./profiles/pages/profile/profile.component').then(m => m.ProfileComponent);
const PreferencesComponent = () => import('./profiles/pages/preferences/preferences.component').then(m => m.PreferencesComponent);

const PageNotFoundComponent = () => import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { title: 'Inicio' } },
  { path: 'home', component: HomeComponent, data: { title: 'Página Principal' } },

  { path: 'auth', children: [
      { path: 'login', loadComponent: LoginComponent, data: { title: 'Iniciar Sesión' } },
      { path: 'register', loadComponent: RegisterComponent, data: { title: 'Registro' } }
    ]
  },

  { path: 'billing', children: [
      { path: 'admin', loadComponent: AdminComponent, data: { title: 'Administración' } }
    ]
  },

  { path: 'crm', children: [
      { path: 'book', loadComponent: BookComponent, data: { title: 'Reservar' } },
      { path: 'bookings-tracker', loadComponent: BookingsTrackerComponent, data: { title: 'Seguimiento de Reservas' } },
      { path: 'customer-requests', loadComponent: CustomerRequestsComponent, data: { title: 'Solicitudes de Clientes' } },
      { path: 'customer-service', loadComponent: CustomerServiceComponent, data: { title: 'Atención al Cliente' } },
      { path: 'my-bookings', loadComponent: MyBookingsComponent, data: { title: 'Mis Reservas' } },
      { path: 'request-staff', loadComponent: RequestStaffComponent, data: { title: 'Solicitar Personal' } }
    ]
  },

  { path: 'guest-experience', children: [
      { path: 'iot-devices', loadComponent: IotDevicesComponent, data: { title: 'Dispositivos IoT' } }
    ]
  },

  { path: 'profiles', children: [
      { path: 'profile', loadComponent: ProfileComponent, data: { title: 'Perfil' } },
      { path: 'preferences', loadComponent: PreferencesComponent, data: { title: 'Preferencias' } }
    ]
  },

  { path: '**', loadComponent: PageNotFoundComponent, data: { title: 'Página No Encontrada' } }
];
