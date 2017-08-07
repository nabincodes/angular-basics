import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No Server is created.';
  serverName='';
  serverCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(()=>{
      return this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + ' server was created';
  }
  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
