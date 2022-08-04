import { Component, OnInit, ViewChild } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'formly-field-signature',
  template: `
    <h4>{{ field.templateOptions?.title }}</h4>
    <div class="signature-container">
      <signature-pad [options]="signaturePadOptions" (onBeginEvent)="drawStart()" (onEndEvent)="drawComplete()"></signature-pad>
    </div>

    <div class="buttons">
      <button (click)="clearSignature()">Clear signature pad</button>
      <button (click)="savePad()">Save signature</button>
    </div>

    <div class="signature-image" *ngIf="signatureImg">
      <img src='{{ signatureImg }}' />
    </div>
  `,
  styles: [
    `.signature-container {
      border-style: dashed;
      border-width: 1px;
      margin-bottom: 20px;
      background-color: coral;
    }`,
  ]
})
export class SignatureTypeComponent extends FieldArrayType implements OnInit {
  signatureImg: string;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  signaturePadOptions: Object = {
    'minWidth': 2,
    'canvasWidth': 700,
    'canvasHeight': 300
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2);
    this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
  }
}

