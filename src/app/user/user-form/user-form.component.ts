import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.scss' ]
})
export class UserFormComponent implements OnInit {

  public userForm: FormGroup;
  public imageSrc: any;
  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      phone: null,
    });
  }

  /* Upload image preview */
  readURL(event): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[ 0 ];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

}
