import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews;
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.getReviews()
  }

  onReviewPosted() {
    this.getReviews()
  }

  getReviews() {
    this.reviewService.getUserReviews().subscribe(reviews => {
      this.reviews = reviews;
    })
  }
}
