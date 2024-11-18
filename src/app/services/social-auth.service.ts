import { Injectable } from '@angular/core';
import { SocialAuthService as SocialAuth, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocialAuthService {
  private userSubject = new BehaviorSubject<SocialUser | null>(null);

  constructor(private authService: SocialAuth) {
    this.authService.authState.subscribe((user) => {
      this.userSubject.next(user);
    });
  }

  public signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  public signOut(): Promise<void> {
    return this.authService.signOut();
  }

  public getUser(): Observable<SocialUser | null> {
    return this.userSubject.asObservable();
  }
}