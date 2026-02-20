import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-enquiry-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './enquiry-modal.html',
  styleUrls: ['./enquiry-modal.scss']
})
export class EnquiryModalComponent implements OnInit, OnDestroy {
  isOpen = false;
  enquiryForm: FormGroup;
  submitted = false;
  private modalSubscription!: Subscription;

  constructor(private fb: FormBuilder, private modalService: ModalService) {
    this.enquiryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]], // Stricter Indian Phone Regex
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {
    this.modalSubscription = this.modalService.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;

    });


    setTimeout(() => {

    }, 4000);
  }

  ngOnDestroy() {
    if (this.modalSubscription) {
      this.modalSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.modalService.close();
  }


  get f() { return this.enquiryForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.enquiryForm.valid) {
      console.log('Form Submitted (Reactive)', this.enquiryForm.value);


      setTimeout(() => {
        alert('Thank you! Our team will contact you soon.');
        this.enquiryForm.reset();
        this.submitted = false;
        this.closeModal();
      }, 500);
    } else {

      this.enquiryForm.markAllAsTouched();
    }
  }
}
