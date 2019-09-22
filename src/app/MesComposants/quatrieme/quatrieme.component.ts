import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quatrieme',
  template: `
    <h2>
      Quatrième composant!
    </h2>
  `,
  styles: ['h2 {color:yellow;']
})
export class QuatriemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
