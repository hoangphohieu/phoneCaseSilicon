
app.preferences.rulerUnits = Units.PIXELS; // hệ đo pixel
{ // UI dialog
    var dialog = new Window("dialog");
    dialog.text = "in silicon";
    dialog.preferredSize.width = 300;
    dialog.preferredSize.height = 200;
    dialog.orientation = "column";
    dialog.alignChildren = ["center", "top"];
    dialog.spacing = 10;
    dialog.margins = 16;

    // GROUP1
    // ======
    var group1 = dialog.add("group", undefined, { name: "group1" });
    group1.orientation = "row";
    group1.alignChildren = ["left", "center"];
    group1.spacing = 10;
    group1.margins = 0;

    var statictext1 = group1.add("statictext", undefined, undefined, { name: "statictext1" });
    statictext1.text = "Đơn vị: mm";

    // GROUP2
    // ======
    var group2 = dialog.add("group", undefined, { name: "group2" });
    group2.orientation = "row";
    group2.alignChildren = ["left", "center"];
    group2.spacing = 10;
    group2.margins = 0;

    // PANEL1
    // ======
    var panel1 = group2.add("panel", undefined, undefined, { name: "panel1" });
    panel1.text = "Chiều rộng";
    panel1.preferredSize.width = 130;
    panel1.orientation = "column";
    panel1.alignChildren = ["fill", "top"];
    panel1.spacing = 10;
    panel1.margins = 10;

    var edittext1 = panel1.add('edittext {properties: {name: "edittext1"}}');
    edittext1.text = "";

    // PANEL2
    // ======
    var panel2 = group2.add("panel", undefined, undefined, { name: "panel2" });
    panel2.text = "Chiều cao";
    panel2.preferredSize.width = 130;
    panel2.orientation = "column";
    panel2.alignChildren = ["fill", "top"];
    panel2.spacing = 10;
    panel2.margins = 10;

    var edittext2 = panel2.add('edittext {properties: {name: "edittext2"}}');
    edittext2.text = "";

    // PANEL3
    // ======
    var panel3 = dialog.add("panel", undefined, undefined, { name: "panel3" });
    panel3.text = "Mã Design";
    panel3.preferredSize.width = 272;
    panel3.orientation = "column";
    panel3.alignChildren = ["fill", "top"];
    panel3.spacing = 10;
    panel3.margins = 10;

    var edittext3 = panel3.add('edittext {properties: {name: "edittext3"}}');
    edittext3.text = "";

    // PANEL4
    // ======
    var panel4 = dialog.add("panel", undefined, undefined, { name: "panel4" });
    panel4.text = "Tên lưu";
    panel4.preferredSize.width = 272;
    panel4.orientation = "column";
    panel4.alignChildren = ["fill", "top"];
    panel4.spacing = 10;
    panel4.margins = 10;

    var edittext4 = panel4.add('edittext {properties: {name: "edittext4"}}');
    edittext4.text = "";



    // DIALOG type
    // ======
    var dropdown1_array = ["Glass", "Luminous", "Led", "Silicon120", "Silicon80"];
    var dropdown1 = dialog.add("dropdownlist", undefined, undefined, { name: "dropdown1", items: dropdown1_array });
    dropdown1.selection = 0;
    dropdown1.preferredSize.width = 100;


    // GROUP3
    // ======
    var group3 = dialog.add("group", undefined, { name: "group3" });
    group3.orientation = "row";
    group3.alignChildren = ["center", "center"];
    group3.spacing = 40;
    group3.margins = 0;

    var button1 = group3.add("button", undefined, undefined, { name: "button1" });
    button1.text = "OK";
    button1.justify = "left";

    var button2 = group3.add("button", undefined, undefined, { name: "button2" });
    button2.text = "Hủy";


    // GROUP2
}

button1.onClick = function () { // on click oke


    if (edittext1.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }
    else if (isNaN(Number(edittext1.text))) {
        alert("Nhập sai thông tin !");
    }
    else if (edittext2.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }
    else if (isNaN(Number(edittext2.text))) {
        alert("Nhập sai thông tin !");
    }
    else if (edittext3.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }
    else if (edittext4.text == "") {
        alert("Nhập đẩy đủ thông tin !");
    }

    else {  // bắt đầu xử lý ảnh
        if (String(dropdown1.selection) == "Glass") {
            createOneGlass(edittext1.text, edittext2.text, edittext3.text, edittext4.text);
        }
        else if (String(dropdown1.selection) == "Luminous") {
            createOneLuminous(edittext1.text, edittext2.text, edittext3.text, edittext4.text);
        }
        else if (String(dropdown1.selection) == "Led") {
            createOneLed(edittext1.text, edittext2.text, edittext3.text, edittext4.text);
        }
        else if (String(dropdown1.selection) == "Silicon120") {
            createOneSilicon120(edittext1.text, edittext2.text, edittext3.text, edittext4.text);
        }
        else if (String(dropdown1.selection) == "Silicon80") {
            createOneSilicon80(edittext1.text, edittext2.text, edittext3.text, edittext4.text);
        }

    }




    dialog.hide();


    // alert(edittext1.text);

};
button2.onClick = function () { // onclick hủy
    dialog.hide();
};
dialog.show();


