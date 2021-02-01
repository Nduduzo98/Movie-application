import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieUrl= "http://localhost:4000/movieEntry"
  constructor(private http:HttpClient) { }

  public getMovies(){
    return this.http.get(this.newMethod());
  }
  private newMethod(): string {
    return "http://localhost:4000/movies";
  }

  createEntry(movie:any){
    return this.http.post<any>(this.movieUrl,movie)
  }
  public viewtheMovie(){
    return this.http.get(this.viewMovie());
  }
 private viewMovie(): string{
    return "http://localhost:4000/:Title";
  }
  updateMovie(Title:any,updatedMovie:any ){
    const url = `http://localhost:4000/movies/`+Title ;
    return this.http.put(url,updatedMovie);
  }
}
