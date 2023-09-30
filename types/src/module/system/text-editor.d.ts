import { ActorPF2e } from "@actor";
import { ItemPF2e } from "@item";
import { UserVisibility } from "@scripts/ui/user-visibility.ts";
/** Censor enriched HTML according to metagame knowledge settings */
declare class TextEditorPF2e extends TextEditor {
    #private;
    static enrichHTML(content: string | null, options: EnrichmentOptionsPF2e & {
        async: true;
    }): Promise<string>;
    static enrichHTML(content: string | null, options: EnrichmentOptionsPF2e & {
        async: false;
    }): string;
    static enrichHTML(content: string | null, options: EnrichmentOptionsPF2e): string | Promise<string>;
    /**
     * Upstream retrieves documents from UUID links sequentially, which has a noticable load time with text containing
     * many links: retrieve every linked document at once beforehand with the faster `UUIDUtils.fromUUIDs` system helper
     * so that subsequent calls to `fromUuid` finds all documents in caches.
     */
    static _enrichContentLinks(text: Text[], options?: EnrichmentOptions): boolean | Promise<boolean>;
    /** Replace core static method to conditionally handle parsing of inline damage rolls */
    static _createInlineRoll(match: RegExpMatchArray, rollData: Record<string, unknown>, options?: EvaluateRollParams): Promise<HTMLAnchorElement | null>;
    /** Replace core static method to conditionally handle inline damage roll clicks */
    static _onClickInlineRoll(event: MouseEvent): Promise<ChatMessage | void>;
    static processUserVisibility(content: string, options: EnrichmentOptionsPF2e): string;
    static enrichString(data: RegExpMatchArray, options?: EnrichmentOptionsPF2e): Promise<HTMLElement | null>;
    /**
     * Convert an XML node into an HTML span element with data-visibility, data-whose, and class attributes
     * @param html    The HTML element containing the XML node: mutated by this method as part of node replacement
     * @param name    The name of the node to convert
     * @param options attributes to add to the generated span element
     * @returns The generated span element, or `null` if no `name` node was found
     */
    static convertXMLNode(html: HTMLElement, name: string, { visible, visibility, whose, classes }: ConvertXMLNodeOptions): HTMLElement | null;
}
interface EnrichmentOptionsPF2e extends EnrichmentOptions {
    rollData?: RollDataPF2e;
    /** Whether to run the enriched string through `UserVisiblity.process` */
    processVisibility?: boolean;
}
interface RollDataPF2e {
    actor?: ActorPF2e | null;
    item?: ItemPF2e | null;
    mod?: number;
    [key: string]: unknown;
}
interface ConvertXMLNodeOptions {
    /** The value of the data-visibility attribute to add to the span element */
    visibility?: UserVisibility | null;
    /** Whether or not it should be visible or not, which maps to visibility (for this release) */
    visible?: boolean;
    /**
     * Whether this piece of data belongs to the "self" actor or the target: used by UserVisibilityPF2e to
     * determine which actor's ownership to check
     */
    whose?: "self" | "target" | null;
    /** Any additional classes to add to the span element */
    classes?: string[];
}
export { TextEditorPF2e, type EnrichmentOptionsPF2e };
