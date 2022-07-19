/** @typedef {typeof __propDef.props}  StarProps */
/** @typedef {typeof __propDef.events}  StarEvents */
/** @typedef {typeof __propDef.slots}  StarSlots */
export default class Star extends SvelteComponentTyped<{
    full: any;
    id: any;
    config?: {} | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StarProps = typeof __propDef.props;
export type StarEvents = typeof __propDef.events;
export type StarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        full: any;
        id: any;
        config?: {} | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
