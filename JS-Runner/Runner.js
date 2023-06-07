(async function () {
	 function sleep(ms) {
	    return new Promise(function (resolve, reject) {
		setTimeout(() => {
		    console.log('sleep end');
		    resolve();
		}, ms);
	    });
	}
 	while(true){
		await sleep(500)
		var code = document.getElementById('code')
		var out = document.getElementById('output')
		if (code && out) break
	}
	function clean(){
		out.value = ''
	}
	function show(string){
		var value = out.value
	   if (value)
		   value += '\n' + string
		else
			value = string
		out.value = value
	}
	function run(){
		clean()
		try {
			eval(code)
		} catch(error) {
			show(error)
		}
	}
})()
