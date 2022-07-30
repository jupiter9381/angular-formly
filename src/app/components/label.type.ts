import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-label',
  template: `
    <mat-label>{{field.templateOptions?.label}}</mat-label>
`,
})
export class LabelTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

