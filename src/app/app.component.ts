import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-test';

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    const classes = ['v', 'e', 'c', 't', 'r', 'a']
    let count = 0;
    let intervalMiliseconds = 100;

    const setTimer = setInterval(() => {
    const letter = <HTMLElement>document.querySelector(`.${classes[count]}`);
    letter.classList.add('anime-letter')
    console.log(classes[count])
    intervalMiliseconds += 100;
    
    if (count == classes.length - 1) {
        console.log('sim')
        clearInterval(setTimer)
    }
    count++;
}, intervalMiliseconds)
  }

}
