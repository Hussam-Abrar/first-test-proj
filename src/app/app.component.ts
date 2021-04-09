import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myUser = {
    userName: '',
    age: '',
    address: ''
  }
  title = 'first-test-proj';
  name = 'Hussam';
  currentVal = '';
  disabledBox = true;
  show = 'yes';
  color = "blue";
  dataloop = ['anil','peter']
  data = [
    {
      name: 'anil',
      age: '23'
    },
    {
      name: 'peter',
      age: '32'
    }
  ]
  datatable = [
    {
      name: 'anil',
      age: '23',
      cast: 'arain',
      address: 'maulana shaukat ali road'
    },
    {
      name: 'peter',
      age: '32',
      cast: 'arain',
      address: 'maulana shaukat ali road'
    },
    {
      name: 'bruce',
      age: '25',
      cast: 'arain',
      address: 'maulana shaukat ali road'
    },
    {
      name: 'jackey',
      age: '21',
      cast: 'arain',
      address: 'maulana shaukat ali road'
    },
    {
      name: 'shahzad',
      age: '24',
      cast: 'arain',
      address: 'maulana shaukat ali road'
    },
    {
      name: 'arslan',
      age: '33',
      cast: 'arain',
      address: 'maulana shaukat ali road'
    }
  ]
  getName ()
  {
    alert("hussam abrar")
  }
  myEvent(evt: any)
  {
    console.warn(evt)
  }
  getVal(val: any)
  {
    console.warn(val)
    this.currentVal=val
  }
  enableBox()
  {
    this.disabledBox=false
  }
  emptyForm() {
    this.myUser = {
      userName: '',
      age: '',
      address: ''
    }    
  }

  saveUser() {
    console.log("Username is : " + this.myUser.userName)
    console.log("Age is : " + this.myUser.age)
    console.log("Address is : " + this.myUser.address)
    // debugger
  }
}