function createOneSilicon120(wphone, hphone, idDesign, saveName) {

    try {
        var paddingPrintTB = 5;
        var paddingPrintLR = 5;
        wphone = Math.round(wphone / 0.084667);
        hphone = Math.round(hphone / 0.084667);
        app.open(File("~/Desktop/file design/" + idDesign + ".tif"));
        var checkIdDesign = idDesign.split("-");
        checkIdDesign = checkIdDesign[checkIdDesign.length - 1];
        if (checkIdDesign !== "spot") {
            if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                app.activeDocument.activeLayer.name = "1";
                app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
                { // resize layer về cỡ cần in
                    if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                    else { var newSize = (hphone * 100 / 2400) }
                    app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                }
                app.activeDocument.mergeVisibleLayers(); // gộp all layer 
                app.doAction("createRectangle120", "autoUv");
                // app.doAction("createRectangle80", "silicon");
                var cropw = (wphone - Math.round(paddingPrintLR / 0.084667)) * 100 / 1000;
                var croph = (hphone - Math.round(paddingPrintTB / 0.084667)) * 100 / 1500;
                app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                app.doAction("selectAreaLayer", "autoUv");
                app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();
                app.doAction("duplicateSelection", "autoUv"); // tạo layer mới từ vùng chọn
                app.activeDocument.activeLayer.name = "2";
                app.doAction("createSpot", "autoUv");
                app.activeDocument.artLayers.getByName("Background").visible = false;
                app.activeDocument.artLayers.getByName("2").visible = false;
                app.doAction("createSpotChannel", 'autoUv');
                app.activeDocument.artLayers.getByName("Background").visible = true;
                app.activeDocument.artLayers.getByName("2").visible = true;
                app.doAction("createCMYKOne", "autoUv");
            }
            else { alert("file design khong > 1 layer") };
        }
        else {
            if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                app.activeDocument.activeLayer.name = "1";
                app.activeDocument.artLayers.add();
                app.doAction("strokeWhite1px", "autoUv");
                app.activeDocument.mergeVisibleLayers();
                // app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
                { // resize layer về cỡ cần in
                    if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                    else { var newSize = (hphone * 100 / 2400) }
                    app.activeDocument.artLayers[0].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                }
                app.activeDocument.selection.selectAll(); // chọn tất cả ctrl + A
                app.doAction("createRectangle120", "autoUv");
                var cropw = wphone * 100 / 1000;
                var croph = hphone * 100 / 1500;
                app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                app.doAction("selectAreaLayer", "autoUv");
                app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();
                app.doAction("duplicateSelection", "autoUv"); // tạo layer mới từ vùng chọn
                app.doAction("strokeWhite1px", "autoUv");
                app.activeDocument.artLayers[1].remove();
                app.doAction("selectArea", "autoUv");
                app.activeDocument.selection.contract(1);
                app.doAction("createSPOTWithArea", "autoUv");

            }
            else { alert("file design khong > 1 layer") };

        }
        app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

    } catch (error) {
        alert("sai mã Design !")
    }

}

