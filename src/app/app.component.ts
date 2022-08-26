import {Component} from '@angular/core';
import {faBagShopping} from "@fortawesome/free-solid-svg-icons/faBagShopping";
import {faArrowRight, faMinus, faPlay, faPlus, faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {
  fadeInLeftAnimation,
  fadeInLeftOnEnterAnimation, fadeInRightAnimation,
  fadeInRightOnEnterAnimation, fadeInUpAnimation,
  fadeInUpOnEnterAnimation,
  slideInDownOnEnterAnimation,
  slideInLeftOnEnterAnimation, slideInRightAnimation,
  slideInRightOnEnterAnimation, slideInUpAnimation,
  slideInUpOnEnterAnimation, zoomInAnimation,
  zoomInOnEnterAnimation
} from "angular-animations";
import {animate} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInDownOnEnterAnimation({animateChildren: "together"}),
    slideInLeftOnEnterAnimation({animateChildren: "together"}),
    slideInRightAnimation({animateChildren: "together"}),
    slideInRightOnEnterAnimation({animateChildren: "together"}),
    slideInUpOnEnterAnimation({animateChildren: "together"}),
    slideInUpAnimation({animateChildren: "together"}),
    slideInUpAnimation({animateChildren: "together"}),
    fadeInUpOnEnterAnimation({animateChildren: "together"}),
    fadeInUpAnimation({animateChildren: "together"}),
    zoomInOnEnterAnimation(),
    zoomInAnimation(),
    fadeInRightOnEnterAnimation({animateChildren: "together"}),
    fadeInRightAnimation({animateChildren: "together"}),
    fadeInLeftAnimation({animateChildren: "together"})
  ]
})
export class AppComponent {
  items = [
    './assets/images/cream1.png',
    './assets/images/cream2.png',
    './assets/images/cream3.png',
    './assets/images/cream4.png',
    './assets/images/cream5.png'
  ];

  companies = [
    './assets/images/company1.png',
    './assets/images/company2.png',
    './assets/images/company3.png',
    './assets/images/company4.png',
  ]

  igPictures = [
    './assets/images/ig2.png',
    './assets/images/ig3.png',
    './assets/images/ig4.png',
    './assets/images/ig5.png',
  ]


  bag = faBagShopping;
  arrowRight = faArrowRight;
  play = faPlay;
  minus = faMinus;
  plus = faPlus;
  quote = faQuoteLeft;
  send = faPaperPlane;

  title = 'dribble-test';
  animateTrending = false;
  animateMoreDetails = false;
  animateMoreContent = false;
  animateFaq = false;
  animateComments = false;
  animateIg = false;
  animateFooter = false;

  onIntersection(event: IntersectionObserverEntry[]) {
    console.log(event[0]);
    if(event[0].isIntersecting) {
      this.animateTrending = true;
    }
  }

  animateMoreInfo(event: IntersectionObserverEntry[]) {
    if(event[0].isIntersecting) {
      this.animateMoreDetails = true;
    }
  }

  animateContent2(event: IntersectionObserverEntry[]) {
    if(event[0].isIntersecting) {
      this.animateMoreContent = true;
    }
  }

  animateFaqFn(event: IntersectionObserverEntry[]) {
    if(event[0].isIntersecting) {
      this.animateFaq = true;
    }
  }

  animateCommentFn(event: IntersectionObserverEntry[]) {
    if(event[0].isIntersecting) {
      this.animateComments = true;
    }
  }

  animateIgFn(event: IntersectionObserverEntry[]) {
    if(event[0].isIntersecting) {
      this.animateIg = true;
    }
  }

  animateFooterFn(event: IntersectionObserverEntry[]) {
    if(event[0].isIntersecting) {
      this.animateFooter = true;
    }
  }
}
