import { Injectable } from '@angular/core';
import { MathOperation } from '../models/math-operation';

@Injectable({
  providedIn: 'root'
})
export class MathOperationService {
  mathOperations:MathOperation[]=[
    {
      id:1,
      operation:"addition",
      symbol:"+",
      image:"add-outline"
    },
    {
      id:2,
      operation:"Soustraction",
      symbol:"-",
      image:"remove-outline"
    },
    {
      id:3,
      operation:"Multiplication",
      symbol:"x",
      image:"close-outline"
    },
    {
      id:4,
      operation:"Division",
      symbol:"/",
      image:"pencil"
    }
  ];

  constructor() { }

  getAllMathOperation(){
    return this.mathOperations;
  }

  getMathOperationById(id){
    return this.mathOperations.find(element=>element.id===id);
  }


}
