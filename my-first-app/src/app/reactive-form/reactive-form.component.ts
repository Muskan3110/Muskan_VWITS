import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
   //Reactive form doesn't require a model class 
   //we create and instantiate the fields in component class itself

export class ReactiveFormComponent implements OnInit{
  //Reactive form using OnInit() method
  // myForm!: FormGroup;

  // ngOnInit(): void {
  //   this.myForm = new FormGroup({
  //     name : new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     password: new FormControl('', Validators.required)
  //   })
  // }

  // onSubmit(){
  //   console.log(this.myForm.value)
  // }

  //Second way to use Reactive Form without using ngOnIt interface

  productForm!: FormGroup; //"!" means that without initialising with a default value

  constructor(private fb:FormBuilder) //instead of ngOnIt we are using  constructor
  {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [null,[Validators.required,Validators.min(10.00)]],
      description:[''],
      category:['',Validators.required]
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 onSubmit(){
  if(this.productForm.valid){
    console.log(' Product data is ', this.productForm.value)
    alert(' Product saved !!')
  }
  else{
    this.productForm.markAllAsTouched();
  }
 }

 get f(){
  return this.productForm.controls;
 }

}
