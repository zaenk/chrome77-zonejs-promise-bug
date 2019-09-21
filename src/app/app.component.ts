import { Component } from '@angular/core';

import * as openpgp from 'openpgp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chrome77-zonejs-promise-bug';

  constructor() {
    console.log(navigator.userAgent);
    const options = {
      userIds: [{ name:'Jon Smith', email:'jon@example.com' }],
      rsaBits: 4096,
      passphrase: 'super long and hard to guess secret'
    };
    openpgp.generateKey(options).then(key => {
      const privkey = key.privateKeyArmored;
      return privkey;
    }).then(armoredPrivKey => {
      console.log('devtools needed a block for breakpoints');
      return openpgp.key.readArmored(armoredPrivKey);
    }).then(privKeyChain => {
      console.log('in chrome 77 this point is never reached, because it throws Method Promise.prototype.then called on incompatible receiver [object Object]');
      console.log(privKeyChain.keys[0].getKeyId());
    });
  }
}
