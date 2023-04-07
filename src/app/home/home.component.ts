import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private intervalId1: NodeJS.Timeout;
  private intervalId2: NodeJS.Timeout;
  private counter = 0;
  private list: string[] = [];
  public screenClass = 'screen-blue';
  public started = false;
  public text = 'Start';
  constructor() {
  }

  start() {
    this.started = true;
    this.text = 'Started';
    this.intervalId1 = setInterval(() => {
        // Toggle the background color between red and blue
        const bgColor = this.counter % 2 === 0 ? "red" : "blue";
        this.screenClass = `screen-${bgColor}`
    
        // Increment the counter
        this.counter++;
    }, 1);

    this.intervalId2 = setInterval(() => {
        // Insert a random 200000 character string into the list
        const randomString = this.generateRandomString(200000);
        this.list.push(randomString);
    }, 1);

    setTimeout(()=>{
      this.text = 'Start';
      this.started = false;
      clearInterval(this.intervalId1);
      clearInterval(this.intervalId2);
      this.list = [];
      this.counter = 0;
      document.body.style.backgroundColor = "initial";

    }, 30000)
  }


  private generateRandomString(length: number): string {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
