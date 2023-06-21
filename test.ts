import { Component, OnInit } from '@angular/core';
import { Observable, Observer, map, of } from 'rxjs';
@Component({
  template: ``,
})
export class Test implements OnInit {
  users = [
    { id: 1, username: 'u1', gender: 'male' },
    { id: 2, username: 'u2', gender: 'male' },
    { id: 3, username: 'u3', gender: 'female' },
  ];

  users$ = of(this.users);
  usernames$ = this.users$.pipe(
    map((users) => users.map((user) => user.username))
  );

  ngOnInit(): void {
    this.users$.subscribe((users) => console.log(users));
  }

  sequenceSubscribe = (observer: Observer<number>) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    return { unsubscribe() {} };
  };

  sequence = new Observable(this.sequenceSubscribe);
}
