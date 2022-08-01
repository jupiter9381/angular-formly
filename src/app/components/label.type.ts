import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-label',
  template: `
    <mat-label [style]="field.templateOptions?.attributes?.style">{{field.templateOptions?.label}}</mat-label>
  `,
})
export class LabelTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
    console.log(this.field.templateOptions?.attributes?.color);
  }
}

