import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

class Message{
  uid: string;
  body: string;
  id: string;

  constructor(){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  message: Message = new Message();
  data : any;
  user_displayName: string;
  user_avatar;
  user_mail;
  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase){
    this.user = afAuth.authState;
    this.user.subscribe(user => {
        if (!user) {
          this.user_displayName = null;        
          return;
        }
        this.user_displayName = user.displayName;
        this.user_avatar = user.photoURL;
        this.user_mail = user.email;
      }
    );
    /*
    // push data to database
    //let data = this.af.list('/messages').push(this.message);


    // get data
    //this.items = af.list('/messages');
    */

  }
  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => console.log(res));
  }
  loginTwitter(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res => console.log(res));
  }
  signOut() {
    this.afAuth.auth.signOut();
    this.user_avatar = null;
    this.user_displayName = null;
    this.user_mail = null;
  }
}
