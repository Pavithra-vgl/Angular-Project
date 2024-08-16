import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent {

  constructor(private service:OrderDetailsService) { }
  petData:any;
  ngOnInit(): void{ 
    this.petData=this.service.petDetails;
  }
}
