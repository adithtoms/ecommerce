import { Component,OnInit } from '@angular/core';
import { WatchService } from '../services/watch/watch.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
 
  constructor(private fs:WatchService){}
  about:string[]=[]
  ngOnInit(): void {
    this.about=this.fs.about()
  }

}
