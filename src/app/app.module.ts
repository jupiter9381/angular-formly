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

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};
@NgModule({
  declarations: [
    AppComponent,
    LabelTypeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,

    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'formly-label',
          component: LabelTypeComponent,
        },
        {
          name: 'formly-paragraph',
          component: ParagraphTypeComponent
        }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyMaterialModule,
    MatFormFieldModule
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
