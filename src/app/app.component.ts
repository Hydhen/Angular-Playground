import { Component, VERSION } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private userBS = new BehaviorSubject<any>(undefined);
  public user$ = this.userBS.asObservable();

  public selected(id: number): void {
    this.userBS.next({ id: id });
  }
}
