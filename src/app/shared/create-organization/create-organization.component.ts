import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MakeorganizationService } from 'src/app/services/makeorganization.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {
  step = 1;
  constructor(private http:HttpClient, private organizationserver:MakeorganizationService){}
  MakeOrganization:FormGroup|any;
  ngOnInit(): void {
    this.MakeOrganization = new FormGroup({
      'fname':new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'cnum':new FormControl(),
      'cnic':new FormControl(),
      'validadd':new FormControl(),
      'password':new FormControl(),
      'cpassword':new FormControl(),
    })
  }
  CreateOrginzation(){
    if(this.MakeOrganization.valid){
      this.organizationserver.addorgnaization(this.MakeOrganization.value).subscribe({
        next:(val:any) =>{
          alert("Organization Added Succcessfully")
        },
        error:(err:any) =>{
          console.error(err)
        }
      })
    }
  }
  openPersonalInfoTab(){
    this.step =1;
  }
  openCompanyInfoTab(){
    this.step =2;
  }
}
