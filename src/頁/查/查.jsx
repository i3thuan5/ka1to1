import React from "react";
import { MainSection } from "demo-ui";
import PropTypes from "prop-types";
import 對齊結果 from "../../元素/顯示/對齊結果";
import {對齊上傳網址} from '../../後端網址';

class 查 extends React.Component {
  render() {
    return (
      <MainSection>
        <form method="post" encType="multipart/form-data" action={對齊上傳網址()} target='_blank'>
          <label htmlFor="id_文本">文本（每一行<a href='http://xn--p8s96olm5c.xn--v0qr21b.xn--kpry57d'>分詞</a>會獨立切出一個檔）：</label>
          <div>
            <textarea
              cols="40" id="id_文本" name="文本" rows="10" required=""
              placeholder="伊｜i1 干-焦｜kan1-na1 一｜tsit8 身｜sian1 人｜lang5 爾-爾｜nia7-nia7 ，｜, 無｜bo5 長｜tiong2 半｜puann3 項｜hang7 。｜.
一-路｜tsit8-loo7"></textarea>
          </div>
          <div>
            <label htmlFor="id_音檔">原始wav檔:</label>
            <input name="音檔" id="id_音檔" type="file"/>
          </div>
          <input name="語言" id="語言" value='閩南語' type="hidden"/>
          <input type="submit"/>
        </form>
        {''/*
        <Container查表格 語句={this.props.語句}/>
        <Container翻譯結果/>
        */}
        <對齊結果 />
     </MainSection>
    );
  }
}

查.propTypes = {
  語句: PropTypes.string,
};

export default 查;
