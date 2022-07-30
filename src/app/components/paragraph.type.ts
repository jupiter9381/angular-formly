import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-paragraph',
  template: `
    <p>{{field.templateOptions?.label}}</p>
`,
})
export class ParagraphTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

