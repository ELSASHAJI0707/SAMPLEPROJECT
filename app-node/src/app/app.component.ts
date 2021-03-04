import { Component } from '@angular/core';                                                      
import { HttpClient } from '@angular/common/http';
import { Options } from "@angular-slider/ngx-slider";
import {DataServiceService} from './data-service.service';
                                                                                                               
@Component({                                                                      
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

public flagDining:any;
public flagDining1:any;
public flagTakeAway:any;
public flagTakeAway1:any;
public flagDelivery:any;
public flagDelivery1:any;
public flagPubsBars:any;
public flagPubsBars1:any;
public restaurantName:any;
public restaurantThumb:any;
public restaurantAddress:any;
public isCheckedChinese:any;
public isCheckedDining:any;
public isCheckedTakeAway:any;
public isCheckedDelivery:any;
public isCheckedPubsBars:any;
 public chineseList:any;
 public diningList:any;
 public takeAwayList:any;
 public deliveryList:any;
 public pubsBarsList:any;
 public is_delivering_now:any;
 public has_table_booking:any;
 public cuisines:any;
 public phone_numbers:any;
 public timings:any;
 public categoryList:any;
 public name:any;
 public flagCafeFood:any;
  public flagCafeFood1:any;
  public flagCoffeeTea:any;
  public flagCoffeeTea1:any;
  public flagPizza:any;
  public flagPizza1:any;
  public flagFastFood:any;
  public flagFastFood1:any;
  public flagAsian:any;
  public flagAsian1:any;
  public flagBakery:any;
  public flagBakery1:any;
  public flagItalian:any;
  public flagItalian1:any;
  public flagSandwitch:any;
  public flagSandwitch1:any;
  public flagChinese:any;
  public flagChinese1:any;
  public flagPubFood:any;
  public flagPubFood1:any;
  public flagOther:any;
  public flagOther1:any;
  public isCheckedCafeFood:any;
  public isCheckedCoffeeTea:any;
public isCheckedPizza:any;
public isFastFood:any;
public isCheckedAsian:any;
public isCheckedBakery:any;
public isCheckedItalian:any;
public isCheckedSandwitch:any;
public isCheckedPubFood:any;
public isCheckedOther:any;
public cafeFoodList:any;
public coffeeTeaList:any;
public pizzaList:any;
public fastFoodList:any;
public asianList:any;
public bakeryList:any;
public italianList:any;
public sandwitchList:any;
public pubFoodList:any;
public otherList:any;



value: number = 1;
highValue: number = 3;
 options: Options = {
 floor: 0,
 ceil: 5
 };

value1: number = 10;
highValue1: number = 40;
 options1: Options = {
 floor:0,
 ceil: 100,
 };


  
 constructor(private dataService :DataServiceService) {}                                                                  
 
 ngOnInit()
 {
 this.dataService.getCategoryList().subscribe(data =>this.categoryList=data);
 
 }

 getDiningDetailsList()
   { if(this.isCheckedDining ==true)
  { this.flagDining=false;}
  else
  {
 this.dataService.getDiningList().subscribe(data =>this.diningList=data);
 this.flagDining=true;
  } }


getDetailsDiningMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
 this.is_delivering_now=menu.restaurant.is_delivering_now;
 this.has_table_booking=menu.restaurant.has_table_booking;
 this.cuisines=menu.restaurant.cuisines;
 this.phone_numbers=menu.restaurant.phone_numbers;
 this.timings=menu.restaurant.timings;
 this.flagDining1=true;
}

getTakeAwayDetailsList()
  { if(this.isCheckedTakeAway ==true)
  { this.flagTakeAway=false;}
  else
  {
 this.dataService. getTakeAwayList().subscribe(data =>this.takeAwayList=data);
 this.flagTakeAway=true;
  } }


getDetailsTakeAwayMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
 this.is_delivering_now=menu.restaurant.is_delivering_now;
 this.has_table_booking=menu.restaurant.has_table_booking;
 this.cuisines=menu.restaurant.cuisines;
 this.phone_numbers=menu.restaurant.phone_numbers;
 this.timings=menu.restaurant.timings;
 this.flagTakeAway1=true;
}


getDeliveryDetailsList()
  { if(this.isCheckedDelivery ==true)
  { this.flagDelivery=false; }
  else
  {
 this.dataService.getDeliveryList().subscribe(data =>this.deliveryList=data);
 this.flagDelivery=true;
  } }


getDetailsDeliveryMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagDelivery1=true;
}


getPubsBarsDetailsList()
  { if(this.isCheckedPubsBars==true)
  { this.flagPubsBars=false;}
  else
  {
 this.dataService.getPubsBarsList().subscribe(data =>this.pubsBarsList=data);
 this.flagPubsBars=true;
  } }


getDetailsPubsBarsMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagPubsBars1=true;
}

getCafeFoodDetailsList()
   { if(this.isCheckedCafeFood ==true)
  { this.flagCafeFood=false;}
  else
  {
 this.dataService.getCafeFoodList().subscribe(data =>this.cafeFoodList=data);
 this.flagCafeFood=true;
  } }


getDetailsCafeFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
 this.is_delivering_now=menu.restaurant.is_delivering_now;
 this.has_table_booking=menu.restaurant.has_table_booking;
 this.cuisines=menu.restaurant.cuisines;
 this.phone_numbers=menu.restaurant.phone_numbers;
 this.timings=menu.restaurant.timings;
 this.flagCafeFood1=true;
}

getCoffeeTeaDetailsList()
   { if(this.isCheckedCoffeeTea ==true)
  { this.flagCoffeeTea=false;}
  else
  {
 this.dataService.getCoffeeTeaFoodList().subscribe(data =>this.coffeeTeaList=data);
 this.flagCoffeeTea=true;
  } }


getDetailsCoffeeTeaMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
 this.is_delivering_now=menu.restaurant.is_delivering_now;
 this.has_table_booking=menu.restaurant.has_table_booking;
 this.cuisines=menu.restaurant.cuisines;
 this.phone_numbers=menu.restaurant.phone_numbers;
 this.timings=menu.restaurant.timings;
 this.flagCoffeeTea1=true;
}


getPizzaDetailsList()
  { if(this.isCheckedPizza==true)
  { this.flagPizza=false;}
  else
  {
 this.dataService.getPizzaList().subscribe(data =>this.pizzaList=data);
 this.flagPizza=true;
  } }

getDetailsPizzaMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagPizza1=true;
}

getFastFoodDetailsList()
  { if(this.isFastFood==true)
  { this. flagFastFood=false;}
  else
  {
 this.dataService.getFastFood().subscribe(data =>this.fastFoodList=data);
 this. flagFastFood=true;
  } }


getDetailsFastFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this. flagFastFood1=true;
}

getAsianDetailsList()
  { if(this.isCheckedAsian==true)
  { this.flagAsian=false;}
  else
  {
 this.dataService.getAsian().subscribe(data =>this.asianList=data);
 this.flagAsian=true;
  } }


getDetailsAsianMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagAsian1=true;
}


getBakeryDetailsList()
  { if(this.isCheckedBakery==true)
  { this.flagBakery=false;}
  else
  {
 this.dataService.getBakery().subscribe(data =>this.bakeryList=data);
 this.flagBakery=true;
  } }


getDetailsBakeryFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagBakery1=true;
}


getItalianDetailsList()
  { if(this.isCheckedItalian==true)
  { this.flagItalian=false;}
  else
  {
 this.dataService.getItalian().subscribe(data =>this.italianList=data);
 this.flagItalian=true;
  } }


getDetailsItalianFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagItalian1=true;
}

getSandwitchDetailsList()
  { if(this.isCheckedSandwitch==true)
  { this.flagSandwitch=false;}
  else
  {
 this.dataService.getItalian().subscribe(data =>this.sandwitchList=data);
 this.flagSandwitch=true;
  } }


getDetailsSandwitchFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagSandwitch1=true;
}


getChineseDetailsList()
  { if(this.isCheckedChinese==true)
  { this.flagChinese=false;}
  else
  {
 this.dataService.getChinese().subscribe(data =>this.chineseList=data);
 this.flagChinese=true;
  } }


getDetailsChineseFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagChinese1=true;
}

getPubFoodDetailsList()
  { if(this.isCheckedPubFood==true)
  { this.flagPubFood=false;}
  else
  {
 this.dataService.getPubFood().subscribe(data =>this.pubFoodList=data);
 this.flagPubFood=true;
  } }


getDetailsPubFoodFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagPubFood1=true;
}

getOtherDetailsList()
  { if(this.isCheckedOther==true)
  { this.flagOther=false;}
  else
  {
 this.dataService.getOther().subscribe(data =>this.otherList=data);
 this.flagOther=true;
  } }


getDetailsOtherFoodMenu(menu:any)
{
this.restaurantName=menu.restaurant.name
this.restaurantThumb=menu.restaurant.thumb;
this.restaurantAddress=menu.restaurant.location.locality_verbose;
this.is_delivering_now=menu.restaurant.is_delivering_now;
this.has_table_booking=menu.restaurant.has_table_booking;
this.cuisines=menu.restaurant.cuisines;
this.phone_numbers=menu.restaurant.phone_numbers;
this.timings=menu.restaurant.timings;
this.flagOther1=true;
}



}


