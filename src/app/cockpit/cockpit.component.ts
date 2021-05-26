import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{name:string,content:string}>();
	@Output() blueprintCreated = new EventEmitter<{name:string,content:string}>();
	
	newServerName = '';
	newServerContent = '';
  	constructor() { }

  	ngOnInit(): void {
  	}

  	onAddServers(){
  		this.serverCreated.emit({  			
  			name : this.newServerName,
  			content : this.newServerContent
  		});  		
  	}

	onAddBlueprint() {
		this.blueprintCreated.emit({  			
  			name : this.newServerName,
  			content : this.newServerContent
  		});
	}
}
