git: 
	@git add .
	@git commit -S -am "$m" #m="your message"
	@git push 

open:
	@codium .

test: 
	@npm test -- arrSim.test.js

