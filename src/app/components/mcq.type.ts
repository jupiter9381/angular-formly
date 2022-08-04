import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-mcq',
  template: `
    <h4>{{field.templateOptions?.title}}</h4>
    <div class="mcq-container">
      <div class="mcq-item" *ngFor="let item of field.templateOptions?.data; let i = index;">
        <span>{{ i+1 }}</span>
        <span>{{item}}</span>
      </div>
    </div>
  `,
})
export class MCQTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

