import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'checklist',
      type: 'formly-checklist',
      templateOptions: {
        label: 'Checklist title',
        datasets: [
          {label: 'check1', value: 'check1', date: '2022'},
          {label: 'check2', value: 'check2', date: '2021'},
          {label: 'check3', value: 'check3', date: '2020'},
        ],
        showDate: true
      }
    },
    {
      key: 'signature',
      type: 'formly-field-signature',
      templateOptions: {
        title: 'Signauture',
      }
    },
    {
      key: 'label',
      type: 'formly-label',
      templateOptions: {
        label: 'Label 1',
        StyleObject: {
          color: 'green',
          fontSize: '18px',
          backgroundColor: '#000'
        }
      }
    },
    {
      key: 'paragraph',
      type: 'formly-paragraph',
      templateOptions: {
        label: 'Custom Template paragraph'
      }
    },
    {
      key: 'time',
      type: 'formly-time',
      templateOptions: {
        attributes: {
          defaultTime: '23:11'
        }
      }
    },
    {
      key: 'mcq',
      type: 'formly-mcq',
      templateOptions: {
        data: ['Question1', 'Question2', 'Question3', 'Question4'],
        title: "MCQ Title",
        orientation: 'landscape'
      }
    },
    {
      key: 'datatable',
      type: 'formly-table',
      templateOptions: {
        data: [
          {'Col1': 'Data11', 'Col2': 'Data12', 'Col3': 'Data13', 'Col4': 'Data14', 'Col5': 'Data15'},
          {'Col1': 'Data21', 'Col2': 'Data22', 'Col3': 'Data23', 'Col4': 'Data24', 'Col5': 'Data25'},
          {'Col1': 'Data31', 'Col2': 'Data32', 'Col3': 'Data33', 'Col4': 'Data34', 'Col5': 'Data35'},
          {'Col1': 'Data41', 'Col2': 'Data42', 'Col3': 'Data43', 'Col4': 'Data44', 'Col5': 'Data45'},
          {'Col1': 'Data51', 'Col2': 'Data52', 'Col3': 'Data53', 'Col4': 'Data54', 'Col5': 'Data55'}
        ],
        title: "Datatable Title",
        alternative: true
      }
    }
    // {
    //   key: 'textarea',
    //   type: 'textarea',
    //   templateOptions: {
    //     label: 'Textarea',
    //     placeholder: 'Textarea placeholder',
    //     required: true,
    //   }
    // },
    // {
    //   key: 'checkbox',
    //   type: 'checkbox',
    //   templateOptions: {
    //     label: 'Checkbox',
    //   }
    // },
    // {
    //   key: 'select',
    //   type: 'select',
    //   templateOptions: {
    //     label: 'Select',
    //     placeholder: 'Select placeholder',
    //     required: true,
    //     options: [
    //       { label: 'Option 1', value: '1' },
    //       { label: 'Option 2', value: '2' },
    //       { label: 'Option 3', value: '3' },
    //     ]
    //   }
    // },
    // {
    //   key: 'radio',
    //   type: 'radio',
    //   templateOptions: {
    //     label: 'Radio',
    //     required: true,
    //     options: [
    //       { label: 'Option 1', value: '1' },
    //       { label: 'Option 2', value: '2' },
    //     ]
    //   }
    // }
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}
