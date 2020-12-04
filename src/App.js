import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root : {
    width : '100%',
    marginTop : theme.spacing(3),
    overflowX : "auto"
  },
  table : {
    minWidth : 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className = {classes.root}>
        <Table className = {classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
        </Paper>
    )
  }
}

// index.html 에서 root 에 뿌림
export default withStyles(styles)(App);
