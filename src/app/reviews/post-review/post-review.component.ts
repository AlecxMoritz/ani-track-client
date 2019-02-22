import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ReviewService } from 'src/app/services/review.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.css']
})
export class PostReviewComponent implements OnInit {
  review: FormGroup;
  @Output() reviewPosted = new EventEmitter<any>()

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService,
    public dialogRef: MatDialogRef<PostReviewComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.review = this.fb.group({
      show: new FormControl(),
      genre: new FormControl(),
      rating: new FormControl(),
      text: new FormControl()
    })
  }

  postReview() {
    this.reviewService.postReview(this.review.value).subscribe(data => {
      this.review.reset()
      this.reviewPosted.emit();
      this.onNoClick();
    })
  }

}
