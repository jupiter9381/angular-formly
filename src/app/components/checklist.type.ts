import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checklist',
  template: `
    <h4>{{field.templateOptions?.label}}</h4>
    <mat-selection-list>
      <mat-list-option *ngFor="let element of datasource; let i = index" [value]="element">
        <span> {{ i + 1}} </span>
        <span> {{element.label}} </span>
        <span *ngIf="field.templateOptions?.showDate"> {{element.date}} </span>
      </mat-list-option>
    </mat-selection-list>
  `,
  styles: [
    `h4 {margin-bottom: 0px;}`,
    `.mat-list-text {
        flex-direction: row !important;
        justify-content: space-between !important;
        margin-right: 20px;
      }`],
  encapsulation: ViewEncapsulation.None,
})
export class ChecklistTypeComponent extends FieldArrayType implements OnInit {

  displayedColumns: string[] = ['no', 'label', 'checkbox'];
  datasource : any[] = [];
  ngOnInit() {
    console.log(this.field)
    this.datasource = this.field.templateOptions?.datasets;
    console.log(this.datasource);
  }
}

