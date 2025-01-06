document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.onkeydown = () => false;
document.addEventListener('DOMContentLoaded', () => {
    let ua = detect.parse(navigator.userAgent);
    document.body.classList.add(ua.device.type);
})
window.nowPage = 0;

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

class Img {
    static loaded = false;
    static imgs = {
        'error': 'img/error.png',
        '1': 'img/1.png',
        '2': 'img/2.png',
        '3': 'img/3.png',
        '4': 'img/4.png',
        's1418': 'img/s1418.png',
        's1419': 'img/s1419.png',
        's1420': 'img/s1420.png',
        's1421': 'img/s1421.png',
        's1422': 'img/s1422.png',
        's1423': 'img/s1423.png',
        's1424': 'img/s1424.png',
        's1425': 'img/s1425.png',
        's1426': 'img/s1426.png',
        's1427': 'img/s1427.png',
        's1428': 'img/s1428.png',
        's1429': 'img/s1429.png',
        's1430': 'img/s1430.png',
        's1431': 'img/s1431.png',
        's1432': 'img/s1432.png',
        's1433': 'img/s1433.png',
        's1434': 'img/s1434.png',
        's1435': 'img/s1435.png',
        's1436': 'img/s1436.png',
        's1437': 'img/s1437.png',
        's1438': 'img/s1438.png',
        's1439': 'img/s1439.png',
        's1440': 'img/s1440.png',
        's1441': 'img/s1441.png',
        's1442': 'img/s1442.png',
        's1443': 'img/s1443.png',
        's1444': 'img/s1444.png',
        's1445': 'img/s1445.png',
        's1446': 'img/s1446.png',
        's1447': 'img/s1447.png',
        's1448': 'img/s1448.png',
        's1449': 'img/s1449.png',
        's1450': 'img/s1450.png',
        's1451': 'img/s1451.png',
        's1452': 'img/s1452.png',
        's1453': 'img/s1453.png',
        's1454': 'img/s1454.png',
        's1455': 'img/s1455.png',
        's1456': 'img/s1456.png',
        's1457': 'img/s1457.png',
        's1458': 'img/s1458.png',
        's1459': 'img/s1459.png',
        's1460': 'img/s1460.png',
        's1461': 'img/s1461.png',
        's1462': 'img/s1462.png',
        's1463': 'img/s1463.png',
        's1464': 'img/s1464.png',
        's1465': 'img/s1465.png',
        's1466': 'img/s1466.png',
        's1467': 'img/s1467.png',
        's1468': 'img/s1468.png',
        's1469': 'img/s1469.png',
        't001': 'img/t001.png',
        't002': 'img/t002.png',
        't003': 'img/t003.png',
        't004': 'img/t004.png',
        't005': 'img/t005.png',
        't006': 'img/t006.png',

        't008': 'img/t008.png',
        't009': 'img/t009.png',
        't010': 'img/t010.png',
        't011': 'img/t011.png',
        
        't013': 'img/t013.png',
        't014': 'img/t014.png',
        't015': 'img/t015.png',

        't002-1': 'img/t002-1.png',
        't002-2': 'img/t002-2.png',
        't002-3': 'img/t002-3.png',
    }

    static getImg(id) {
        if (this.imgs[id]) return this.imgs[id];
        else return this.getImg('error');
    }

    static async loadAllImg() {
        let loader = document.querySelector("#loader");
        let img = document.querySelector("#loadingimg");
        let text = document.querySelector("#loadingtxt");
        if (getCookie("imgs") != "") {
            Img.imgs = JSON.parse(getCookie("imgs"));
            loader.parentNode && loader.parentNode.removeChild(loader);
            Img.loaded = true;
            return;
        };
        let index = 0;
        let solve = undefined;
        for (var id of Object.keys(Img.imgs)) {
            img.src = Img.imgs[id];
            img.onload = function () {
                index++;
                text.innerHTML = 'Loading (' + index + '/' + Object.keys(Img.imgs).length + ') ...';
                solve();
            };
            img.onerror = function () {
                console.warn('error load img: ' + id);
                Img.imgs[id] = Img.getImg('error');
                index++;
                text.innerHTML = 'Loading (' + index + '/' + Object.keys(Img.imgs).length + ') ...';
                solve();
            };
            await new Promise(resolve => solve = resolve);
        }
        setCookie("imgs", JSON.stringify(Img.imgs), 14);
        loader.parentNode && loader.parentNode.removeChild(loader);
        Img.loaded = true;
    }
}

function createElement(elementParam) {
    var element = document.createElement(elementParam.type);
    if (elementParam.attribute)
        for (var attributeKey of Object.keys(elementParam.attribute)) {
            if (elementParam.type == 'img' && attributeKey == 'imgId')
                element.src = Img.getImg(elementParam.attribute[attributeKey]);
            else
                element[attributeKey] = elementParam.attribute[attributeKey];
        }
    if (elementParam.class)
        for (var className of elementParam.class)
            element.classList.add(className);
    if (elementParam.chlidren)
        for (var chlidrenParam of elementParam.chlidren)
            element.appendChild(createElement(chlidrenParam));
    return element;
}
window['createElement'] = createElement;
window['Img'] = Img;

document.addEventListener('DOMContentLoaded', Img.loadAllImg);
