import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { WiseService } from '../wise.service';


@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent extends DynamicFormComponent implements OnInit {

  constructor(    
    wiseService: WiseService
  ) { 
    super(wiseService);
  }

  ngOnInit() {
  }


  getAPIData(){
    this.wiseService.getAccountRequirements().subscribe(data => {
      this.APIDynamicForms = data
    })
  }
}
