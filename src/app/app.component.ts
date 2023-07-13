import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of ,from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first';

  /*myObservable = new Observable((observer)=>{
    console.log('Observable starts');
    observer.next('1')
    observer.next('2')
    setTimeout(()=>{
      observer.next('3')
    },3000)
    observer.next('4')
    observer.complete()
    observer.error(new Error('Something is wrong! Please try again'))
    observer.next('5')
    observer.next('6')
    observer.next('7')
  })*/

  /*myObservable1 = Observable.create((observer)=>{
    observer.next('A')
    observer.next('B')
    observer.next('C')
    //observer.error(new Error('Something is wrong'))
    observer.next('D')
    observer.complete()
    observer.next('E')

  })*/

  array1 = [2,5,9,15,24]
  array2 = ['A','B','C','D']

  //myObservable2 = of(this.array1,this.array2,45,'Salam')

  myObservable3 = from(this.array1)


 ngOnInit(): void {
   this.myObservable3.subscribe((value)=>{
    console.log(value);
   },(error)=>{
      console.log(error.message)
   },()=>{
    console.log('Your Observable is completed');
    
   })

}

}
