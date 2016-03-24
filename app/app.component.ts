import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    currentNumber: string = "";
    currentCalcul: string = "";
    reset: boolean;

    calcul: number[] = [];
    result: number = null;
    buttons: string[] = ['1','2','3','4','5','6','7','8','9','0'];
    printNumber(numero: string){
        this.result = null;

        if(this.reset){
            this.currentCalcul = '';
            this.currentNumber = "";
            this.reset = false;
        }

        this.currentNumber += numero;
        this.currentCalcul += numero;
        console.log(this.currentNumber);
    }
    addNumbers(){
        this.calcul.push(parseInt(this.currentNumber,10));
        this.currentCalcul += '+';
        this.currentNumber = "";
    }
    printResult(){
        this.calcul.push(parseInt(this.currentNumber,10));
        console.log(this.calcul);
        for (let i = 0; i < this.calcul.length; i++) {
            this.result += this.calcul[i];
        }
        this.calcul = [];
        this.reset=true;
    }
}
