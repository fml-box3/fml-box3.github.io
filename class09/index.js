document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.onkeydown = () => false;
window.onload = () => {
    for (var param of location.search.slice(1).split('&')) {
        if (param.startsWith('page=') && param.split('page=')[1]) turnToPage(Number(param.split('page=')[1]))
    }
}

var nowPage = 0;
var pages = [
    [
        [{
            type: 'img',
            attribute: {
                src: 'img/img1.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: 'img1显示错误',
                onclick: () => {
                    window.open('img/img1.png');
                }
            },
            class: [
                'colorful',
            ],
        }, {
            type: 'div',
            chlidren: [{
                type: 'h3',
                attribute: {
                    textContent: '湖州市第五中学仁皇山校区',
                },
            }, {
                type: 'h3',
                attribute: {
                    textContent: '2022届初一（9）班',
                },
            }, {
                type: 'h4',
                attribute: {
                    textContent: '春季研学 | 劳动生态行 研学促成长',
                },
            }]
        }],
    ], [
        [{
            type: 'img',
            attribute: {
                src: 'img/img2.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: 'img2显示错误',
                onclick: () => {
                    window.open('img/img2.png');
                }
            },
            class: [
                'colorful',
            ],
        }, {
            type: 'div',
            chlidren: [{
                type: 'h3',
                attribute: {
                    textContent: '湖州市第五中学仁皇山校区',
                },
            }, {
                type: 'h3',
                attribute: {
                    textContent: '2022届初一（9）班',
                },
            }, {
                type: 'h4',
                attribute: {
                    textContent: '歌咏比赛 | 红心颂党恩 欢歌迎亚运',
                },
            }]
        }],
    ], [
        [{
            type: 'img',
            attribute: {
                src: 'img/img3.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: 'img3显示错误',
                onclick: () => {
                    window.open('img/img3.png');
                }
            },
            class: [
                'colorful',
            ],
        }, {
            type: 'div',
            chlidren: [{
                type: 'h3',
                attribute: {
                    textContent: '湖州市第五中学仁皇山校区',
                },
            }, {
                type: 'h3',
                attribute: {
                    textContent: '2023届初二（9）班',
                },
            }, {
                type: 'h4',
                attribute: {
                    textContent: '春季研学 | 溯源历史修文物 绿水青山来耕耘',
                },
            }]
        }],
    ], [
        [{
            type: 'img',
            attribute: {
                src: 'img/img4.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: 'img4显示错误',
                onclick: () => {
                    window.open('img/img4.png');
                }
            },
            class: [
                'colorful',
            ],
        }, {
            type: 'div',
            chlidren: [{
                type: 'h3',
                attribute: {
                    textContent: '湖州市第五中学仁皇山校区',
                },
            }, {
                type: 'h3',
                attribute: {
                    textContent: '2023届初二（9）班',
                },
            }, {
                type: 'h4',
                attribute: {
                    textContent: '朗诵比赛 | 青春以诗言志 励志以声绘梦',
                },
            }]
        }],
    ], [
        [{
            type: 'h2',
            attribute: {
                textContent: '教师团队',
            },
        }], [{
            type: 'h3',
            attribute: {
                textContent: '初一：',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '语文黄老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '数学王老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '英语李老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '科学叶老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '社会张老师',
            },
        }], [{
            type: 'h3',
            attribute: {
                textContent: '初二：',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '语文盛老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '数学王老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '英语陈老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '科学王老师',
            },
        }, {
            type: 'h5',
            attribute: {
                textContent: '社会施老师',
            },
        }]
    ],
];

function createElement(elementParam) {
    var element = document.createElement(elementParam.type);
    if (elementParam.attribute) {
        for (var attributeKey of Object.keys(elementParam.attribute)) {
            element[attributeKey] = elementParam.attribute[attributeKey];
        }
    }
    if (elementParam.class) {
        for (var className of elementParam.class) {
            element.classList.add(className);
        }
    }
    if (elementParam.chlidren) {
        for (var chlidrenParam of elementParam.chlidren) {
            element.appendChild(createElement(chlidrenParam));
        }
    }
    return element;
}
function turnToPage(page) {
    console.log('turn to page ' + page);
    var divContent = document.getElementById('content');
    while (divContent.childNodes.length) {
        divContent.childNodes.forEach((node) => {
            divContent.removeChild(node);
        });
    }

    var pageParam = pages[page - 1];
    for (var lineParam of pageParam) {
        var lineDiv = document.createElement('div');
        lineDiv.classList.add('flex');
        for (var elementParam of lineParam) {
            lineDiv.appendChild(createElement(elementParam));
        }
        divContent.appendChild(lineDiv);
    }


    for (let i = 0; i < 2; i++)
        divContent.appendChild(document.createElement('br'));

    var divContorl = document.createElement('div');
    divContorl.id = 'contorl';
    divContorl.classList.add('flex');

    var lastbtn = document.createElement('button');
    lastbtn.onclick = () => turnToPage(page - 1);
    lastbtn.textContent = '<<';
    divContorl.appendChild(lastbtn);

    var pageText = document.createElement('p');
    pageText.textContent = `九班传奇 ${page} / ${pages.length}`;
    divContorl.appendChild(pageText);

    var nextbtn = document.createElement('button');
    nextbtn.onclick = () => turnToPage(page + 1);
    nextbtn.textContent = '>>';
    divContorl.appendChild(nextbtn);

    if (page == 1) lastbtn.disabled = true;
    if (page == pages.length) nextbtn.disabled = true;

    divContent.appendChild(divContorl);

    nowPage = page;
    return page;
}
function share(thisPage) {
    var shareContent = window.location.origin + window.location.pathname;
    if (thisPage) shareContent += '?page=' + nowPage;
    navigator.clipboard.writeText(shareContent)
        .then(() => alert('复制成功! 快去发送吧~'))
        .catch(() => alert('复制异常'));
}
