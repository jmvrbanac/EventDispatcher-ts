/**
 * EventDispatcher.js
 * - Simple extendable event dispatching class
 *
 * @version 0.1
 * @author John Vrbanac
 * @license GNU AGPLv3
 **/
export class Event {
	private _type:string;
	private _target;

	constructor(type:string, targetObj) {
		this._type = type;
		this._target = targetObj;
	}
	
	getTarget() {
		return this._target;
	}

	getType():string {
		return this._type;
	}
}

export class EventDispatcher {
	private _listeners;
	constructor() {
		this._listeners = [];
	}

	hasEventListener(type:string, listener) {
		var exists = false;
		for (var i = 0; i < this._listeners.length; i++) {
			if (this._listeners[i].type === type && this._listeners[i].listener === listener) {
				exists = true;
			}
		}

		return exists;
	}

	addEventListener (typeStr, listenerFunc) {
		if (this.hasEventListener(typeStr, listenerFunc)) {
			return;
		}

		this._listeners.push({type: typeStr, listener: listenerFunc});
	}

	removeEventListener (typeStr, listenerFunc) {
		for (var i = 0; i < this._listeners.length; i++) {
			if (this._listeners[i].type === typeStr && this._listeners[i].listener === listenerFunc) {
				this._listeners.splice(i, 1);
			}
		}
	}

	dispatchEvent (event) {
		for (var i = 0; i < this._listeners.length; i++) {
			if (this._listeners[i].type === event.getType()) {
				this._listeners[i].listener.call(event);
			}
		}
	}
}