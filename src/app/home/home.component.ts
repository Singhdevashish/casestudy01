import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  slides = [
    {img : "../../assets/img/slide1.jpg"},
    {img : "../../assets/img/slide2.jpg"},
    {img : "../../assets/img/slide4.jpg"}
  ];

	paused = false;
	
	@ViewChild('carousel', { static: true }) carousel: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

  
}
