import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { DynamicFormResponse, DynamicFormField } from '../models/dynamic-form.model';


@Injectable({
  providedIn: 'root'
})
export class WiseService {
  // TODO: type checking API REsponse, error handling, all goes here
  // TODO: Impliment Adapter pattern for future API Flexibility
  getAccountRequirements(): Observable<DynamicFormResponse[]>  {
    return this.http.get(
      `http://localhost:3000/account-requirements`
    )
  }

  constructor(
    private http: HttpClient
  ) { }
}
