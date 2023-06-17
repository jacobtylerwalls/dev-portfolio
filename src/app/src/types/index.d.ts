export { };

declare global {
    interface Window {
        ENVIRONMENT: Record<string, string>;
    }
}

export type Sample = {
    title: string,
    link: string,
    paragraphs: string[],
};
