import { Component,OnInit } from '@angular/core';
import { WatchService } from '../services/watch/watch.service';
import { Watches } from '../shared/model/watch';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  watches:Watches[]=[]
  
 user:any

  constructor(private fs:WatchService,private router:ActivatedRoute,private ds:DataServiceService)
  {this.user=this.ds.currentUser}
  ngOnInit(): void {
    this.router.params.subscribe(parems=>{
      if(parems['searchitem'])
      this.watches=this.fs.getAll().filter(watch=>watch.name.toLowerCase().includes(parems['searchitem'].toLowerCase()))
      else
      this.watches=this.fs.getAll()

    })
   
  }

}
