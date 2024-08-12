import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding
  //los dos trabajan juntos
  //@Input({required: true}) size!: {width: string; height: string}
  //este output essat destinado a cambiar el valor de entrada
  //@Output() sizeChange = new EventEmitter<{width: string, height: string}>

  //otra manera
  size =  model.required<{width: string; height: string}>();//esto hara que esta propiedad seta vinculable en 2 sentidos input y output

  /**
   * restablecer sus dimensiones
   */
  onReset() {
    // ...
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100'
    // });

    //con signal
    this.size.set({
      width: '200',
       height: '100'
    });
  }
}
