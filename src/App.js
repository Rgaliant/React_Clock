import React from 'react';
import Clock from "./Clock";
import { Button, Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { showClock: false, }

  toggleShowClock = () => {
    this.setState( state => {
      return { showClock: !state.showClock }
      })
    }

  render() {
    return (
      <div>
        <Container style={styles.container}>
          <h1>{ this.state.showClock && <Clock /> }</h1>
          <Button style={styles.button} onClick={this.toggleShowClock} color="purple">Toggle Clock</Button>
        </Container>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: "10%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
  },

  button: {
    marginLeft: "45%",
    width: "10%",
  }
}



export default App;
