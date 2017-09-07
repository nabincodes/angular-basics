import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  @Input() textContent: string;

  user: any = {
    name: 'Marry Doe',
    address: 'Baker Street, England',
    profession: 'Bank Manager',
    imgurl: 'https://i.pinimg.com/736x/a2/e1/8c/a2e18cbfbcaa8756fe5b40f472eeff45--profile-picture-profile-pics.jpg'
  }

  constructor() { }

  ngOnInit() {
  }

}
