window.onload = async () => {
    for (var param of location.hash.slice(1).split('&')) {
        if (param.startsWith('page=') && param.split('page=')[1])
            showDetail(param.split('page=')[1]);
    }
}

var details = {
    't001': {
        ico: 't001',
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
        ico: 't002',
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
                    imgId: 't002-1',
                    width: 20,
                    height: 20,
                    loading: 'lazy',
                    alt: '图片缺失或无法显示',
                    onclick: () => window.open(Img.getImg('t002-1'))
                },
            }, {
                type: 'img',
                attribute: {
                    imgId: 't002-2',
                    width: 20,
                    height: 20,
                    loading: 'lazy',
                    alt: '图片缺失或无法显示',
                    onclick: () => window.open(Img.getImg('t002-2')),
                },
            }, {
                type: 'img',
                attribute: {
                    imgId: 't002-3',
                    width: 20,
                    height: 20,
                    loading: 'lazy',
                    alt: '图片缺失或无法显示',
                    onclick: () => window.open(Img.getImg('t002-3')),
                },
            }],
        ]
    },
    't003': {
        ico: 't003',
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
        ico: 't004',
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
        ico: 't005',
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
        ico: 't006',
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
        ico: 't008',
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
        ico: 't009',
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
        ico: 't010',
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
    's1418': {
        ico: 's1418',
        name: '陈佳浩',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1419': {
        ico: 's1419',
        name: '陈墨',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1420': {
        ico: 's1420',
        name: '陈孙佑',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1421': {
        ico: 's1421',
        name: '褚钱桢',
        tags: ['安全委员'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1422': {
        ico: 's1422',
        name: '董缪晟',
        tags: ['英语课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1423': {
        ico: 's1423',
        name: '范文昊',
        tags: ['数学课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1424': {
        ico: 's1424',
        name: '管葳澄',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1425': {
        ico: 's1425',
        name: '何彦锐',
        tags: ['班长', '阳刚哥'],
        content: [[{
            type: 'h2',
            attribute: { textContent: '基本信息', }
        }], [{
            type: 'h6',
            attribute: { textContent: '籍贯：', style: 'margin: 12px' }
        }, {
            type: 'p',
            attribute: { textContent: '江苏省泰州市姜堰区；', style: 'margin: 15px' }
        }, {
            type: 'h6',
            attribute: { textContent: '生日：', style: 'margin: 12px' }
        }, {
            type: 'p',
            attribute: { textContent: '2010.01.08；', style: 'margin: 15px' }
        }]],
    },
    's1426': {
        ico: 's1426',
        name: '简林健',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1427': {
        ico: 's1427',
        name: '姜斯瀚',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1428': {
        ico: 's1428',
        name: '娄黎鑫',
        tags: ['社会课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1429': {
        ico: 's1429',
        name: '陆宇杰',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1430': {
        ico: 's1430',
        name: '吕向明',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1431': {
        ico: 's1431',
        name: '闵一睿',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1432': {
        ico: 's1432',
        name: '莫子谦',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1433': {
        ico: 's1433',
        name: '潘垚',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1434': {
        ico: 's1434',
        name: '钱中炎',
        tags: ['科学课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1435': {
        ico: 's1435',
        name: '盛锐浩',
        tags: ['体育委员'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1436': {
        ico: 's1436',
        name: '史博文',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1437': {
        ico: 's1437',
        name: '史轹文',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1438': {
        ico: 's1438',
        name: '滕一樊',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1439': {
        ico: 's1439',
        name: '严家旭',
        tags: ['英语课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1440': {
        ico: 's1440',
        name: '杨钧博',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1441': {
        ico: 's1441',
        name: '张潘锐',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1442': {
        ico: 's1442',
        name: '张天宇',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1443': {
        ico: 's1443',
        name: '郑瑜周',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1444': {
        ico: 's1444',
        name: '臣相涵',
        tags: ['科学课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1445': {
        ico: 's1445',
        name: '陈凌',
        tags: ['语文课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1446': {
        ico: 's1446',
        name: '陈欣宜',
        tags: ['语文课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1447': {
        ico: 's1447',
        name: '范馨匀',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1448': {
        ico: 's1448',
        name: '耿秋凌',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1449': {
        ico: 's1449',
        name: '顾家玥',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1450': {
        ico: 's1450',
        name: '管沈熠',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1451': {
        ico: 's1451',
        name: '李香怡',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1452': {
        ico: 's1452',
        name: '吕晋颐',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1453': {
        ico: 's1453',
        name: '钦奕晗',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1454': {
        ico: 's1454',
        name: '施秀钰',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1455': {
        ico: 's1455',
        name: '汤子菲',
        tags: ['社会课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1456': {
        ico: 's1456',
        name: '王沂栩',
        tags: ['社会课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1457': {
        ico: 's1457',
        name: '翁歆',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1458': {
        ico: 's1458',
        name: '徐逸锦',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1459': {
        ico: 's1459',
        name: '徐之悦',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1460': {
        ico: 's1460',
        name: '徐子懿',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1461': {
        ico: 's1461',
        name: '严梦淇',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1462': {
        ico: 's1462',
        name: '杨睿可',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1463': {
        ico: 's1463',
        name: '张思毓',
        tags: ['数学课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1464': {
        ico: 's1464',
        name: '张榆阳',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1465': {
        ico: 's1465',
        name: '赵余澜',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1466': {
        ico: 's1466',
        name: '钟雨旸',
        tags: ['英语课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1467': {
        ico: 's1467',
        name: '周雯超',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1468': {
        ico: 's1468',
        name: '周妍琪',
        tags: [],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
    's1469': {
        ico: 's1469',
        name: '朱子悦',
        tags: ['科学课代表'],
        content: [[{
            type: 'p',
            attribute: { textContent: '暂无介绍', }
        }]],
    },
}

details.t007 = details.t002;

function showDetail(content) {
    console.log('show detail', content);
    nowPage = content;
    var detailParam = details[content];
    document.getElementById('ico').src = Img.getImg(detailParam.ico);
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
window['showDetail'] = showDetail;
