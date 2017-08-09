import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  // since element object is only accessible in server-element component to make it globally accessible even in app-component we add @Input() directive. As a result we can bind element in app.component.html. Basically @Input() directive allows us to bind outside the component.
  @Input('srvElement') element: {type: string, name: string, content: string};


  constructor() { }

  ngOnInit() {
  }

}
