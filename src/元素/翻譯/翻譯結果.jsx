import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 漢字一逝臺羅一逝 from "../顯示/漢字一逝臺羅一逝";
import 顯示 from "../顯示/顯示";
import "./翻譯結果.css";

class 翻譯結果 extends React.Component {
  render() {
    const { 腔口, 正在查詢, 查詢結果 } = this.props;
    const 發生錯誤 = 查詢結果.發生錯誤 || false;

    return (
        <div>
          {
            (正在查詢 &&
              <h1 className='ui header'>載入中……</h1>
            )
          }
          {
            (發生錯誤 &&
              <h1 className='ui red header'>主機發生錯誤</h1>
            )
          }
          <Tabs selectedIndex={0} style={{ opacity: 正在查詢 ? 0.3 : 1 }}>
            <TabList>
              <Tab>漢字+臺羅</Tab>
              <Tab>漢字</Tab>
              <Tab>臺羅</Tab>
              <Tab>分詞</Tab>
            </TabList>
            <TabPanel>
                <漢字一逝臺羅一逝
                  腔口={腔口}
                  查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
              <顯示 選項='漢字' 查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
              <顯示 選項='臺羅閏號調' 查詢結果={查詢結果}/>
            </TabPanel>
            <TabPanel>
              <顯示 選項='分詞' 查詢結果={查詢結果}/>
            </TabPanel>
          </Tabs>
        </div>
    );
  }
}

翻譯結果.propTypes = {
  正在查詢: PropTypes.bool.isRequired,
  查詢結果: PropTypes.shape({

    綜合標音: PropTypes.array.isRequired,
  }).isRequired,
  腔口: PropTypes.string.isRequired,
};

export default 翻譯結果;
