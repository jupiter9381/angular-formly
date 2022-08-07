import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-label',
  template: `
    <mat-label [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.label}}</mat-label>
  `,
})
export class LabelTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
    console.log(this.field.templateOptions?.attributes?.color);
  }
}

