import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 searchitem:string='';

  constructor(private router:ActivatedRoute,private route:Router){}



  ngOnInit(): void {
    this.router.params.subscribe(parems=>{
      if(parems['searchitem'])
      this.searchitem=parems['searchitem']})
    
  }

  search():void{
    if(this.searchitem)
this.route.navigateByUrl('search/'+this.searchitem)

  }

}
