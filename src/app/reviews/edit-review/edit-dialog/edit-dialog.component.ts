import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ReviewService } from 'src/app/services/review.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  editReview: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<EditDialogComponent>,
    private reviewService: ReviewService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.editReview = this.fb.group({
      show: new FormControl(this.data.show),
      genre: new FormControl(this.data.genre),
      rating: new FormControl(this.data.rating),
      text: new FormControl(this.data.text),
      isFavorite: new FormControl(this.data.isFavorite)
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.reviewService.putReview(this.editReview.value, this.data.id).subscribe(data => {
      console.log(data);
      this.onNoClick();
    })
  }
}