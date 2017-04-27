import React from 'react';
import superagent from 'superagent-bluebird-promise';
import {對齊結果網址} from '../../後端網址';

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
    superagent.get(對齊結果網址)
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
    debug(對齊結果)
    if (對齊結果 === undefined) {
      return <div/>;
    }

    let 對齊漢字臺羅 = 對齊結果.slice(0, this.state.顯示幾个).map(
      (結果, i)=>(<div>
        第 {結果.編號} 筆 --
        {
          結果.狀態=='成功'?
          <a download href={結果.壓縮檔網址}>下載切好的壓縮檔</a>:
          結果.狀態
        }
        <br/>
        <br/>
        </div>)
      );

    let { 音檔 } = this.state;
    return (
    <div className='ui segment'>
      <h2>對齊結果</h2>
       {對齊漢字臺羅}
       {this.看閣較濟()}
    </div>
    );
  }
}
