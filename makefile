git: 
	@git add .
	@git commit -am "$m"
	@git push 

open:
	@codium .

test: 
	@npm test -- bigInt.test.js

