import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-mcq',
  template: `
    <div [ngStyle]="field.templateOptions?.StyleObject">
      <h4>{{field.templateOptions?.title}}</h4>
      <div class="mcq-container" 
        [ngClass]="{'landscape': field.templateOptions?.orientation=='landscape',
                    'portrait': field.templateOptions?.orientation!='landscape'}">
        <div class="mcq-item" *ngFor="let item of field.templateOptions?.data; let i = index;">
          <span>{{ i+1 }}</span>
          <span>{{item}}</span>
        </div>
      </div>  
    </div>
  `,
  styles: [
    `.mcq-container {display: flex;}`,
    `.mcq-container.landscape {column-gap: 10px;}`,
    `.mcq-container.portrait {row-gap: 4px; flex-direction: column}`,
    `.mcq-item {display: flex; column-gap: 4px;}`
    
  ]
})
export class MCQTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