function createOneSilicon80(wphone, hphone, idDesign, saveName) {

    try {
        var paddingPrintTB = 5;
        var paddingPrintLR = 5;
        wphone = Math.round(wphone / 0.084667);
        hphone = Math.round(hphone / 0.084667);
        app.open(File("~/Desktop/file design/" + idDesign + ".tif"));
        var checkIdDesign = idDesign.split("-");
        checkIdDesign = checkIdDesign[checkIdDesign.length - 1];
        if (checkIdDesign !== "spot") {
            if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                app.activeDocument.activeLayer.name = "1";
                app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
                { // resize layer về cỡ cần in
                    if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                    else { var newSize = (hphone * 100 / 2400) }
                    app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                }
                app.activeDocument.mergeVisibleLayers(); // gộp all layer 
                // app.doAction("createRectangle120", "autoUv");
                app.doAction("createRectangle80", "autoUv");
                var cropw = (wphone - Math.round(paddingPrintLR / 0.084667)) * 100 / 1000;
                var croph = (hphone - Math.round(paddingPrintTB / 0.084667)) * 100 / 1500;
                app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                app.doAction("selectAreaLayer", "autoUv");
                app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();
                app.doAction("duplicateSelection", "autoUv"); // tạo layer mới từ vùng chọn
                app.activeDocument.activeLayer.name = "2";
                app.doAction("createSpot", "autoUv");
                app.activeDocument.artLayers.getByName("Background").visible = false;
                app.activeDocument.artLayers.getByName("2").visible = false;
                app.doAction("createSpotChannel", 'autoUv');
                app.activeDocument.artLayers.getByName("Background").visible = true;
                app.activeDocument.artLayers.getByName("2").visible = true;
                app.doAction("createCMYKOne", "autoUv");
            }
            else { alert("file design khong > 1 layer") };
        }
        else {
            if (app.activeDocument.artLayers.length === 1) { // nhân đôi layer, kiểm tra nếu có 2 layer là phải làm lại từ đầu
                app.activeDocument.activeLayer.name = "1";
                app.activeDocument.artLayers.add();
                app.doAction("strokeWhite1px", "autoUv");
                app.activeDocument.mergeVisibleLayers();
                // app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
                app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
                { // resize layer về cỡ cần in
                    if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                    else { var newSize = (hphone * 100 / 2400) }
                    app.activeDocument.artLayers[0].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                }
                app.activeDocument.selection.selectAll(); // chọn tất cả ctrl + A
                app.doAction("createRectangle80", "autoUv");
                var cropw = wphone * 100 / 1000;
                var croph = hphone * 100 / 1500;
                app.activeDocument.activeLayer.resize(cropw, croph, AnchorPosition.MIDDLECENTER);
                app.doAction("selectAreaLayer", "autoUv");
                app.activeDocument.artLayers.getByName("Rounded Rectangle 1").remove();
                app.doAction("duplicateSelection", "autoUv"); // tạo layer mới từ vùng chọn
                app.doAction("strokeWhite1px", "autoUv");
                app.activeDocument.artLayers[1].remove();
                app.doAction("selectArea", "autoUv");
                app.activeDocument.selection.contract(1);
                app.doAction("createSPOTWithArea", "autoUv");

            }
            else { alert("file design khong > 1 layer") };

        }

    } catch (error) {
        alert("sai mã Design !")
    }
    app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
    app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);

}
function createOneGlass(wphone, hphone, idDesign, saveName) {
    wphone = Math.round(wphone / 0.084667);
    hphone = Math.round(hphone / 0.084667);
    try {
        app.open(File("~/Desktop/file design/" + idDesign + ".tif"));
        if (app.activeDocument.width !== 1200 || app.activeDocument.height !== 2400) {
            alert(idDesign, " khác cỡ 1200 x 2400 !")
        }
        else if (app.activeDocument.artLayers.length === 1) {
            app.activeDocument.activeLayer.name = "1";
            app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
            app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
            { // resize layer về cỡ cần in
                if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                else { var newSize = (hphone * 100 / 2400) }
                app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                app.activeDocument.mergeVisibleLayers(); // gộp all layer 

            }
            app.activeDocument.selection.selectAll();
            app.doAction("createSPOTWithArea", "autoUv");
            app.activeDocument.rotateCanvas(180);
            app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        else { alert("file design không > 1 layer !") };

    } catch (error) {
        alert("sai mã Design !")

    }
}

function createOneLuminous(wphone, hphone, idDesign, saveName) {
    wphone = Math.round(wphone / 0.084667);
    hphone = Math.round(hphone / 0.084667);
    try {
        app.open(File("~/Desktop/file design/" + idDesign + ".tif"));
        if (app.activeDocument.width !== 1200 || app.activeDocument.height !== 2400) {
            alert(idDesign, " khác cỡ 1200 x 2400 !")
        }
        else if (app.activeDocument.artLayers.length === 1) {
            app.activeDocument.activeLayer.name = "1";
            app.activeDocument.activeLayer.duplicate(app.activeDocument.activeLayer, ElementPlacement.PLACEBEFORE); // nhân đôi layer
            app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
            { // resize layer về cỡ cần in
                if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                else { var newSize = (hphone * 100 / 2400) }
                app.activeDocument.artLayers["1 copy"].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                app.activeDocument.mergeVisibleLayers(); // gộp all layer 
                app.activeDocument.rotateCanvas(180);

            }
            app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + ".tif"), TiffSaveOptions, false, Extension.LOWERCASE);
            app.activeDocument.artLayers.add();
            app.activeDocument.artLayers[1].remove();
            app.activeDocument.selection.selectAll();
            app.doAction("createSPOTWithArea", "autoUv");
            app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + "-white.tif"), TiffSaveOptions, false, Extension.LOWERCASE);

            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        else { alert("file design không > 1 layer !") };

    } catch (error) {
        alert("sai mã Design !")

    }
}

