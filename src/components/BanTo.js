import React, { Component } from 'react';
import BangItems from './BangItems';
import copy from 'copy-to-clipboard';
import _ from 'lodash';
class BanTo extends Component {
      copyData = (param) => { copy(param) }

      render() {
            let z9 = this.props.z9;
            let z10 = this.props.z10;
            let itemsZ9, itemsZ10;



            if (z9 !== undefined) {
                  itemsZ9 = z9.map((item, key) => <BangItems key={key} ban={"to"} Item24={item} type="z9" numberTable={key} {...this.props} />)
                  itemsZ10 = z10.map((item, key) => <BangItems key={key} ban={"to"} Item24={item}  type="z10" numberTable={key} {...this.props} />)
            }
            return (<React.Fragment>
                  {itemsZ9}
                  {itemsZ10}
            </React.Fragment>
            );
      }
}

export default BanTo;