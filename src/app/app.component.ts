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
      key: 'label',
      type: 'formly-label',
      templateOptions: {
        label: 'Label 1',
        attributes: {
          style: "color: green;"
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
