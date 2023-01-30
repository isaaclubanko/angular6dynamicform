import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WiseService } from '../wise.service';

import { DynamicFormResponse, DynamicFormField } from '../models/dynamic-form.model';

interface dynamicFormObject {
  fields: any[]
  title: string
  type: string
}

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  public APIDynamicForms: DynamicFormResponse[] =[];
  public selectedForm: dynamicFormObject = {
    fields: [],
    title: '',
    type: ''
  };
  public form =  new FormGroup({});
  public selectBoxOption: string = ''

  constructor(
    private wiseService: WiseService
  ) { }

  ngOnInit() {

  }
  getAPIData(){
    this.wiseService.getAccountRequirements().subscribe(data => {
      this.APIDynamicForms = data
    })
  }

  updateFormOption(): void {
    // In the future, use a map or a more elegant way of selecting this data
    // selects a form and fills out empty form data for each field
    // should be broken into two methods, one to select the form, the other to build out the actual form
    if(this.selectBoxOption !== '--' && this.selectBoxOption){
      for (let i = 0; i < this.APIDynamicForms.length; i++){
        if(this.APIDynamicForms[i].title === this.selectBoxOption){
          this.selectedForm = this.APIDynamicForms[i]
          this.selectedForm.fields.forEach(f=>{
            this.form.addControl(f.name,
              new FormControl('')
            )}
          )}
        }
        this.printSelectedForm()
      }
    }
  
    printSelectedForm(): void{
      console.log(this.form.value)
    }
}
