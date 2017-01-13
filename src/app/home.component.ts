import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template:
   `
   <form>
    A value <input type="text" name="a" [(ngModel)]="a"/>
    <br/><br/>
    B value <input type="text" name="b" [(ngModel)]="b"/>
    <br/><br/>
    C value <input type="text" name="c" [(ngModel)]="c"/>
    <br/><br/>
    D value <input type="text" name="d" [(ngModel)]="d"/>
    <br/><br/>
    Exp value <input type="text" name="exp" [(ngModel)]="exp"/>
    <br/><br/>
    Base value <input type="text" name="base" [(ngModel)]="base"/>
    <br/><br/>
    <button (click)="calculate()">Calculate!</button>
    <br />
    {{transformedPointString}}
    <br />
    {{finishedPointString}}
    <br />
    {{extraString}}
    <br />
    </form>
    `

   ,
})
export class HomeComponent  {
  a: any;
  b: any;
  c: any;
  d: any;
  exp: any;
  base: any;
  transformedPointString: string;
  finishedPointString: string;
  extraString: string;
  behold: any;
  constructor(){
      this.a=1;
      this.b=1;
      this.c=0;
      this.d=0;
      this.exp=1;
      this.base=10;
      this.transformedPointString="";
      this.finishedPointString="";
      this.extraString="";
  }
    calculate (){

    if (this.base == 'e' || this.base == 'E'){
      this.base = Math.E;
    }
    this.a = parseFloat(this.a);
    this.b = parseFloat(this.b);
    this.c = parseFloat(this.c);
    this.d = parseFloat(this.d);
    this.exp = parseFloat(this.exp);
    this.base = parseFloat(this.base);
    var x = 1;
    var y = 0;
    x = x/this.b + this.c;
    y = y + this.d;
    this.transformedPointString ="Your transformed point is at (" + x + "," + y + ").";
    y = -this.d;
    y = y/(this.a);
    y = Math.pow(this.base, y);
    y = y/this.b;
    y = Math.pow(y, (1/this.exp));
    y = y+this.c;
    this.finishedPointString = "Your  x intercept is " + y + ". Your equation of the asymptote is x = " + this.c + ".";
    if (this.exp%2 == 0){
    this.extraString = "Your other x intercept is x = " + (this.c-(Math.abs(y-this.c)));
    }
    else{
      this.extraString = "";
    }
  }

}
