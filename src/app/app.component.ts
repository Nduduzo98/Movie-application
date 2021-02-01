import { Component, OnInit } from '@angular/core';
import {MoviesService} from './movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  movies : any = [];
  Title: any= [];
  createMovie:any={};
  updateMovies: any = {};
  constructor(public moviesS:MoviesService,
    private router:Router){}

  
  ngOnInit():void{
     this.moviesS.getMovies().subscribe(data =>{
      this.movies = data;
    });
    this.moviesS.viewtheMovie().subscribe(function (data: any = []) {
      })
  }
  
  createEntry(){
    this.moviesS.createEntry(this.createMovie).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
  updateMovie(Id:any){
    
    this.router.navigate(['update-movies',Id])
  }
}
