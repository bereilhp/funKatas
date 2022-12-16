git: 
	@git add .
	@git commit -am "$men"
	@git push 

open:
	@codium .

test: 
	@npm test -- calculator.test.js

