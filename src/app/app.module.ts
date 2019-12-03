import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { LoginComponent } from './components/main/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './mocks/in-memory-data-service';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { UserListComponent } from './components/main/user-list/user-list.component';
import { HomeComponent } from './components/main/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/main/register/register.component';
import {MatSelectModule} from '@angular/material/select';
import { OnlyCharDirective } from './directives/only-char.directive';
import { CalificacionComponent } from './components/modules/calificacion/calificacion.component';
import { AlumnoComponent } from './components/modules/alumno/alumno.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    UserListComponent,
    HomeComponent,
    RegisterComponent,
    OnlyCharDirective,
    CalificacionComponent,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
