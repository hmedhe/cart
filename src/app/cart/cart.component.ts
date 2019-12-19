import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  Carts: any = [];
  TotalAmount: number;
  constructor() {

    this.Carts = JSON.parse(localStorage.getItem("carts"))

    this.subTotal()
  }

  ngOnInit() {
  }
  onMinusItem(index) {

    if (this.Carts[index].ItemCount > 1) {
      this.Carts[index].ItemCount = --this.Carts[index].ItemCount

      this.Carts[index].Inputrate = this.Carts[index].price * this.Carts[index].ItemCount

      this.subTotal()
    }
  }
  onPlusItem(index) {

    this.Carts[index].ItemCount = ++this.Carts[index].ItemCount


    this.Carts[index].Inputrate = this.Carts[index].price * this.Carts[index].ItemCount

    this.subTotal()
  }
  RemoveItem(index) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to remove item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.Carts.splice(index, 1);
        localStorage.setItem("carts", JSON.stringify(this.Carts))
        this.subTotal()
        Swal.fire(
          'Deleted!',
          // 'Your imaginary file has been deleted.',
          'success'
        )

      }

    })
  }
  subTotal() {

    this.TotalAmount = 0;
    for (let i = 0; i < this.Carts.length; i++) {

      if (this.Carts[i].Inputrate != undefined) {


        this.TotalAmount += parseFloat(this.Carts[i].Inputrate)

      }

    }

  }
}
