import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        full: number;
        fullColor?: string | undefined;
        emptyColor?: string | undefined;
        size?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StarProps = typeof __propDef.props;
export declare type StarEvents = typeof __propDef.events;
export declare type StarSlots = typeof __propDef.slots;
export default class Star extends SvelteComponentTyped<StarProps, StarEvents, StarSlots> {
}
export {};
