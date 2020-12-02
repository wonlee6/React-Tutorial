import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name' : '홍길동',
  'birthday' : '960202',
  'gender' : '남자',
  'job' : '대학생'
}
class App extends Component {
  render() {
    return (
     <Customer 
        name = {customer.name}
        birthday = {customer.birthday}
        gender = {customer.gender}
        job = {customer.job}
     />
    )
  }
}

// index.html 에서 root 에 뿌림
export default App;
