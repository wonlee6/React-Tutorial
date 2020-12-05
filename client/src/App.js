import React, { Component } from "react";
import axios from "axios";
import Customer from "./components/Customer";
import CustomerAdd from "./components/CustomerAdd";
import "./App.css";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2)
  }
});
/*
 순서
 1) constructor()

 2) componentWillMount()

 3) render()

 4) componentDidMount()

 상태 변화일 경우
 props or state => should

*/

class App extends Component {
  state = {
    customers: "",
    completed: 0
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 50);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));

  }

  callApi = async () => {
    const response = await axios.get('./api/customers');
    const body = await response.data
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
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
              {this.state.customers ? this.state.customers.map(c => {
                return (<Customer
                  key={c.id} // map 사용하기 위해 key 설정 필수
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />);
              }) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
        <CustomerAdd />
      </div >
    );
  }
}

// index.html 에서 root 에 뿌림
export default withStyles(styles)(App);
