import React, { Component } from "react";
import MySeconds from "./MySeconds";
import MyButtons from "./MyButtons";
import MyRecord from "./MyRecord";
import mystore from "./MyStore";

import { observer } from "mobx-react";

@observer
class StopWatch extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <MySeconds timedif={mystore.time} />
          <MyButtons mystore={mystore} />
        </div>
        <MyRecord count={mystore.count} />
      </div>
    );
  }
}
export default StopWatch;
