import React, { Component } from 'react';
import styles from './app.scss'
import SmileIcon from './assets/svg/smile-regular.svg';
import FrownIcon from './assets/svg/frown-regular.svg';
class App extends Component {


  render() {
    return (
      <section className={styles.jumbotron}>
        <h1 className={styles.typewriter}>Raising a Puppy</h1>
        <div className={styles.facecontainer}>
          <div className={styles.iconbutton}>
            <h3>Fun</h3>
            <SmileIcon width={80} height={80}/>
          </div>
          <div><h3>&</h3></div>
          <div className={styles.iconbutton}>
            <h3>Not so Fun</h3>
            <FrownIcon width={80} height={80}/>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
