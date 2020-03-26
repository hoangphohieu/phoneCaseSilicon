import React, { Component } from 'react';
import BanTo from './BanTo';

import ItemThua from './ItemThua';
import _ from 'lodash';
import DownText from './DownText';
import FilesNone from './FilesNone';

class BigTable extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  printScreen: false,
                  changePrint: false,

                  phoneCase: { // w và h tính theo pixcel
                        i6: { w: 80, h: 165 },
                        i7:{ w: 80, h: 165 },// vân trơn
                        // i7: { w: 791, h: 1630 }, // default 
                        i6plus: { w: 80, h: 165 },
                        i7plus: { w: 80, h: 165 },
                        ix: { w: 80, h: 165 },// vân trơn
                        ixs:{ w: 80, h: 165 },// vân trơn
                        // ix: { w: 791, h: 1654 },// default 
                        // ixs: { w: 791, h: 1654 },// default 
                        ixr:{ w: 80, h: 165 },
                        imax: { w: 80, h: 165 },// vân trơn
                        // imax: { w: 898, h: 1831 },// default 
                        i11pro: { w: 80, h: 165 },
                        i11: { w: 80, h: 165 }, // vân trơn
                        // i11: { w: 862, h: 1760 },// default 
                        i11promax: { w: 80, h: 165 },

                        s7:{ w: 80, h: 165 },
                        s7e: { w: 80, h: 165 },
                        s8plus: { w: 80, h: 165 },
                        s8: { w: 80, h: 165 },
                        note8: { w: 80, h: 165 },
                        s9:{ w: 80, h: 165 },
                        s9plus:{ w: 80, h: 165 },
                        note9: { w: 80, h: 165 },
                        s10: { w: 80, h: 165 },
                        s10e: { w: 80, h: 165 },
                        s10plus: { w: 80, h: 165 },
                        note10: { w: 80, h: 165 },
                        note10plus: { w: 80, h: 165 },
                        sa50: { w: 80, h: 165 },
                        sa50s: { w: 80, h: 165 },
                        sa70:{ w: 80, h: 165 },
                        sa750:{ w: 80, h: 165 },
                        sa6plus:{ w: 80, h: 165 },
                        sj6plus:{ w: 80, h: 165 },


                        hp20:{ w: 80, h: 165 },
                        hp30p:{ w: 80, h: 165 },
                        hp30:{ w: 80, h: 165 },
                        mate20p: { w: 80, h: 165 },
                        hp20p: { w: 80, h: 165 },

                        oa5: { w: 80, h: 165 },
                        of11: { w: 80, h: 165 },
                        of11pro:{ w: 80, h: 165 },
                        oneplus6: { w: 80, h: 165 },

                        khay: { w: 850, h: 550 }

                  }
            }
      }


      changeScreen = () => { this.setState({ printScreen: !this.state.printScreen }) }
      changePrint = () => { this.setState({ changePrint: !this.state.changePrint }) }
      render() {

            let items = this.props.itemsLocal;
            let itemSheet = this.props.items.listItem;
            let itemCheck = []
            let sumAmount, itemsFilter, itemThua;
            let amountAllPhoneCase = [];
            let allFileName = [];
            let dataSortItems = [];
            let danhsach2 = [];

            let arr = [];
            // let arr = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
            if (items != null) {
                  // console.log(items.Sheet1);
                  items = items.Sheet1;
                  items = items.filter(item => (item.idClient !== undefined || item.amount !== undefined)); // lọc loại bỏ những item trắng


                  items = items.map(item => { return { ...item, amount: parseInt(item.amount), anyMore: false } }) // chuyển amount từ string sang number, thêm trạng thái anyMore:0


                  sumAmount = items.reduce((sum, item) => { // tính tổng amount
                        return (sum + parseInt(item.amount))
                  }, 0);

                  items = items.map(item => { // đổi tên phoneCase cho ngắn gọn
                        if (item.phoneCase === undefined) return item
                        // iphone
                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6/6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6/ 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6/6 s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6 /6 s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6, 6s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6,6s") === true
                        ) return { ...item, phoneCase: "i6" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone 7") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip78") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7/8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7") === true
                        ) return { ...item, phoneCase: "i7" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ipx") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone x") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip x") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i phone x") === true
                        ) return { ...item, phoneCase: "ix" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xs") === true
                        ) return { ...item, phoneCase: "ixs" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("iphone 6plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i 6splus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6splus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i6 splus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i 6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip6p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 6p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6/6s plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6 plus/6s plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6s plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("6/6splus") === true
                        ) return { ...item, phoneCase: "i6plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("ip7plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 7plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 7 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("78 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("8/7 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7/8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7/8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("7 / 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 7plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 7/ip8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip78p") === true
                        ) return { ...item, phoneCase: "i7plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xr") === true
                        ) return { ...item, phoneCase: "ixr" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("xsmax") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ipxm") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("xs max") === true
                        ) return { ...item, phoneCase: "imax" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("i11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i 11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 11") === true
                        ) return { ...item, phoneCase: "i11" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("i11p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip11pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ip 11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("i 11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone11pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("iphone 11 pro") === true
                        ) return { ...item, phoneCase: "i11pro" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("11 pro max") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11 promax") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11pm") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11promax") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11 pro max") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11 max") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("11max") === true
                        ) return { ...item, phoneCase: "i11promax" }

                        // samsung
                        else if (item.phoneCase.trim().toLowerCase().endsWith("a50") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 50") === true
                        ) return { ...item, phoneCase: "sa50" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("a50s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 50s") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 50 s") === true
                        ) return { ...item, phoneCase: "sa50s" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("a750") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 750") === true
                        ) return { ...item, phoneCase: "sa750" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("a70") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 70") === true
                        ) return { ...item, phoneCase: "sa70" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("j6plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("j6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("j 6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("j 6 +") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("j6 +") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("j6+") === true
                        ) return { ...item, phoneCase: "sj6plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("a6plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 6 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a 6 +") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a6 +") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("a6+") === true
                        ) return { ...item, phoneCase: "sa6plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s7") === true
                        ) return { ...item, phoneCase: "s7" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s8") === true
                        ) return { ...item, phoneCase: "s8" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s9") === true
                        ) return { ...item, phoneCase: "s9" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10") === true
                        ) return { ...item, phoneCase: "s10" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s7 e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s7 edge") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s7edge") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s7e") === true
                        ) return { ...item, phoneCase: "s7e" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10 e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10e") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10 edge") === true
                        ) return { ...item, phoneCase: "s10e" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss 8 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss 8plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s8+") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss8p") === true
                        ) return { ...item, phoneCase: "s8plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s9plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s9+") === true
                        ) return { ...item, phoneCase: "s9plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("s10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss s10+") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("s10p") === true
                        ) return { ...item, phoneCase: "s10plus" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note8") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss8n") === true
                        ) return { ...item, phoneCase: "note8" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 9") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note9") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss9n") === true
                        ) return { ...item, phoneCase: "note9" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 10") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note10") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss10n") === true
                        ) return { ...item, phoneCase: "note10" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("note 10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note10plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note 10 plus") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("note 10+") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("ss10np") === true
                        ) return { ...item, phoneCase: "note10plus" }
                        // huwei

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p30") === true
                        ) return { ...item, phoneCase: "hp30" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p30 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p30p") === true
                        ) return { ...item, phoneCase: "hp30p" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("one plus 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("oneplus 6") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("one plus6") === true
                        ) return { ...item, phoneCase: "oneplus6" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p20 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("hwp20p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p20p") === true
                        ) return { ...item, phoneCase: "hp20p" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("p20") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("hwp20") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("p20") === true
                        ) return { ...item, phoneCase: "hp20" }


                        else if (item.phoneCase.trim().toLowerCase().endsWith("mate 20pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("mate20p") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("mate 20 pro") === true
                        ) return { ...item, phoneCase: "mate20p" }


                        else if (item.phoneCase.trim().toLowerCase().endsWith("oppo a5") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("oppoa5") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("oppo a 5") === true
                        ) return { ...item, phoneCase: "oa5" }

                        else if (item.phoneCase.trim().toLowerCase().endsWith("f11") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("f 11") === true
                        ) return { ...item, phoneCase: "of11" }
                        else if (item.phoneCase.trim().toLowerCase().endsWith("f11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("f11pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("f 11 pro") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("f 11 +") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("f 11+") === true
                              || item.phoneCase.trim().toLowerCase().endsWith("f11+") === true
                        ) return { ...item, phoneCase: "of11pro" }


                        else return { ...item, phoneCase: item.phoneCase }
                  });   // hết đổi tên

                  for (let i = 0; i <= items.length - 1; i++) {  // lặp lại những item có amount >1
                        if (items[i].amount > 1) {
                              for (let j = 1; j < items[i].amount; j++) {
                                    items.push({ ...items[i], amount: 0 })
                              }
                        }
                  }

                  items = items.sort(function (a, b) { // lọc danh sách items theo idClient
                        var x = a.idClient.toLowerCase();
                        var y = b.idClient.toLowerCase();
                        if (x < y) { return -1; }
                        if (x > y) { return 1; }
                        return 0;
                  });

                  // console.log(items);
                  let obj = {}
                  for (let k = 0; k < items.length; k++) {
                        if (obj[items[k].idClient] === undefined) {
                              obj[items[k].idClient] = [items[k]]
                        }
                        else {
                              obj[items[k].idClient] = [...obj[items[k].idClient], items[k]]

                        }

                  }
                  obj = _.toPairs(obj);

                  obj = obj.map(param1 => {
                        return param1[1].map(param2 => {
                              param2["amount"] = param1[1].length;
                              return param2
                        })
                  })
                  obj = _.flattenDeep(obj);
                  // console.log(items);

                  for (let i = 0; i < items.length; i++) {

                        try {
                              if (((i < (items.length - 1)) && items[i].idClient === items[i + 1].idClient) || ((i > 0) && items[i].idClient === items[i - 1].idClient)) {
                                    items[i].anyMore = true;
                              }
                        } catch (error) {
                              // console.log("anymore loi");

                        }

                  }

                  // console.log(items);


                  itemsFilter = items.filter(item => {
                        return item.phoneCase === 'i6plus'
                              || item.phoneCase === "i6"
                              || item.phoneCase === "i7"
                              || item.phoneCase === "ix"
                              || item.phoneCase === "ixs"
                              || item.phoneCase === "i7plus"
                              || item.phoneCase === "ixr"
                              || item.phoneCase === "imax"
                              || item.phoneCase === "i11"
                              || item.phoneCase === "i11pro"
                              || item.phoneCase === "i11promax"

                              || item.phoneCase === "s7"
                              || item.phoneCase === "s8"
                              || item.phoneCase === "s9"
                              || item.phoneCase === "s10"
                              || item.phoneCase === "s7e"
                              || item.phoneCase === "s10e"
                              || item.phoneCase === "s8plus"
                              || item.phoneCase === "s9plus"
                              || item.phoneCase === "s10plus"
                              || item.phoneCase === "note8"
                              || item.phoneCase === "note9"
                              || item.phoneCase === "note10"
                              || item.phoneCase === "note10plus"
                              || item.phoneCase === "sa50"
                              || item.phoneCase === "sa50"
                              || item.phoneCase === "sa50s"
                              || item.phoneCase === "sa750"
                              || item.phoneCase === "sa70"
                              || item.phoneCase === "sa6plus"
                              || item.phoneCase === "sj6plus"

                              || item.phoneCase === "hp30"
                              || item.phoneCase === "hp30p"
                              || item.phoneCase === "hp20p"
                              || item.phoneCase === "hp20"
                              || item.phoneCase === "mate20p"

                              || item.phoneCase === "oneplus6"
                              || item.phoneCase === "oa5"
                              || item.phoneCase === "of11"
                              || item.phoneCase === "of11pro"

                  })


                  // lấy item thừa 
                  itemThua = _.difference(items, itemsFilter);
                  // console.log(itemThua);

                  // lấy idDesign để xem file nào chưa có
                  allFileName = items.map(item => { return item.idDesign })


                  // đếm ốp
                  let allPhoneCase = [];
                  let bodem = {};
                  let danhSach = ["i6", "i6plus", "i7", "i7plus", "ix", "ixs", "ixr", "imax", "i11", "i11pro", "i11promax", "s7e", "s7", "s8", "s8plus", "note8", "s9", "s9plus", "note9", "s10e", "s10", "s10plus", "note10"
                        , "note10plus", "sa50", "sa50s", "sa70", "sa6plus", "sj6plus", "of11", "of11pro", "oa5", "hp30", "hp30p", "hp20", "hp20p", "mate20p", "oneplus6"];
                  for (let j = 0; j < items.length; j++) { // lấy danh sách tên tất cả các đt trong items
                        if (allPhoneCase.indexOf(items[j].phoneCase) === -1)
                              allPhoneCase.push(items[j].phoneCase)
                  }

                  for (let j = 0; j < allPhoneCase.length; j++) {
                        let onePhoneCase = items.filter(item => { return item.phoneCase === allPhoneCase[j] });
                        let tenaaa = allPhoneCase[j];
                        bodem[tenaaa] = onePhoneCase.length;
                        // console.log(bodem);

                        amountAllPhoneCase.push(
                              <tr key={j}>
                                    <th scope="row">{j + 1}</th>
                                    <td className="cot_row">{allPhoneCase[j]}</td>
                                    <td className="cot_row">{onePhoneCase.length}</td>
                              </tr>)
                  }

                  danhsach2 = danhSach.map(param => {
                        if (bodem[param] !== undefined) return [param, bodem[param]]
                        else return [param, 0]
                        // console.log(param + " : " + bodem[param]);

                  })
                  console.log(danhsach2);


                  items = itemsFilter;
                  let pixel = this.state.phoneCase;
                  items = _.orderBy(items, ['phoneCase', 'idClient', 'idDesign'], ['asc', 'asc', 'desc']);



                  items = items.map((item, key) => { return { ...item, stt: key + 1 } });
                  dataSortItems = items;    // lấy danh sách để in bảng 12 ra màn hình
                  // console.log(items);

                  items = items.map(item => { return { idClient: item.idClient, name: item.phoneCase, idDesign: item.idDesign.trim(), stt: item.stt, pixel: toPixel(item.phoneCase) } })
                  // console.log(items);
                  function toPixel(params) {
                        if (params === "i7") return pixel.i7
                        else if (params === "i6") return pixel.i6
                        else if (params === "i6plus") return pixel.i6plus
                        else if (params === "i7plus") return pixel.i7plus
                        else if (params === "ix") return pixel.ix
                        else if (params === "ixs") return pixel.ixs
                        else if (params === "ixr") return pixel.ixr
                        else if (params === "imax") return pixel.imax
                        else if (params === "s7") return pixel.s7
                        else if (params === "s7e") return pixel.s7e
                        else if (params === "s8") return pixel.s8
                        else if (params === "s8plus") return pixel.s8plus
                        else if (params === "note8") return pixel.note8
                        else if (params === "s9") return pixel.s9
                        else if (params === "s9plus") return pixel.s9plus
                        else if (params === "note9") return pixel.note9
                        else if (params === "s10") return pixel.s10
                        else if (params === "s10e") return pixel.s10e
                        else if (params === "s10plus") return pixel.s10plus
                        else if (params === "hp30p") return pixel.hp30p
                        else if (params === "hp30") return pixel.hp30
                        else if (params === "hp20p") return pixel.hp20p
                        else if (params === "hp20") return pixel.hp20
                        else if (params === "mate20p") return pixel.mate20p
                        else if (params === "oa5") return pixel.oa5
                        else if (params === "of11") return pixel.of11
                        else if (params === "of11pro") return pixel.of11pro
                        else if (params === "sa50") return pixel.sa50
                        else if (params === "sa70") return pixel.sa70
                        else if (params === "sa750") return pixel.sa750
                        else if (params === "sa50s") return pixel.sa50s
                        else if (params === "sa6plus") return pixel.sa6plus
                        else if (params === "sj6plus") return pixel.sj6plus
                        else if (params === "oneplus6") return pixel.oneplus6
                        else if (params === "i11") return pixel.i11
                        else if (params === "i11pro") return pixel.i11pro
                        else if (params === "i11promax") return pixel.i11promax
                        else if (params === "note10") return pixel.note10
                        else if (params === "note10plus") return pixel.note10plus

                  }
                  // // chia khay
                  // let hAll = pixel.khay.h;
                  // let wAll = pixel.khay.w;
                  // let hNow = hAll; let wNow = wAll;
                  // let wLastCase = items[0].pixel.w;
                  // let j = 0;

                  // for (let i = 0; i <= items.length - 1; i++) {
                  //       let hI = items[i].pixel.h;
                  //       let wI = items[i].pixel.w;
                  //       // console.log(items[i].name);
                  //       if (((hNow - hI) >= 0) && ((wNow - wI) >= 0)) {
                  //             if ((wLastCase !== wI)) {
                  //                   if (wNow - wI - wLastCase >= 0) {

                  //                         arr[j].push(items[i]);
                  //                         hNow = hAll - hI;
                  //                         wNow = wNow - wLastCase;
                  //                         wLastCase = wI;
                  //                   }
                  //                   else {

                  //                         j = j + 1;
                  //                         arr[j].push(items[i]);
                  //                         hNow = hAll - hI;
                  //                         wNow = wAll;
                  //                         wLastCase = wI;
                  //                   }
                  //             }
                  //             else {

                  //                   arr[j].push(items[i]);
                  //                   hNow = hNow - hI;
                  //                   wLastCase = wI;

                  //             }

                  //       }
                  //       else if (((hNow - hI) >= 0) && ((wNow - wI) < 0)) {

                  //             j = j + 1;
                  //             arr[j].push(items[i]);
                  //             hNow = hAll - hI;
                  //             wNow = wAll;
                  //             wLastCase = wI;

                  //       }
                  //       else if (((hNow - hI) < 0) && ((wNow - wLastCase - wI) >= 0)) {

                  //             arr[j].push(items[i]);
                  //             hNow = hAll - hI;
                  //             wNow = wNow - wLastCase;
                  //             wLastCase = wI;

                  //       }
                  //       else if (((hNow - hI) < 0) && ((wNow - wLastCase - wI) < 0)) {

                  //             j = j + 1;
                  //             arr[j].push(items[i]);
                  //             hNow = hAll - hI;
                  //             wNow = wAll;
                  //             wLastCase = wI;


                  //       }
                  //       else {
                  //             alert("alert")
                  //       }
                  // }
                  arr = _.chunk(items, 24);
                  arr = arr.filter(item => { return item.length > 0 });
                  arr = arr.map(param5 => { let a = _.chunk(param5, 8); return a })
                  // arr=arr.map(item=>{return item.map(param=>{return param.name })} )

                  itemCheck = JSON.parse(JSON.stringify(items));
            } // het if param!==undefi param.namened

            // console.log(itemCheck);
            // console.log(itemSheet);
            itemSheet = itemSheet.filter(param4 => {
                  return (param4.idDesign !== null && param4.phoneCase !== null)
            })
            let itemNotPrint = [];
            {
                  for (let k = 0; k < itemCheck.length; k++) {
                        let itemC = [];
                        for (let m = 0; m < itemSheet.length; m++) {
                              if ((itemSheet[m].idDesign.toLowerCase().trim() === itemCheck[k].idDesign.toLowerCase().trim())
                                    && (itemSheet[m].phoneCase.trim().toLowerCase() === itemCheck[k].name.toLowerCase().trim())
                              ) {
                                    itemC.push({ ...itemCheck[k], code: itemSheet[m].stt });
                                    itemSheet[m] = null;
                                    break;
                              }
                        }
                        itemSheet = itemSheet.filter(param3 => param3 !== null)
                        if (itemC.length !== 0) {
                              itemNotPrint.push(itemC[0]);
                        }
                  }

                  return (
                        <React.Fragment>
                              <button type="button" className="btn btn-primary mb-5 absolute inan" onClick={this.changePrint}>in ấn</button>
                              {(this.state.changePrint === true) ? "" :
                                    <div>
                                          <FilesNone dataNone={allFileName} itemNoPrint={itemNotPrint} {...this.props} />
                                          <DownText dataMayInTo={arr} {...this.props} />
                                          <h1>Tổng tất cả: {sumAmount}</h1>
                                          <button type="button" className="btn btn-primary mb-5" onClick={this.changeScreen}>đổi theme</button>
                                          <ItemThua itemsThua={itemThua} {...this.props} />
                                    </div>

                              }
                              <BanTo itemsBanTo={dataSortItems} printScreen={this.state.printScreen} {...this.props} />

                              <h2 style={{ textAlign: 'center', marginTop: 50 }}>Tổng tất cả: {sumAmount}</h2>
                              <div className="row justify-content-center">
                                    <div className="col-5">

                                          <table className="table table-striped table_amounts">
                                                <thead>
                                                      <tr>
                                                            <th scope="col">STT</th>
                                                            <th scope="col">TÊn</th>
                                                            <th scope="col">SỐ LƯỢNG</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {amountAllPhoneCase}
                                                </tbody>
                                          </table>
                                    </div>
                                    <div className="col-5">
                                          <table className="table  table_amounts">
                                                <thead>
                                                      <tr>
                                                            <th scope="col">SỐ LƯỢNG</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {danhsach2.map((param, key) => <tr key={key}>
                                                            {/* <td className="cot_row">{param[0]}</td> */}
                                                            <td className="cot_row">{param[1]}</td>
                                                      </tr>)}
                                                </tbody>
                                          </table>
                                    </div>

                              </div>


                        </React.Fragment>
                  );
            }
      }
}
export default BigTable;