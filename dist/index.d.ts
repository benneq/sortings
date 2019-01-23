export declare type SortingDirection = 'asc' | 'desc';
export interface Sorting<P extends string = string> {
    readonly property: P;
    readonly direction: SortingDirection;
}
export declare const isSortingDirection: (direction: string) => direction is SortingDirection;
export declare const sortingOf: {
    <T extends string>(property: T, direction: SortingDirection): Sorting<T>;
    <T extends string>([property, direction]: [T, SortingDirection]): Sorting<T>;
};
export declare const sortingEqual: (sorting1: Sorting<string>, sorting2: Sorting<string>) => boolean;
export declare const toggleSortingDirection: <T extends string>(sorting: Sorting<T>) => Sorting<T>;
