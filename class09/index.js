document.oncontextmenu = () => false;
document.onselectstart = () => false;
// document.onkeydown = () => false;
window.onload = () => {
    switch (document.body.id) {
        case 'index':
            for (var param of location.hash.slice(1).split('&')) {
                if (param.startsWith('page=') && param.split('page=')[1])
                    turnToPage(Number(param.split('page=')[1]));
            }
            break;
        case 'detail':
            for (var param of location.hash.slice(1).split('&')) {
                if (param.startsWith('detail=') && param.split('detail=')[1])
                    showDetail(param.split('detail=')[1]);
            }
            break;
    }
}

var nowPage = 0;
var details = {
    't001': {
        ico: 'img/t001.png',
        name: '黄娜青',
        tags: ['初一·语文老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't002': {
        ico: 'img/t002.png',
        name: '王小白',
        tags: ['初一·数学老师', '初二·数学老师'],
        content: [
            [{
                type: 'h3',
                attribute: {
                    textContent: '名人名言：',
                },
            }], [{
                type: 'h6',
                attribute: {
                    textContent: '蠢得跟头牛一样；',
                },
            }, {
                type: 'h6',
                attribute: {
                    textContent: '浪费北京时间；',
                },
            }, {
                type: 'h6',
                attribute: {
                    textContent: '秒杀题；',
                },
            }], [{
                type: 'br',
            }], [{
                type: 'h4',
                attribute: {
                    textContent: '更多图片（点击查看大图）：',
                },
            }], [{
                type: 'img',
                attribute: {
                    src: 'img/t002-1.png',
                    width: 20,
                    height: 20,
                    loading: 'lazy',
                    alt: '图片缺失或无法显示',
                    onclick: () => window.open('img/t002-1.png')
                },
            }, {
                type: 'img',
                attribute: {
                    src: 'img/t002-2.png',
                    width: 20,
                    height: 20,
                    loading: 'lazy',
                    alt: '图片缺失或无法显示',
                    onclick: () => window.open('img/t002-2.png'),
                },
            }, {
                type: 'img',
                attribute: {
                    src: 'img/t002-3.png',
                    width: 20,
                    height: 20,
                    loading: 'lazy',
                    alt: '图片缺失或无法显示',
                    onclick: () => window.open('img/t002-3.png'),
                },
            }],
        ]
    },
    't003': {
        ico: 'img/t003.png',
        name: '李芳',
        tags: ['初一·英语老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't004': {
        ico: 'img/t004.png',
        name: '叶倩文',
        tags: ['初一·科学老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't005': {
        ico: 'img/t005.png',
        name: '张耀',
        tags: ['初一·班主任', '初一·社会老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't006': {
        ico: 'img/t006.png',
        name: '盛敏',
        tags: ['初二·语文老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't007': {},
    't008': {
        ico: 'img/t008.png',
        name: '陈丽娜',
        tags: ['初二·英语老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't009': {
        ico: 'img/t009.png',
        name: '王晗明',
        tags: ['初二·班主任', '初二·科学老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
    't010': {
        ico: 'img/t010.png',
        name: '施丽',
        tags: ['初二社会老师'],
        content: [
            [{
                type: 'p',
                attribute: {
                    textContent: '暂无介绍',
                },
            }],
        ]
    },
}
details['t007'] = details['t002'];
var pages = [
    [
        [{
            type: 'img',
            attribute: {
                src: 'img/1.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open('img/1.png');
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
        }], [{
            type: 'a',
            attribute: {
                href: 'https://mp.weixin.qq.com/s/f7s5QInwEj0HnKnaxSZBwA',
            },
            chlidren: [{
                type: 'p',
                attribute: {
                    textContent: '微信公众号“毓仁慧心”·《春季研学 | 劳动生态行 研学促成长》',
                }
            }]
        }],
    ], [
        [{
            type: 'img',
            attribute: {
                src: 'img/2.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open('img/2.png');
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
        }], [{
            type: 'a',
            attribute: {
                href: 'https://mp.weixin.qq.com/s/zRho-PLKcMzi6jqCVBuzKA',
            },
            chlidren: [{
                type: 'p',
                attribute: {
                    textContent: '微信公众号“毓仁慧心”·《红色乐章 | 红心颂党恩 欢歌迎亚运》',
                }
            }]
        }],
    ], [
        [{
            type: 'img',
            attribute: {
                src: 'img/3.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open('img/3.png');
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
        }], [{
            type: 'a',
            attribute: {
                href: 'https://mp.weixin.qq.com/s/YnYPuKZTb4aXEHwgRv0MCA',
            },
            chlidren: [{
                type: 'p',
                attribute: {
                    textContent: '微信公众号“毓仁慧心”·《春季研学 | 溯源历史修文物 绿水青山来耕耘》',
                }
            }]
        }],
    ], [
        [{
            type: 'img',
            attribute: {
                src: 'img/4.png',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open('img/4.png');
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
        }], [{
            type: 'a',
            attribute: {
                href: 'https://mp.weixin.qq.com/s/J2UYW2NCSpMq746tQaiDAg',
            },
            chlidren: [{
                type: 'p',
                attribute: {
                    textContent: '微信公众号“毓仁慧心”·《青春以诗言志 励志以声绘梦》',
                }
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
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t001',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '语文黄老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t002',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '数学王老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t003',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '英语李老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t004',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '科学叶老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t005',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '社会张老师',
                },
            }],
        }], [{
            type: 'h3',
            attribute: {
                textContent: '初二：',
            },
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t006',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '语文盛老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t007',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '数学王老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t008',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '英语陈老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t009',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '科学王老师',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#detail=t010',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '社会施老师',
                },
            }],
        }],
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
function showDetail(content) {
    console.log('show detail', content)
    var detailParam = details[content];
    document.getElementById('ico').src = detailParam.ico;
    document.getElementById('ico').onclick = () => window.open(detailParam.ico);
    document.getElementById('name').textContent = detailParam.name;
    for (var tag of detailParam.tags) {
        var tagElement = document.createElement('tag');
        tagElement.innerHTML = tag;
        document.getElementById('tags').appendChild(tagElement);
    }

    var pageParam = detailParam.content;
    for (var lineParam of pageParam) {
        var lineDiv = document.createElement('div');
        lineDiv.classList.add('flex');
        for (var elementParam of lineParam) {
            lineDiv.appendChild(createElement(elementParam));
        }
        document.getElementById('details').appendChild(lineDiv);
    }
}
function turnToPage(page) {
    console.log('turn to page ', page);
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

    var contorlDiv = document.getElementById('contorl');
    contorlDiv.classList.remove('hide');

    var lastbtn = document.getElementById('lastbtn');
    lastbtn.onclick = () => turnToPage(page - 1);

    var pageText = document.getElementById('pagetxt');
    pageText.textContent = `九班传奇 ${page} / ${pages.length}`;

    var nextbtn = document.getElementById('nextbtn');
    nextbtn.onclick = () => turnToPage(page + 1);

    if (page == 1) lastbtn.disabled = true;
    else lastbtn.disabled = false;
    if (page == pages.length) nextbtn.disabled = true;
    else nextbtn.disabled = false;

    nowPage = page;
    if (location.hash != '#page=' + nowPage) location.hash = '#page=' + nowPage;
    return page;
}
function share(thisPage) {
    var shareContent = window.location.origin + window.location.pathname;
    if (thisPage) shareContent += '#page=' + nowPage;
    navigator.clipboard.writeText(shareContent)
        .then(() => alert('复制成功! 快去发送吧~'))
        .catch((e) => alert('复制异常，错误信息:', e));
}
window['share'] = share;
window['turnToPage'] = turnToPage;
