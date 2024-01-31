import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayform',
  templateUrl: './arrayform.component.html',
  styleUrls: ['./arrayform.component.scss'],
})
export class ArrayformComponent  implements OnInit {

userarray=['Aswin','Vinit']
userlist=[
  {name:'Aswin',salary:10000,Location:'chennai'},
  {name:'Vinit',salary:10000,Location:'chennai'},

]








  constructor() { }

  ngOnInit() {}

}
