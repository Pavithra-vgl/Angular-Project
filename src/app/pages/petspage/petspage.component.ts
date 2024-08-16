import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';


@Component({
  selector: 'app-petspage',
  templateUrl: './petspage.component.html',
  styleUrls: ['./petspage.component.css']
})
export class PetspageComponent implements OnInit {
petsform = new FormGroup({
  name : new FormControl('',Validators.required),
  mobile : new FormControl('',Validators.required),
  address : new FormControl('',Validators.required),
});
get name() { return this.petsform.get('name')};
get mobile() { return this.petsform.get('mobile')};
get address() { return this.petsform.get('address')};
saveReactive(){
  console.log(this.petsform.value);
}

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getPetId:any;
  petData:any;
  ngOnInit(): void {
    this.getPetId =this.param.snapshot.paramMap.get('id');
    console.log(this.getPetId,'getpet');
    if(this.getPetId)
    {
     this.petData = this.service.petDetails.filter((value)=>{
      return value.id==this.getPetId;
      });
      console.log(this.petData,'petData>>')

    }
  }

}
