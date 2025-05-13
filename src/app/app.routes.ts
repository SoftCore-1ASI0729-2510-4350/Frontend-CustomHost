import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';

const BookComponent = () => import('./crm/pages/book/book.component').then(m => m.BookComponent);
const CustomerServiceComponent = () => import('./crm/pages/customer-service/customer-service.component').then(m => m.CustomerServiceComponent);
const MyBookingsComponent = () => import('./crm/pages/my-bookings/my-bookings.component').then(m => m.MyBookingsComponent);
const AvailableRoomsViewComponent = () => import('./crm/pages/available-rooms-view/available-rooms-view.component').then(m => m.AvailableRoomsViewComponent);
const CustomizeRoomViewComponent = () => import('./crm/pages/customize-room-view/customize-room-view.component').then(m => m.CustomizeRoomComponent);

const IotDevicesComponent = () => import('./guest-experience/pages/iot-devices/iot-devices.component').then(m => m.IotDevicesComponent);

const PageNotFoundComponent = () => import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

const CustomerServicesCreateAndEditComponent = () => import('./crm/pages/customer-services-create-and-edit/customer-services-create-and-edit.component').then(m => m.CustomerServicesCreateAndEditComponent);


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', data: { title: 'Inicio' } },
  { path: 'home', component: HomeComponent, data: { title: 'Página Principal' } },


  { path: 'crm', children: [
      { path: 'book', loadComponent: BookComponent, data: { title: 'Reservar' } },
      { path: 'customer-service', loadComponent: CustomerServiceComponent, data: { title: 'Atención al Cliente' } },
      { path: 'customer-service/new', loadComponent: CustomerServicesCreateAndEditComponent, data: { title: 'New Customer service' } },
      { path: 'my-bookings', loadComponent: MyBookingsComponent, data: { title: 'Mis Reservas' } },
      { path: 'available-rooms-view', loadComponent: AvailableRoomsViewComponent, data: { title: 'Habitaciones Disponibles' } },
      { path: 'customize-room-view/:roomId', loadComponent: CustomizeRoomViewComponent, data: { title: 'Personalizar Habitación' } }
    ]
  },

  { path: 'guest-experience', children: [
      { path: 'iot-devices', loadComponent: IotDevicesComponent, data: { title: 'Dispositivos IoT' } }
    ]
  },



  { path: '**', loadComponent: PageNotFoundComponent, data: { title: 'Página No Encontrada' } }
];
