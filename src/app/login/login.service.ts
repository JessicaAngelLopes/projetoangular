import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from './login.model';
import { map, catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:3000/login"

  constructor( private snackBar: MatSnackBar, private http: HttpClient) {
  }
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg,'X', {
      duration:9000,
      verticalPosition: "top",
      panelClass: isError? ['errorMsg']: ['sucessMsg']
    });

  }
  create (login:Login): Observable<Login>{
    return this.http.post<Login>(this.baseUrl,login).pipe(
      map((obj) => obj),
      catchError(e => this.errorMsg(e))
    )
  }
  errorMsg (e:any): Observable<any>{
      console.log (e);
      this.showMessage ('Erro', true);
      return EMPTY
  }
  showMessege(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 6000,
      verticalPosition: "bottom"
    });
  }
  
 /* create(login: Login): Observable<Login> {
    return this.http.post<Login>(this.baseUrl, login)
  }*/
  ListarLogin(): Observable<any> {
    return this.http.get("http://localhost:3000/login/")
  }
}
