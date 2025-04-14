import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { switchMap, map, debounceTime, of } from 'rxjs';
import { WishlistDisplayComponent } from '../wish-list/wishlist-display/wishlist-display.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule,WishlistDisplayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  form!:FormGroup;

  constructor(private fb: FormBuilder, private bookService:BookServiceService){
  }

  books:any[] = [];

  wishlist:string[] = [];


  ngOnInit(): void {
    this.form = this.fb.group({
      search: [""]
    })


    this.search.valueChanges.pipe(
      debounceTime(300),
      switchMap(search => {
        if(!search){
          return of({items:[]})
        }
        return this.bookService.searchBooks(search)

      })
    ).subscribe(searchedResults =>{
      
      this.books = searchedResults.items;
      console.log(this.books);
    }
    )

  }

  get search():FormControl{
    return this.form.get('search') as FormControl;
  }

  addToWishList(title:string){
    this.wishlist.push(title);
    console.log(this.wishlist);
  }

  removeFromWishlist(val:string){
    this.wishlist = this.wishlist.filter(item => item != val);
  }


}
