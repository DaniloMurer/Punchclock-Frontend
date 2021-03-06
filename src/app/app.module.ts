import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {AuthenticationInterceptor} from './util/request.interceptor';
import { CreateDialogComponent } from './dashboard/create-dialog/create-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { UpdateDialogComponent } from './dashboard/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from './dashboard/delete-dialog/delete-dialog.component';
import { AdminDialogComponent } from './dashboard/admin-dialog/admin-dialog.component';
import { ConfirmDialogComponent } from './dashboard/admin-dialog/confirm-dialog/confirm-dialog.component';
import { CreateUserDialogComponent } from './dashboard/admin-dialog/create-user-dialog/create-user-dialog.component';
import { DeleteUserDialogComponent } from './dashboard/admin-dialog/delete-user-dialog/delete-user-dialog.component';
import { UpdateUserDialogComponent } from './dashboard/admin-dialog/update-user-dialog/update-user-dialog.component';
import { CreateCategoryDialogComponent } from './dashboard/admin-dialog/create-category-dialog/create-category-dialog.component';
import { DeleteCategoryDialogComponent } from './dashboard/admin-dialog/delete-category-dialog/delete-category-dialog.component';
import { UpdateCategoryDialogComponent } from './dashboard/admin-dialog/update-category-dialog/update-category-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent,
    AdminDialogComponent,
    ConfirmDialogComponent,
    CreateUserDialogComponent,
    DeleteUserDialogComponent,
    UpdateUserDialogComponent,
    CreateCategoryDialogComponent,
    DeleteCategoryDialogComponent,
    UpdateCategoryDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
