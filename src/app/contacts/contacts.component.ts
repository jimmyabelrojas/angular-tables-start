import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  @Input() contacts: Array<any>; // contacts: object[]
  salutations: Array<string>;
  constructor() {
  }

  ngOnInit() {
    console.log(this.contacts);
    this.salutations = this.contacts.map( (c) => {
      /*if(c.gender == 'F'){
        return 'Ms. ' + c.lastname;}
      else{
        return 'Mr. ' + c.lastname;}*/
      return (c.gender === 'F' ? 'Ms. ' : 'Mr. ') + c.lastname;
    });
  }

}
