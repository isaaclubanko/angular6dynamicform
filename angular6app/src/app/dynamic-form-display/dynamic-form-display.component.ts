import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicFormResponse, DynamicFormField } from '../models/dynamic-form.model';


@Component({
  selector: 'app-dynamic-form-display',
  templateUrl: './dynamic-form-display.component.html',
  styleUrls: ['./dynamic-form-display.component.css']
})
export class DynamicFormDisplayComponent implements OnInit {


  @Input() fields: DynamicFormField[] = [
    {
      name: '',
      group: [{
        key: '',
        name: '',
        type: ''
        refreshRequirementsOnChange: false
      }]
    }
  ];

  @Input() form!: FormGroup
  constructor() { }

  ngOnInit() {
  }

}
