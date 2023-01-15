git: 
	@git add .
	@git commit -am "$m"
	@git push 

open:
	@codium .

test: 
	@npm test -- bus.test.js

