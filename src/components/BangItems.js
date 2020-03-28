import React, { Component } from 'react';
import MotBanInTo from './MotBanInTo';
import _ from 'lodash';
class Bang12Items extends Component {
      constructor(props, context) {
            super(props, context);
            this.state = {
                  psdDone: false
            }
      }
      psdDone = () => { this.setState({ psdDone: true }) }
      render() {
            let items = this.props.itemsBang12Items;
            while (items.length < 24) {
                  items.push({
                        idClient: null,
                        country: null,
                        amount: null,
                        idDesign: null,
                        phoneCase: null,
                        stt: null
                  })
            }

            items = _.chunk(items, 8);
            let danhSachItem;
            if (this.props.itemsBang12Items !== undefined) {
                  danhSachItem = items.map((item, key1) =>

                        <div className="col-12" key={key1}>
                              <div className="row dkmdkm">

                                    {
                                          item.map((item2, key2) =>
                                                <MotBanInTo
                                                      key={key2}
                                                      idClient={item2.idClient}
                                                      phoneCase={item2.phoneCase}
                                                      idDesign={item2.idDesign}
                                                      amount={item2.amount}
                                                      dayExcel={this.state.dayExcel}
                                                      country={item2.country}
                                                      numberPosition={item2.stt}
                                                      {...this.props}
                                                />)
                                    }

                              </div>
                        </div>

                  )

            }
            return (
                  <div>

                        <div className="container-fluid khoangcasch mt-5">
                              <div className={"container-fluid " + ((this.state.psdDone === true) ? "psd_done" : "")} style={{ width: 1840 }}>
                                    <div className="row border_khung">
                                          <div className="col-12 border_khung" style={{ height: 70 }}>
                                                <h1 style={{ fontSize: 35 }}>
                                                      Ban {this.props.numberTable + 1} {` excel ${this.props.day} - ${this.props.mounth}`}
                                                      <button type="button" className="btn btn-primary ml-5" onClick={this.psdDone}>Done</button>
                                                </h1>

                                          </div>
                                          <div className="col-12">
                                                <div className="row flex-column-reverse">
                                                      {danhSachItem}
                                                </div>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            );
      }
}

export default Bang12Items;