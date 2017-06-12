// https://www.codewars.com/kata/undo-slash-redo
const undoRedo = (obj) => {
  let _log = [Object.assign({}, obj)],
			_index = 0

	const _current = () => _log[_index]

	const _sync = () => {
		const curr = _current()

		for (var key in obj) {
			delete obj[key]
		}

		for (var key in curr) {
			obj[key] = curr[key]
		}
	}

	const _commit = (...args) => {
		const version = Object.assign({}, _current()),
					key = args[0]

		if (args.length == 2) {
			version[key] = args[1]
		} else {
			delete version[key]
		}

		_log = _log.splice(0, _index + 1)
		_log.push(version)
		_index++
		_sync()
	}

	return {
		set: (key, value) => _commit(key, value),
		del: (key) => _commit(key),
		get: (key) => _current()[key],
		undo: () => {
			if (!_index) {
				throw new Error()
			}

			_index--
			_sync()
		},
		redo: () => {
			if (_index == _log.length - 1) {
				throw new Error()
			}

			_index++
			_sync()
		}
	}
}

export default undoRedo