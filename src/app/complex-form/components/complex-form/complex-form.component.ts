import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrl: './complex-form.component.scss',
})
export class ComplexFormComponent implements OnInit {
onSubmitForm() {
throw new Error('Method not implemented.');
}
  mainForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initMainForm();
  }

  initMainForm(): void {
    this.mainForm = this.formBuilder.group({});
  }
}
