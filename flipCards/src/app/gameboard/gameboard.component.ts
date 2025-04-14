import { Component, OnInit } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-gameboard',
  standalone: true,
  imports: [],
  templateUrl: './gameboard.component.html',
  styleUrl: './gameboard.component.scss'
})
export class GameboardComponent implements OnInit {

  emojis = [ '🐵', '🐶', '🦊', '🐱', '🦁', '🐯', '🐴', '🦄', '🦓', '🦌', '🐮', '🐷', '🐭', '🐹', '🐻', '🐨', '🐼', '🐽', '🐸', '🐰', '🐙' ];
  gameStatus = false; // true = start game
  gameEmojis:string[] = [];
  gameCards: Card [] = [];
  cardsFlipped:Card [] = [];

  matched:number = 0;

  ngOnInit(): void {
    this.initalizeGame();

  }

  initalizeGame(){
    this.gameStatus = true;
    const randomEmojis:string[] = this.randomEmojis();
    this.gameEmojis = randomEmojis.concat(randomEmojis);
    this.gameEmojis.sort(()=> Math.random()-.5);
    this.gameCards = this.gameEmojis.map(emoji => ({emoji,flipped: true, matched:false}));
    setTimeout(()=>{
      this.gameCards.forEach(card => card.flipped = false);
    }, 2000);

  }


  randomEmojis(): string[]{ // 8 random emojis 
    const random:string[] = [];
    for(let i=0; i < 8; i++){
      const randomIndex = Math.floor(Math.random() * this.emojis.length); // making sure we dont repeat random indexs 
      random.push(this.emojis[randomIndex]);
    }
    return random;
  }

  flipCard(card:Card){

    if(card.flipped || card.matched || this.cardsFlipped.length == 2){
      return; 
    }

    card.flipped = true;
    this.cardsFlipped.push(card);
    //checking if we got a matching card 

    if(this.cardsFlipped.length == 2){
      const [one,two] = this.cardsFlipped;

      if(one.emoji == two.emoji){
        one.matched = true;
        two.matched = true;
        this.matched++;
        if(this.matched == 7){
          this.resetGame();
        }
        this.cardsFlipped = [];
      }else{ // they dont match 
        one.flipped = false;
        two.flipped = false;
        this.cardsFlipped = [];
      }

    }
    
  }

  resetGame(){
    this.gameStatus = false;
  }

  playAgain(){
    this.initalizeGame();
  }

}
