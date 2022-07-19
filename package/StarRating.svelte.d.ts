/** @typedef {typeof __propDef.props}  StarRatingProps */
/** @typedef {typeof __propDef.events}  StarRatingEvents */
/** @typedef {typeof __propDef.slots}  StarRatingSlots */
export default class StarRating extends SvelteComponentTyped<{
    rating: any;
    config?: {} | undefined;
    id?: string | undefined;
    style?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type StarRatingProps = typeof __propDef.props;
export type StarRatingEvents = typeof __propDef.events;
export type StarRatingSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        rating: any;
        config?: {} | undefined;
        id?: string | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
