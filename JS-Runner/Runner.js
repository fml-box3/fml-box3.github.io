var code = document.getElementById('code')
var out = document.getElementById('output')

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
