export class Event {
    private _type: string;
    private _target;
    constructor (type: string, targetObj: any);
    public getTarget(): any;
    public getType(): string;
}
export class EventDispatcher {
    private _listeners;
    constructor ();
    public hasEventListener(type: string, listener): Boolean;
    public addEventListener(typeStr, listenerFunc): void;
    public removeEventListener(typeStr, listenerFunc): void;
    public dispatchEvent(evt): void;
}
