import { Component } from '@angular/core';
import moment from 'moment';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  eventDate: string;

  share() {
    window.alert('The product has been shared!');
  }


  checkEventDate() {
    // const today = moment().set({"hour": 9, "minute": 30});
    const today = moment('2020-07-08T07:00:00');
    this.eventDate = this.getNextDate(today).toDate().toISOString();
  }

  getNextDate = (today: moment.Moment) => {
    const sunday = moment().day('Sunday').set({"hour": 9, "minute": 30});
    const wednesday =moment().day('Wednesday').set({"hour": 19, "minute": 30});
    if(today.isSameOrBefore(wednesday, 'hour') || today.isSameOrBefore(wednesday, 'minute')){
    return wednesday;
    }else if(today.isSameOrBefore(sunday, 'hour') || today.isSameOrBefore(sunday, 'minute')){
      return sunday;
    }

    if(today.isSameOrAfter(wednesday, 'hour')){
      return sunday.day(7);
    }
    if(today.isSameOrAfter(sunday, 'hour')){
      return null; // wednesday
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/