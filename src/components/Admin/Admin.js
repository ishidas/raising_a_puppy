import React, { Component } from 'react';
import firebase from 'firebase';
import adminStyle from './adminStyle.scss';
import config from '../../config.js';

require("firebase/auth");
require("firebase/database");

var app = firebase.initializeApp(
  {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.databaseURL,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId
  }
);

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      timeStamp: new Date().toString()
    }

    this.submitArticleHandler = this.submitArticleHandler.bind(this);
    this.handleFieldsChange = this.handleFieldsChange.bind(this);
  }
  componentWillMount() {
    this.adminForm = React.createRef();
  }
  componentDidMount() {
    this.adminForm.current.scrollIntoView();
  }
  submitArticleHandler(e) {
    e.preventDefault();
    alert('submitted!')
  }
  handleFieldsChange(e) {
    switch (e.target.name) {
      case 'title':
        this.setState({title: e.target.value})
        break;
      case 'content':
        this.setState({content: e.target.value})
        break;
      case 'timeStamp':
        this.setState({timeStamp: e.target.value})
        break;
      default:
    }
  }


  render() {
    return (
      <section ref={this.adminForm} className={adminStyle.formcontainer}>
        <h1>Write blog post</h1>
        <form onSubmit={this.submitArticleHandler}>
          <input placeholder="title" type="text" name="title" value={this.state.title} onChange={this.handleFieldsChange}/>
          <textarea cols="50" placeholder="content" name="content" value={this.state.content} onChange={this.handleFieldsChange}></textarea>
          <span value={this.state.timeStamp} name="timeStamp" onLoad={this.handleFieldsChange}>{this.state.timeStamp}</span>
          <input type="submit" value="submit" />
        </form>
      </section>
    )
  }
}
