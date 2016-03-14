import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    currentNumber: string = "";
    calcul: number[] = [];
    result: number = 0;
    buttons: string[] = ['1','2','3','4','5','6','7','8','9','0'];
    printNumber(numero: string){
        this.currentNumber += numero;
        console.log(this.currentNumber);
        console.log(this.calcul);
    }
    addNumbers(){
        this.currentNumber = "";
        this.calcul.push(parseInt(this.currentNumber,10));
    }
    printResult(){
        for (let i = 0; i < this.calcul.length; i++) {
            this.result += this.calcul[i];
        }
    }
}
