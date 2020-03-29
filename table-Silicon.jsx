
"object" != typeof JSON && (JSON = {}), function () { "use strict"; var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep; function f(t) { return t < 10 ? "0" + t : t } function this_value() { return this.valueOf() } function quote(t) { return rx_escapable.lastIndex = 0, rx_escapable.test(t) ? '"' + t.replace(rx_escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var r, n, o, u, f, a = gap, i = e[t]; switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(t)), "function" == typeof rep && (i = rep.call(e, t, i)), typeof i) { case "string": return quote(i); case "number": return isFinite(i) ? String(i) : "null"; case "boolean": case "null": return String(i); case "object": if (!i) return "null"; if (gap += indent, f = [], "[object Array]" === Object.prototype.toString.apply(i)) { for (u = i.length, r = 0; r < u; r += 1)f[r] = str(r, i) || "null"; return o = 0 === f.length ? "[]" : gap ? "[\n" + gap + f.join(",\n" + gap) + "\n" + a + "]" : "[" + f.join(",") + "]", gap = a, o } if (rep && "object" == typeof rep) for (u = rep.length, r = 0; r < u; r += 1)"string" == typeof rep[r] && (o = str(n = rep[r], i)) && f.push(quote(n) + (gap ? ": " : ":") + o); else for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (o = str(n, i)) && f.push(quote(n) + (gap ? ": " : ":") + o); return o = 0 === f.length ? "{}" : gap ? "{\n" + gap + f.join(",\n" + gap) + "\n" + a + "}" : "{" + f.join(",") + "}", gap = a, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value), "function" != typeof JSON.stringify && (meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, r) { var n; if (gap = "", indent = "", "number" == typeof r) for (n = 0; n < r; n += 1)indent += " "; else "string" == typeof r && (indent = r); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) { var j; function walk(t, e) { var r, n, o = t[e]; if (o && "object" == typeof o) for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (void 0 !== (n = walk(o, r)) ? o[r] = n : delete o[r]); return reviver.call(t, e, o) } if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel

var fileDialog = app.openDialog();
var file = new File(fileDialog);
file.open("r");
var strFile;
strFile = file.read();
file.close();
// read data from json
var data = JSON.parse(strFile);
var arr = data.data;
var day = data.day;
var mounth = data.mounth;
var hAll = 6496, wAll = 10039;


var wtem = 50; var htem = 30;
wtem = Math.round(wtem / 0.084667);
htem = Math.round(htem / 0.084667);






{ // khoảng cách padding của bàn mica
    var paddingLeft = 20;
    var paddingBottom = 10;
}
{
    var paddingPrintTB = 5;
    var paddingPrintLR = 5;
}
{ // khung để đặt ốp, có chiều 100 x 180 mm
    var wk = Math.round(100 / 0.084667);
    var hk = Math.round(180 / 0.084667);
}
paddingBottom = Math.round(paddingBottom / 0.084667);
paddingLeft = Math.round(paddingLeft / 0.084667);



for (var ban = 0; ban <= arr.length - 1; ban++) { // loop  1 bàn
    { // tạo bảng in và group CMYK, SPOT
        app.documents.add(wAll, hAll, 300, "silicon");
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "CMYK";
        app.activeDocument.layerSets.add();
        app.activeDocument.activeLayer.name = "SPOT";
    }

    for (var i = 0; i <= arr[ban].length - 1; i++) { // loop 1 hàng
            for (var j = 0; j <= arr[ban][i].length - 1; j++) { // lop 1 cái
            var wphone = arr[ban][i][j].pixel.w;
            var hphone = arr[ban][i][j].pixel.h;
            wphone = Math.round((wphone - paddingPrintLR) / 0.084667);
            hphone = Math.round((hphone - paddingPrintTB) / 0.084667);
            try {

                app.open(File("~/Desktop/file design/" + arr[ban][i][j].idDesign + ".tif"));
            } catch (error) {
                app.documents.add(1200, 2400, 300, "aaaa");

            }

            var checkIdDesign = arr[ban][i][j].idDesign.split("-");
            checkIdDesign = checkIdDesign[checkIdDesign.length - 1];
            if (checkIdDesign != "spot") {
                if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                    app.activeDocument.rotateCanvas(180);
                    app.activeDocument.activeLayer.name = "1";
                    app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                    app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại

                    { // resize layer về cỡ cần in
                        if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                        else { var newSize = (hphone * 100 / 2400) }
                        app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                    }

                    // app.doAction("moveCenter", "silicon");
                    { // xử lý và đưa ảnh sang bàn silicon
                        app.activeDocument.mergeVisibleLayers(); // gộp all layer 
                        // app.activeDocument.selection.selectAll(); // chọn tất cả ctrl + A
                        // app.doAction("smooth120", "silicon"); // tạo smooth - có 2 loại 120 va 80   
                        app.doAction("createRectangle120", "silicon");
                        // app.doAction("createRectangle80", "silicon");
                        var cropw = wphone * 100 / 1000;
                        var croph = hphone * 100 / 1500;
                        app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                        app.doAction("selectAreaLayer", "silicon");
                        app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();

                        app.doAction("duplicateSelection", "silicon"); // tạo layer mới từ vùng chọn
                        app.activeDocument.activeLayer.name = arr[ban][i][j].stt; // đặt tên cho layer voi stt
                        app.activeDocument.activeLayer.duplicate(app.documents["silicon"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                        app.activeDocument.activeLayer.name = "2";
                        app.doAction("createSpot", "silicon");
                        app.doAction("strokeWhite1px", "silicon");
                        app.activeDocument.artLayers["1"].name = arr[ban][i][j].stt; // đặt tên cho layer voi stt
                        app.activeDocument.activeLayer.duplicate(app.documents["silicon"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                    }

                    { // translate layer đến vị trí cần in
                        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[ban][i][j].stt);
                        app.doAction("moveZero", "silicon");
                        app.activeDocument.activeLayer.translate(paddingLeft + j * wk + Math.round(paddingPrintLR / 0.084667), (paddingBottom + i * hk + Math.round(paddingPrintTB / 0.084667)) * (-1));
                        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[ban][i][j].stt);
                        app.doAction("moveZero", "silicon");
                        app.activeDocument.activeLayer.translate(paddingLeft + j * wk + Math.round(paddingPrintLR / 0.084667), (paddingBottom + i * hk + Math.round(paddingPrintTB / 0.084667)) * (-1));
                    }
                }
                else { alert("file design khong > 1 layer") };

            }
            else {
                if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                    app.activeDocument.rotateCanvas(180);
                    app.activeDocument.activeLayer.name = "1";
                    app.activeDocument.artLayers.add();
                    app.doAction("strokeWhite1px", "silicon");
                    app.activeDocument.mergeVisibleLayers();

                    app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                    app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại

                    { // resize layer về cỡ cần in
                        if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                        else { var newSize = (hphone * 100 / 2400) }
                        app.activeDocument.artLayers[0].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                    }

                    // app.doAction("moveCenter", "silicon");
                    { // xử lý và đưa ảnh sang bàn silicon
                        app.activeDocument.mergeVisibleLayers(); // gộp all layer 
                        app.activeDocument.selection.selectAll(); // chọn tất cả ctrl + A
                        // app.doAction("smooth120", "silicon"); // tạo smooth - có 2 loại 120 va 80   
                        app.doAction("createRectangle120", "silicon");
                        // app.doAction("createRectangle80", "silicon");
                        var cropw = wphone * 100 / 1000;
                        var croph = hphone * 100 / 1500;
                        app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                        app.doAction("selectAreaLayer", "silicon");
                        app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();

                        app.doAction("duplicateSelection", "silicon"); // tạo layer mới từ vùng chọn
                        app.doAction("strokeWhite1px", "silicon");
                        app.activeDocument.activeLayer.name = arr[ban][i][j].stt; // đặt tên cho layer voi stt
                        app.activeDocument.activeLayer.duplicate(app.documents["silicon"].layerSets["CMYK"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                        app.activeDocument.activeLayer.name = "2";
                        app.doAction("createSpot-spot", "silicon");
                        app.doAction("strokeWhite1px", "silicon");
                        app.activeDocument.artLayers[0].name = arr[ban][i][j].stt; // đặt tên cho layer voi stt
                        app.activeDocument.activeLayer.duplicate(app.documents["silicon"].layerSets["SPOT"], ElementPlacement.PLACEATBEGINNING);// đưa file in sang bên bàn in
                        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
                    }

                    { // translate layer đến vị trí cần in
                        app.activeDocument.activeLayer = app.activeDocument.layerSets["CMYK"].artLayers.getByName(arr[ban][i][j].stt);
                        app.doAction("moveZero", "silicon");
                        app.activeDocument.activeLayer.translate(paddingLeft + j * wk + Math.round(paddingPrintLR / 0.084667), (paddingBottom + i * hk + Math.round(paddingPrintTB / 0.084667)) * (-1));
                        app.activeDocument.activeLayer = app.activeDocument.layerSets["SPOT"].artLayers.getByName(arr[ban][i][j].stt);
                        app.doAction("moveZero", "silicon");
                        app.activeDocument.activeLayer.translate(paddingLeft + j * wk + Math.round(paddingPrintLR / 0.084667), (paddingBottom + i * hk + Math.round(paddingPrintTB / 0.084667)) * (-1));
                    }

                }
                else { alert("file design khong > 1 layer") };
            }





        }
    }
    app.doAction("createSpotChannel", "silicon"); //đã xếp xong, tạo kênh spot
    app.activeDocument.layerSets.getByName("SPOT").visible = false;

    app.activeDocument.rotateCanvas(180);
    var folder1 = Folder("~/Desktop/in an/silicon " + (ban + 1) + " ngay " + day);
    if (!folder1.exists) { folder1.create(); }
    app.activeDocument.saveAs(folder1, TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close();
}






{// chạy nhãn dán
    app.documents.add(wtem, htem, 300, "tem");

    { // tạo nhãn
        { // màu chữ đen
            var colorTextBlack = new SolidColor(); // tao mau cho layer
            colorTextBlack.rgb.red = 0;
            colorTextBlack.rgb.green = 0;
            colorTextBlack.rgb.blue = 0;
        }
        { // tạo id client
            app.activeDocument.artLayers.add(); // tao layer text
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.name = "idClient";
            app.activeDocument.activeLayer.textItem.contents = "idClient";
            app.activeDocument.activeLayer.textItem.kind = TextType.PARAGRAPHTEXT; // loại text
            app.activeDocument.activeLayer.textItem.width = 100; // chiều rộng của khung
            app.activeDocument.activeLayer.textItem.height = 60; // chiều cao của khung
            app.activeDocument.activeLayer.textItem.autoLeadingAmount = 80; // leading - khoảng cách giữa 2 dòng
            app.activeDocument.activeLayer.textItem.justification = Justification.CENTER; // căn giữa
            app.activeDocument.activeLayer.textItem.size = 15; // font size
            app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 

        }
        { // tao thanh chia
            PIdClient = app.activeDocument.artLayers.getByName("idClient").bounds;
            app.doAction("createRectangleTem", "silicon");
            app.activeDocument.artLayers.getByName("Rectangle 1").translate(430, 0);
            var PRectangleTem = app.activeDocument.artLayers.getByName("Rectangle 1").bounds;
        }

        { // tao ngay in 
            app.activeDocument.artLayers.add(); // tao layer text
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.name = "date";
            app.activeDocument.activeLayer.textItem.contents = "date";
            app.activeDocument.activeLayer.textItem.kind = TextType.PARAGRAPHTEXT; // loại text
            app.activeDocument.activeLayer.textItem.width = 100; // chiều rộng của khung
            app.activeDocument.activeLayer.textItem.justification = Justification.CENTER; // căn giữa
            app.activeDocument.activeLayer.textItem.size = 10; // font size
            app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 
            app.doAction("moveTL", "silicon");
            app.activeDocument.artLayers.getByName("date").translate(0, 290);

        }

        {// tao stt
            app.activeDocument.artLayers.add(); // tao layer text
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.name = "stt";
            app.activeDocument.activeLayer.textItem.contents = "stt";
            app.activeDocument.activeLayer.textItem.size = 13; // font size
            app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 



        }

        {// tao amount
            app.activeDocument.artLayers.add(); // tao layer text
            app.activeDocument.activeLayer.kind = LayerKind.TEXT;
            app.activeDocument.activeLayer.name = "amount";
            app.activeDocument.activeLayer.textItem.contents = "amount";
            app.activeDocument.activeLayer.textItem.size = 20; // font size
            app.activeDocument.activeLayer.textItem.color = colorTextBlack; // màu chữ 
            app.activeDocument.activeLayer.textItem.fauxBold = true;
        }
    }
    { // chaạy nhãn
        for (var ban = 0; ban <= arr.length - 1; ban++) { // loop  1 bàn
            for (var i = 0; i <= arr[ban].length - 1; i++) { // loop 1 hàng
                for (var j = 0; j <= arr[ban][i].length - 1; j++) { // lop 1 cái
                    app.activeDocument.artLayers.getByName("date").textItem.contents = arr[ban][i][j].name + "     " + day + "-" + mounth;

                    app.activeDocument.artLayers.getByName("idClient").textItem.contents = arr[ban][i][j].idClient;
                    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("idClient");
                    app.doAction("moveTL", "silicon");
                    var PIdClient = app.activeDocument.artLayers.getByName("idClient").bounds;
                    app.activeDocument.activeLayer.translate(10, (260 + PIdClient[1] - PIdClient[3]) / 2);

                    app.activeDocument.artLayers.getByName("stt").textItem.contents = arr[ban][i][j].stt;
                    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("stt");
                    app.doAction("moveTL", "silicon");
                    var PStt = app.activeDocument.artLayers.getByName("stt").bounds;
                    app.activeDocument.artLayers.getByName("stt").translate(
                        PRectangleTem[2] + ((app.activeDocument.width - PRectangleTem[2] - PStt[2] + PStt[0]) / 2),
                        (app.activeDocument.height / 2) + ((app.activeDocument.height / 2) - PStt[3] + PStt[1]) / 2);

                    if (arr[ban][i][j].amount <= 1) { app.activeDocument.artLayers.getByName("amount").textItem.contents = "" }
                    else {
                        app.activeDocument.artLayers.getByName("amount").textItem.contents = arr[ban][i][j].amount;
                    }

                    app.activeDocument.activeLayer = app.activeDocument.artLayers.getByName("amount");
                    app.doAction("moveTL", "silicon");
                    var PAmount = app.activeDocument.artLayers.getByName("amount").bounds;
                    app.activeDocument.artLayers.getByName("amount").translate(PRectangleTem[2] + ((app.activeDocument.width - PRectangleTem[2] - PAmount[2] + PAmount[0]) / 2), ((app.activeDocument.height / 2) - PAmount[3] + PAmount[1]) / 2);

                    var folder1 = Folder("~/Desktop/in an/silicon " + (ban + 1) + " ngay " + day + "/tem");
                    if (!folder1.exists) { folder1.create(); }
                    app.activeDocument.saveAs(Folder("~/Desktop/in an/silicon " + (ban + 1) + " ngay " + day + "/tem/ " + arr[ban][i][j].stt + ".jpg"), JPEGSaveOptions, true, Extension.LOWERCASE);
                }
            }
        }
    }
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}








