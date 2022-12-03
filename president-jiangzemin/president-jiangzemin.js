function more(){
	var div = document.getElementById('content');
	var button = document.getElementById('more');
	div.removeChild(button);

	var iframe = document.createElement('iframe');
	div = document.getElementById('content');
	iframe.src = 'https://baike.baidu.com/'
	iframe.width = 800;
	iframe.height = 600;
	div.appendChild(iframe);
}
