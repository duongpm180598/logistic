import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

import { HttpBackend, HttpClient } from '@angular/common/http';
import { Credentials, CredentialsService } from './credential.service';
import { environment } from '@env/environment';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loginUrl = environment.serverUrl + '/login';

  constructor(
    private httpClient: HttpClient,
    private credentialsService: CredentialsService
  ) {}

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login(context: LoginContext): Observable<Credentials | null> {
    return this.httpClient
      .post<any>(this.loginUrl, {
        Username: context.username,
        Password: context.password,
      })
      .pipe(
        map((data: any) => {
          if (data.objUser) {
            const objUser = data.objUser;
            delete objUser.Id;
            delete objUser.Password;
            delete objUser.SetPassword;
            const credential = {
              token: data.objUser.ID,
              objUser,
              objTSTC: data.objTSTC,
            };
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.credentialsService.setCredentials(
              credential,
              context.remember
            );
            return credential;
          } else {
            this.credentialsService.setCredentials();
            return null;
          }
        })
      );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.credentialsService.setCredentials();
    return of(true);
  }
}
