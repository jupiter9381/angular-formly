import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-paragraph',
  template: `
    <p mat-line [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.title}}</p>
`,
})
export class ParagraphTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

