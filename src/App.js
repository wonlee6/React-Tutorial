import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [
  {
  'id' : 1,
  'image' : '123.jpg',
  'name' : '홍길동',
  'birthday' : '960202',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : '1.jpg',
  'name' : '이순신',
  'birthday' : '121516',
  'gender' : '남자',
  'job' : '영웅'
},
{
  'id' : 3,
  'image' : '12.jpg',
  'name' : '유이',
  'birthday' : '921205',
  'gender' : '여자',
  'job' : '여배우'
}
]
class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
              key = {c.id} // map 사용하기 위해 key 설정 필수 
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
            );
          })
        }
      </div>
    )
  }
}

// index.html 에서 root 에 뿌림
export default App;
