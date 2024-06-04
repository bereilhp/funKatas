git: 
	@git pull
	@git add .
	@git commit -m "$m" #m="your message"
	@git push 

open:
	@codium .

test: 
	@npm test -- scoreOfAString.test.js

doc: 
	jsdoc src -r 

openDoc:
	open out/index.html