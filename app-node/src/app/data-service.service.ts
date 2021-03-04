import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

private url_category:string ="/assets/category/category.json";
private url_dining:string ="/assets/data/Dining.json";
private url_takeaway:string ="/assets/data/Take-away.json";
private url_delivery:string ="/assets/data/Delivery.json";
private url_pubs_bars:string ="/assets/data/PubsBars.json";
private url_other:string ="/assets/data/others.json";

  constructor(private http:HttpClient) {

  }

  getCategoryList()
  {
    return this.http.get(this.url_category);
  }


  getDiningList()
  {
    return this.http.get(this.url_dining);
  }

   getTakeAwayList()
  {
    return this.http.get(this. url_takeaway);
  }

 getDeliveryList()
  {
    return this.http.get(this.url_delivery);
  }

 getPubsBarsList()
  {
    return this.http.get(this.url_pubs_bars);
  }

  getCafeFoodList()
  {
   return this.http.get(this.url_pubs_bars);
  }
  getCoffeeTeaFoodList()
  {
  return this.http.get(this.url_pubs_bars);
  }

   getPizzaList()
  {
 return this.http.get(this.url_dining);
  }

   getFastFood()
  {
   return this.http.get(this.url_delivery);
  }

  getAsian()
  {
  return this.http.get(this.url_delivery);
  }

  getBakery()
  {
   return this.http.get(this.url_delivery);
  }

  getItalian()
  {
   return this.http.get(this. url_takeaway);
  }

  getSandwitch()
  {

   return this.http.get(this. url_takeaway);
  }

  getChinese()
  {
   return this.http.get(this. url_takeaway);
  }

  getPubFood()
  {
   return this.http.get(this. url_takeaway);
  }

  getOther()
  {
   return this.http.get(this. url_other);
  }
}


