import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wishlist-display',
  standalone: true,
  imports: [],
  templateUrl: './wishlist-display.component.html',
  styleUrl: './wishlist-display.component.scss'
})
export class WishlistDisplayComponent {
  @Input() wishlist:string[] = [];
  @Output() remove = new EventEmitter<string>();

  removeItem(val:string){
    this.remove.emit(val);
  }

}
