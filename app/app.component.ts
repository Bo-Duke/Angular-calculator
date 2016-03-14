import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    calcul: string = "";
    result: string = "";
    buttons: string[] = ['1','2','3','4','5','6','7','8','9','0','+'];
    printNumber(numero: string){
        this.calcul += numero;
    }
    printResult(){
        this.result = this.calcul;
    }
}
