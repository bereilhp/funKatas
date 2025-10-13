git: 
	@git pull
	@git add .
	@git commit -m "$m" #m="your message"
	@git push 

open:
	@codium .

test: 
	@npm test -- missingInteger.test.js

doc: 
	npx jsdoc src -r
	
openDoc:
	open out/index.html