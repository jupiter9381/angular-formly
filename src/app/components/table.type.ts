import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-table',
  template: `
  <div [ngStyle]="field.templateOptions?.StyleObject">
    <h4>{{field.templateOptions?.title}}</h4>
    <table mat-table [dataSource]="dataSource" [ngClass]="{'alternative': field.templateOptions?.alternative}">
      <ng-container matColumnDef="{{header}}" *ngFor="let header of displayedColumns;">
        <th mat-header-cell *matHeaderCellDef> {{header}} </th>
        <td mat-cell *matCellDef="let element"> {{element[header]}} </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>

  `,
  styles: [
    `table {width: 100%;}`,
    `.alternative .mat-row:nth-child(odd) { background-color: rgba(0,0,0,.05);}`
  ]
})
export class TableTypeComponent extends FieldArrayType implements OnInit {
  displayedColumns: string[] = [];

  dataSource = [];
  ngOnInit() {
    Object.keys(this.field.templateOptions?.data[0]).map((key) => {
      this.displayedColumns.push(key);
    })
    this.dataSource = this.field.templateOptions?.data;
  }
}

