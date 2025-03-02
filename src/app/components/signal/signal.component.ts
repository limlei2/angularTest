import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal("Lei");
  lastName = signal<string>("Lim");
  courseName: string = "Angular";
  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(()=>{
      this.courseName = "React.js"
      this.firstName.set("New Name")
    }, 5000)
  }

  onIncrement(){
    this.rollNo.update(oldValue => oldValue + 1);
  }

}
