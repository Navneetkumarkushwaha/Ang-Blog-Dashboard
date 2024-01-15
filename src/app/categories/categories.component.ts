import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  onSubmit(form:any):void{
    if (form.valid) {
      console.log('Form submitted:', form.value);
      // You can send the form data to your server or perform other actions here
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
