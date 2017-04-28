import React from 'react';
import superagent from 'superagent-bluebird-promise';
import {對齊結果網址} from '../../後端網址';
import 一筆結果 from './一筆結果';

import Debug from 'debug';
var debug = Debug('tau3:對齊結果');

export default class 對齊結果 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      顯示幾个: this.預設顯示幾个(),
    };
  }

  componentWillMount() {
    this.查怎樣講();
    this.timer = setInterval(this.查怎樣講.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  預設顯示幾个() {
    return 30;
  }

  加顯示幾个() {
    return 10;
  }

  看閣較濟全開() {
    let { 顯示幾个 } = this.state;
    顯示幾个 += this.加顯示幾个();
    this.setState({ 顯示幾个 });
  }

  查怎樣講() {
    superagent.get(對齊結果網址())
          .then(({ body })=>(
            this.setState(body)
          ))
          .catch((err) => (
            debug(err)
          ));

  }

  看閣較濟() {
    if (this.state.對齊結果.length > this.state.顯示幾个)
    return (
        <button onClick={this.看閣較濟全開.bind(this)}
          className='ui button'>
          看閣較濟
        </button>
      );
  }

  render() {
    let { 對齊結果 } = this.state;
    if (對齊結果 === undefined) {
      return <div/>;
    }

    let 對齊漢字臺羅 = 對齊結果.slice(0, this.state.顯示幾个).map(
      (結果, i)=>(<一筆結果 key={i} 結果={結果}/>)
      );

    let { 音檔 } = this.state;
    return (
    <div className='ui segment'>
      <h2>處理狀況</h2>
       {對齊漢字臺羅}
       {this.看閣較濟()}
    </div>
    );
  }
}
