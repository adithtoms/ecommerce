import { Component,OnInit } from '@angular/core';
import { WatchService } from '../services/watch/watch.service';

@Component({
  selector: 'app-courosel',
  templateUrl: './courosel.component.html',
  styleUrls: ['./courosel.component.css']
})
export class CouroselComponent implements OnInit {
  constructor(private fs:WatchService){}
  slider:string[]=[]

  ngOnInit(): void {
    this.slider=this.fs.slider()
  }

}
