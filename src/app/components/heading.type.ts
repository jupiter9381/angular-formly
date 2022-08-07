import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-heading',
  template: `
    <ng-container [ngSwitch]="field.templateOptions?.type">
      <h1 *ngSwitchCase="'h1'" [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.title}}</h1>
      <h2 *ngSwitchCase="'h2'" [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.title}}</h2>
      <h3 *ngSwitchCase="'h3'" [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.title}}</h3>
      <h4 *ngSwitchCase="'h4'" [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.title}}</h4>
      <h5 *ngSwitchDefault [ngStyle]="field.templateOptions?.StyleObject">{{field.templateOptions?.title}}</h5>
    </ng-container>
`,
})
export class HeadingTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

