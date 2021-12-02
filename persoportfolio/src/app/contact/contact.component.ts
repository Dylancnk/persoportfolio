import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  FormData: FormGroup | any;

  constructor(private builder: FormBuilder, private contact: ContactService) { }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Message: new FormControl()
  })
  }

  onSubmit() {
    this.contact.PostMessage(this.FormData.value).subscribe(response => {
      console.log('response from submit btn', response);
    })
  }
}
