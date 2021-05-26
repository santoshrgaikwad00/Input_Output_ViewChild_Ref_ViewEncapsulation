import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  	ServerElements = [{ type : 'server', name : 'Test server', content : 'this the test only' }];

  	onServerAdded(serverData: {name: string, content : string}){
  		this.ServerElements.push({
  			type : 'server',
  			name : serverData.name,
  			content : serverData.content
  		});
  	}

	onBlueprintAdded(serverData: {name: string, content : string}) {
		this.ServerElements.push({
  			type : 'blueprint',
  			name : serverData.name,
  			content : serverData.content
  		});
	}
}
