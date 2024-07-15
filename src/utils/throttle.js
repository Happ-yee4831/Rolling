const throttle = (handler, timeout = 300) => {
	let invokedTime;
	let timer
	return function (this, ...args) {
		if (!invokedTime) {
			handler.apply(this, args)
			invokedTime = Date.now()
		} else {
			clearTimeout(timer)
			timer = window.setTimeout(() => {
				if (Date.now() - invokedTime >= timeout) {
					handler.apply(this, args)
					invokedTime = Date.now()
				}
			}, Math.max(timeout - (Date.now() - invokedTime), 0))
		}
	}
 }