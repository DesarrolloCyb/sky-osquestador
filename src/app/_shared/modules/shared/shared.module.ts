import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorMessageComponent } from './../../../_components/error-message/error-message.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

@NgModule({
  declarations: [
    ErrorMessageComponent,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    NoSpacesDirective,
    UppercaseDirective,
    LowerCaseDirective,
  ],
  imports: [CommonModule],
  exports: [
    BadgeModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    ErrorMessageComponent,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    BrowserAnimationsModule,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    NoSpacesDirective,
    UppercaseDirective,
    LowerCaseDirective,
  ],
})
export class SharedModule {}
