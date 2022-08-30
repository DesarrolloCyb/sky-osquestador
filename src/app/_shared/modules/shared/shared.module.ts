import { PanelModule } from 'primeng/panel';
import { ProgressBarModule } from 'primeng/progressbar';
import { ConfirmComponent } from './../../../_components/confirm/confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorMessageComponent } from './../../../_components/error-message/error-message.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import {
  LowerCaseDirective,
  NoSpacesDirective,
  OnlyAlphabetsDirective,
  OnlyNumbersDirective,
  UppercaseDirective,
} from '@directives';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:[

  ],
  declarations: [
    ErrorMessageComponent,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    NoSpacesDirective,
    UppercaseDirective,
    LowerCaseDirective,
    ConfirmComponent,
  ],
  exports: [
    //Prime
    BadgeModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    ErrorMessageComponent,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    ToastModule,
    DialogModule,
    OverlayPanelModule,
    TableModule,
    ConfirmDialogModule,
    SidebarModule,
    ConfirmPopupModule,
    TooltipModule,
    AutoCompleteModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    ProgressBarModule,
    PanelModule,

    //

    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    NoSpacesDirective,
    UppercaseDirective,
    LowerCaseDirective,
    ConfirmComponent,


    CommonModule,
		MessagesModule,
		MessageModule,
    ChartModule,

    // BrowserModule,
    // BrowserAnimationsModule,


  ],
})
export class SharedModule {}
