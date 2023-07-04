git: 
	@git pull
	@git add .
	@git commit -S -m "$m" #m="your message"
	@git push 

open:
	@codium .

test: 
	@npm test -- noZero.test.js