import { Component } from '@angular/core';
import { environment } from '../environments/environment.development';
import { ChatOpenAI } from 'langchain/chat_models/openai';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'repro-app';

  call() {
    const chatModel = new ChatOpenAI({
      modelName: 'gpt-4',
      temperature: 0.9,
      openAIApiKey: environment.OPENAI_API_KEY,
    });
    const text = 'What would be a good company name for a company that makes colorful socks?';
    
    // Using a Promise
    // This call throws immediately and doesn't wait for response
    // response looks good in the Network tab
    chatModel.predict(text).then((result: any) => {
      console.log(result);
    });

    /* 
    // original code
    // This call throws immediately and doesn't wait for response
    // response looks good in the Network tab
    // need to change signature to "async call() {"
    const result = await chatModel.predict(text);
    console.log(result); 
    */

    /* 
    // tried also running outside zone with same results
    // Don't have this code atm
    // Reference code I used when I tried
    // https://angular.io/api/core/NgZone#example

    */
  }
}
