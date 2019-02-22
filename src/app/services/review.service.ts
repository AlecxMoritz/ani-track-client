import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const httpOptions = {

}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private baseUrl: string = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  // get user reviews
  getUserReviews() {
    let reqUrl = this.baseUrl + '/user';
    return this.http.get(reqUrl);
  }

  // post review
  postReview(review: any) {
    return this.http.post(this.baseUrl, { review: review }, httpOptions)
  }

  // delete review
  deleteReview(id: number) {
    let reqUrl = this.baseUrl + `/${id}`;

    return this.http.delete(reqUrl, httpOptions);
  }

  // edit review
  putReview(review: any, id: number) {
    let reqUrl = this.baseUrl + `/${id}`;

    return this.http.put(reqUrl, { review: review}, httpOptions)
  }
}
