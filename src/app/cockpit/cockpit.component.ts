import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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

  @ViewChild('serverContentInput') serverContentInput : ElementRef;
  	constructor() { }

  	ngOnInit(): void {
  	}

  	onAddServers(nameInput : HTMLInputElement){
  		this.serverCreated.emit({  			
  			// name : this.newServerName,
        name : nameInput.value,
  			// content : this.newServerContent
        content : this.serverContentInput.nativeElement.value
  		});  		
  	}

	onAddBlueprint(nameInput : HTMLInputElement) {
		this.blueprintCreated.emit({  			
  			// name : this.newServerName,
        name : nameInput.value,
  			// content : this.newServerContent
        content : this.serverContentInput.nativeElement.value
  		});
	}
}
