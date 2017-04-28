import React from "react";
import PropTypes from "prop-types";
import {檔案網址} from '../../後端網址';

class 一筆結果 extends React.Component {

  render() {
    const { 結果 } = this.props;
    if (結果.狀態=='成功'){
      return (
        <div>
          第 {結果.編號} 筆<br/>
          <textarea cols="40" rows="3" readOnly value={結果.分詞文本} />
          <audio ref="合成音檔" controls>
            <source type="audio/wav"
               src={檔案網址(結果.原始wav檔網址)}/>
          </audio>
          <a download href={檔案網址(結果.壓縮檔網址)}>下載切好的壓縮檔</a>
        </div>
    )
    }
    return (
        <div>
          第 {結果.編號} 筆<br/>
          <textarea cols="40" rows="3" readOnly value={結果.分詞文本} />
          <audio ref="合成音檔" controls>
            <source type="audio/wav"
               src={檔案網址(結果.原始wav檔網址)}/>
          </audio>
          {結果.狀態}
        </div>
        )
  }
}

一筆結果.propTypes = {
  結果: PropTypes.shape({
    編號: PropTypes.string.isRequired,
    原始wav檔網址: PropTypes.string.isRequired,
    壓縮檔網址: PropTypes.string,
  }).isRequired,
};

export default 一筆結果;
