import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        rating: number;
        style?: string | undefined;
        config?: {
            emptyColor?: string | undefined;
            fullColor?: string | undefined;
            showText?: boolean | undefined;
            size?: number | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type StarRatingProps = typeof __propDef.props;
export declare type StarRatingEvents = typeof __propDef.events;
export declare type StarRatingSlots = typeof __propDef.slots;
export default class StarRating extends SvelteComponentTyped<StarRatingProps, StarRatingEvents, StarRatingSlots> {
}
export {};
