import React, { Component } from 'react';
import firebaseDatabase from '../../firebase'
export default class Service extends Component {
  constructor(props) {
    super(props)

  }


  static create(state) {
    console.log('????' + JSON.stringify(state))
      console.log('HITTING', firebaseDatabase);

      firebaseDatabase.database.ref('test1').set({
        title: state.title || 'title 1',
        article: state.content || 'article 1',
        timeStamp: state.timeStamp || 'time/date'
      }, (err) => {
        if(err) return err;
        else return 'success!';
      })

  }

}
