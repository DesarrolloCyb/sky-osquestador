import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapturaRoutingModule } from './captura-routing.module';
import { CancelacionComponent } from './cancelacion/cancelacion.component';
import { QuejasComponent } from './quejas/quejas.component';
import { CapturaComponent } from './captura.component';

//▬▬▬▬▬▬▬▬ FORMULARIO▬▬▬▬▬▬▬▬▬▬▬▬▬▬
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { SharedModule } from 'primeng/api';
import { AppRoutingModule } from 'src/app/app-routing.module';

//▬▬▬▬MATERIAL▬▬▬▬▬▬▬▬▬▬▬
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [

    QuejasComponent,
    CapturaComponent,
  ],
  imports: [
    CommonModule,
    CapturaRoutingModule,
    AutoCompleteModule,
    CascadeSelectModule,
    CheckboxModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    MatIconModule,
    MatToolbarModule,

    //▬▬▬▬MATERIAL▬▬▬▬▬▬▬▬▬▬▬
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    SharedModule ,
    MatCardModule,
    MatButtonModule

  ]
})
export class CapturaModule { }
