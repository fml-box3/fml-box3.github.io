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
		var out = document.getElementById('out')
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
		(async () => {
			try {
				show(eval(code.value))
				show('Run successfully ended')
			} catch(error) {
				show(error)
			}
		})()
	}
	function help(){
		show('点击运行或调用run()运行代码')
		show('调用show(string)以输出string')
		show('调用clean()以清空输入框')
		show('调用help()以获取帮助')
		show('使用await sleep(ms)来等待时间')
		show('注：运行时默认选用异步运行')
	}
	Object.assign(globalThis, {
		clean,
		show,
		run,
		help,
	})
})()
