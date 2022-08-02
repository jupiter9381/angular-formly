import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-checklist',
  template: `
    <h4>{{field.templateOptions?.label}}</h4>
    <!-- <table mat-table [dataSource]="datasource" [style]="'width: 100%'">
      <ng-container matColumnDef="no">
        <td mat-cell *matCellDef="let element"> 1 </td>
      </ng-container>

      <ng-container matColumnDef="label">
        <td mat-cell *matCellDef="let element"> {{element.label}} </td>
      </ng-container>

      <ng-container matColumnDef="checkbox">
        <td mat-cell *matCellDef="let element">
          <mat-checkbox></mat-checkbox>
        </td>
      </ng-container>

      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table> -->
    <mat-selection-list>
      <mat-list-option *ngFor="let element of datasource" [value]="element">
        <span> 1 </span>
        <span> {{element.label}} </span>

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

