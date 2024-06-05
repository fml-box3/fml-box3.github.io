if (false) {
    const addhtml = ((position, localName, data, html) => {
        var newHtml = document.createElement(localName);
        for (var name in data) {
            newHtml.setAttribute(name, data[name]);
        }
        newHtml.innerHTML = html;
        var newElement = position.appendChild(newHtml);
        return (newElement);
    });
    addhtml(document.body, "style", { type: "text/css" }, `
    html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(100%);
    }
    `);
}
document.oncontextmenu = () => false;
document.onselectstart = () => false;
document.onkeyup = () => false;