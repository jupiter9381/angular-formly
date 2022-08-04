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
