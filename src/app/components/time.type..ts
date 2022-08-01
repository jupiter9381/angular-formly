import { Component, OnInit } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-time',
  template: `
    <div class="ngx-timepicker-field-example">
        <ngx-timepicker-field [format]="24" [defaultTime]="'23:11'"></ngx-timepicker-field>
    </div>
`,
})
export class TimeTypeComponent extends FieldArrayType implements OnInit {

  ngOnInit() {
  }
}

