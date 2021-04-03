import {Component} from '@angular/core';
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent{
  post = [];
  faArrowAltCircleUp = faArrowAltCircleUp;
  faArrowDown = faArrowDown;
  faCircle = faCircle;
}
