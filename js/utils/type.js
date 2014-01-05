define(function() {
	var toString = Object.prototype.toString;
	return {
		isFunction: function() {
			return toString.call(arguments[0]) === "[object Function]";
		},
		isObject: function() {
			return toString.call(arguments[0]) === "[object Object]";
		},
		isArray: function() {
			return toString.call(arguments[0]) === "[object Array]";
		},
		isNumber: function() {
			return toString.call(arguments[0]) === "[object Number]";
		},
		isString: function() {
			return toString.call(arguments[0]) === "[object String]";
		},
		isDate: function() {
			return toString.call(arguments[0]) === "[object Date]";
		},
		isNaN: function() {
			return arguments[0] != arguments[0];
		},
		isNull: function() {
			return toString.call(arguments[0]) === "[object Null]"
		},
		isUndefined: function() {
			return arguments[0] === undefined;
		}
	}
})