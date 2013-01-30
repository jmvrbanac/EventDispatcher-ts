export class Event {
    private _type: string;
    private _target: any;
    constructor (type: string, targetObj: any);
    public getTarget(): any;
    public getType(): string;
}
export class EventDispatcher {
    private _listeners: any[];
    constructor ();
    public hasEventListener(type: string, listener: Function): Boolean;
    public addEventListener(typeStr: string, listenerFunc: Function): void;
    public removeEventListener(typeStr: string, listenerFunc: Function): void;
    public dispatchEvent(evt: Event): void;
}
