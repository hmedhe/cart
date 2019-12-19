import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products: any = [
    { id: 0, name: "shoes", price: 450, availability: "available", ItemCount: 0 },
    { id: 1, name: "watch", price: 550, availability: "available", ItemCount: 0 },
    { id: 2, name: "bag", price: 250, availability: "available", ItemCount: 0 },
    { id: 3, name: "haedphone", price: 255, availability: "available", ItemCount: 0 },
    { id: 4, name: "trimmer", price: 300, availability: "available", ItemCount: 0 },
    { id: 5, name: "T-shirt", price: 650, availability: "available", ItemCount: 0 },
    { id: 6, name: "shirt", price: 750, availability: "available", ItemCount: 0 },
    { id: 7, name: "jeans", price: 850, availability: "available", ItemCount: 0 },
    { id: 8, name: "flip-flop", price: 150, availability: "available", ItemCount: 0 },
    { id: 9, name: "perfume", price: 1150, availability: "available", ItemCount: 0 },
  ]
  Carts: any = []
  constructor() { }

  ngOnInit() {
  }
  AddCart(data) {

    this.Carts.push(data)

    localStorage.setItem("carts", JSON.stringify(this.Carts))
    Swal.fire('success !', 'Added to the cart!', 'success')
  }
}
