import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldDefaultOptions, MatFormFieldModule, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { LabelTypeComponent } from './components/label.type';
import { MatInputModule } from '@angular/material/input';
import { ParagraphTypeComponent } from './components/paragraph.type';
import { HeadingTypeComponent } from './components/heading.type';
import { TimeTypeComponent } from './components/time.type.';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ChecklistTypeComponent } from './components/checklist.type';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
@NgModule({
  declarations: [
    AppComponent,
    LabelTypeComponent,
    TimeTypeComponent,
    ChecklistTypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,

    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'formly-checklist',
          component: ChecklistTypeComponent,
        },
        {
          name: 'formly-label',
          component: LabelTypeComponent,
        },
        {
          name: 'formly-paragraph',
          component: ParagraphTypeComponent
        },
        {
          name: 'formly-heading',
          component: HeadingTypeComponent
        },
        {
          name: 'formly-time',
          component: TimeTypeComponent
        }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
    MatFormFieldModule,
    MatTableModule,
    MatCheckboxModule,
    MatListModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