function createOneLed(wphone, hphone, idDesign, saveName) {
    // try {
    wphone = Math.round(wphone / 0.084667);
    hphone = Math.round(hphone / 0.084667);
    app.open(File("~/Desktop/file design/" + idDesign + ".tif"));
    app.open(File("~/Desktop/file design/" + idDesign + "flash.tif"));
    if (app.documents.getByName(idDesign + ".tif").width !== 1200 || app.documents.getByName(idDesign + ".tif").height !== 2400) {
        alert(arr[i][j].idDesign, " khác cỡ 1200 x 2400 !")
    }
    else if (app.documents.getByName(idDesign + "flash.tif").width !== 1200 || app.documents.getByName(idDesign + "flash.tif").height !== 2400) {
        alert(arr[i][j].idDesign, " khác cỡ 1200 x 2400 !")
    }
    else if (app.documents.getByName(idDesign + "flash.tif").artLayers.length === 1) {
        app.activeDocument = app.documents.getByName(idDesign + "flash.tif");
        app.activeDocument.artLayers.add();
        app.activeDocument.mergeVisibleLayers();
        app.doAction("strokeWhite1px", "autoUv");
        app.activeDocument.activeLayer.duplicate(app.documents.getByName(idDesign + ".tif").activeLayer, ElementPlacement.PLACEBEFORE);
        app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        if (app.activeDocument.artLayers.length === 2) {
            app.activeDocument.rotateCanvas(180);
            app.activeDocument.artLayers.getByName("Background").duplicate(app.activeDocument.artLayers.getByName("Background"), ElementPlacement.PLACEBEFORE);
            app.activeDocument.resizeCanvas(wphone, hphone); // resize canvas về cỡ cần in với loại điện thoại
            { // resize layer về cỡ cần in
                if ((hphone / wphone) < 2) { var newSize = (wphone * 100 / 1200) }
                else { var newSize = (hphone * 100 / 2400) }
                app.activeDocument.artLayers[0].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                app.activeDocument.artLayers[1].resize(newSize, newSize, AnchorPosition.MIDDLECENTER);
                app.activeDocument.selection.selectAll();
                app.doAction("createSPOTWithArea", "autoUv");
                app.activeDocument.activeLayer = app.activeDocument.artLayers[0];
                app.doAction("selectArea", "autoUv");
                app.activeDocument.activeChannels = [app.activeDocument.channels.getByName("Spot Color 1")];
                app.doAction("fillChannelsLED0", "autoUv");
                showRGBChannel(); 
                app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + " in 1.tif"), TiffSaveOptions, false, Extension.LOWERCASE);
                app.activeDocument.channels.getByName("Spot Color 1").remove();
                app.activeDocument.activeLayer = app.activeDocument.artLayers[0];
                app.activeDocument.artLayers.add();
                app.activeDocument.selection.selectAll();
                {
                    var bColor = new SolidColor;
                    bColor.cmyk.cyan = 75;
                    bColor.cmyk.magenta = 68;
                    bColor.cmyk.yellow = 67;
                    bColor.cmyk.black = 90;
                    var wColor = new SolidColor;
                    wColor.rgb.red = 255;
                    wColor.rgb.green = 255;
                    wColor.rgb.ble = 255;

                }
                app.activeDocument.selection.fill(bColor);
                app.activeDocument.activeLayer = app.activeDocument.artLayers[1];
                app.doAction("selectArea", "autoUv");
                app.activeDocument.activeLayer = app.activeDocument.artLayers[0];
                app.activeDocument.selection.fill(wColor);
                app.activeDocument.selection.deselect();
                app.doAction("createSPOTWithArea", "autoUv");
                app.activeDocument.activeLayer = app.activeDocument.artLayers[1];
                app.doAction("selectArea", "autoUv");
                app.activeDocument.activeChannels = [app.activeDocument.channels.getByName("Spot Color 1")];
                app.doAction("fillChannelsLED20", "autoUv");
                showRGBChannel();
                app.activeDocument.saveAs(Folder("~/Desktop/in an/" + saveName + " in 2.tif"), TiffSaveOptions, false, Extension.LOWERCASE);

                app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            }

        }
        else { alert("file design không > 1 layer !") };
    }
    else { alert("file design không > 1 layer !") };
    // } catch (error) {
    //       alert("sai mã Design hoặc thiếu file flash!")

    // }
}


function showRGBChannel() {
    app.activeDocument.channels.getByName("Red").visible = true;
    app.activeDocument.channels.getByName("Green").visible = true;
    app.activeDocument.channels.getByName("Blue").visible = true;
}
