window.onload = async () => {
    var startbtn = document.querySelector("#startbtn");
    startbtn.onclick = () => turnToPage(1);
    for (var param of location.hash.slice(1).split('&')) {
        if (param.startsWith('page=') && param.split('page=')[1])
            turnToPage(Number(param.split('page=')[1]));
    }
}

var pages = [
    [
        [{
            type: 'h2',
            attribute: {
                textContent: '我们九班',
            },
        }], [{
            type: 'p',
            attribute: {
                textContent: '点击可跳转详情页面',
            },
        }], [{
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1418',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '陈佳浩',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1419',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '陈&#160;&#160;&#160;墨',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1420',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '陈孙佑',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1421',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '褚钱桢',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1422',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '董缪晟',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1423',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '范文昊',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1424',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '管葳澄',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1425',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '何彦锐',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1426',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '简林健',
                },
            }],
        }], [{
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1427',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '姜斯瀚',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1428',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '娄黎鑫',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1429',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '陆宇杰',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1430',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '吕向明',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1431',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '闵一睿',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1432',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '莫子谦',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1433',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '潘&#160;&#160;&#160;垚',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1434',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '钱中炎',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1435',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '盛锐浩',
                },
            }],
        }], [{
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1436',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '史博文',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1437',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '史轹文',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1438',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '滕一樊',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1439',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '严家旭',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1440',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '杨钧博',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1441',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '张潘锐',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1442',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '张天宇',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1443',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '郑瑜周',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1444',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '臣相涵',
                },
            }],
        }], [{
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1445',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '陈&#160;&#160;&#160;凌',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1446',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '陈欣宜',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1447',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '范馨匀',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1448',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '耿秋凌',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1449',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '顾家玥',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1450',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '管沈熠',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1451',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '李香怡',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1452',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '吕晋颐',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1453',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '钦奕晗',
                },
            }],
        }], [{
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1454',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '施秀钰',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1455',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '汤子菲',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1456',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '王沂栩',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1457',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '翁&#160;&#160;&#160;歆',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1458',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '徐逸锦',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1459',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '徐之悦',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1460',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '徐子懿',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1461',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '严梦淇',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1462',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '杨睿可',
                },
            }],
        }], [{
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1463',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '张思毓',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1464',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '张榆阳',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1465',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '赵余澜',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1466',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '钟雨旸',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1467',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '周雯超',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1468',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '周妍琪',
                },
            }],
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=s1469',
            },
            chlidren: [{
                type: 'h6',
                attribute: {
                    innerHTML: '朱子悦',
                },
            }],
        }],
    ], [
        [{
            type: 'h2',
            attribute: {
                textContent: '教师团队',
            },
        }], [{
            type: 'p',
            attribute: {
                textContent: '点击可跳转详情页面',
            }
        }], [{
            type: 'h3',
            attribute: {
                textContent: '初一：',
            },
        }, {
            type: 'a',
            attribute: {
                href: 'detail.html#page=t001',
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
                href: 'detail.html#page=t002',
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
                href: 'detail.html#page=t003',
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
                href: 'detail.html#page=t004',
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
                href: 'detail.html#page=t005',
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
                href: 'detail.html#page=t006',
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
                href: 'detail.html#page=t007',
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
                href: 'detail.html#page=t008',
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
                href: 'detail.html#page=t009',
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
                href: 'detail.html#page=t010',
            },
            chlidren: [{
                type: 'h5',
                attribute: {
                    textContent: '社会施老师',
                },
            }],
        }],
    ], [
        [{
            type: 'h1',
            attribute: {
                textContent: '集体大事迹',
            },
        }]
    ], [
        [{
            type: 'img',
            attribute: {
                imgId: '1',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open(Img.getImg('1'));
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
                imgId: '2',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open(Img.getImg('2'));
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
                imgId: '3',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open(Img.getImg('3'));
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
                imgId: '4',
                width: 432,
                height: 240,
                loading: 'lazy',
                alt: '图片缺失或无法显示',
                onclick: () => {
                    window.open(Img.getImg('4'));
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
                textContent: '更多辉煌等你创造……',
            },
        }],
    ],
];


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
window['turnToPage'] = turnToPage;