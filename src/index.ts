export type SortingDirection = 'asc' | 'desc';

export interface Sorting<P extends string = string> {
    readonly property: P
    readonly direction: SortingDirection
};



const sortingDirections = ['asc', 'desc'];

export const isSortingDirection = (direction: string): direction is SortingDirection => {
    return sortingDirections.indexOf(direction) !== -1;
};

export const sortingOf: {
    <T extends string>(property: T, direction: SortingDirection): Sorting<T>
    <T extends string>([property, direction]: [T, SortingDirection]): Sorting<T>
} = (arg1: string | [string, SortingDirection], arg2?: SortingDirection): Sorting => {
    if(Array.isArray(arg1)) {
        return sortingOf(arg1[0], arg1[1]);
    }

    return {
        property: arg1,
        direction: arg2!
    };
};

export const sortingEqual = (sorting1: Sorting, sorting2: Sorting): boolean => {
    return sorting1 === sorting2 || (sorting1.property === sorting2.property && sorting1.direction === sorting2.direction);
};

export const toggleSortingDirection = <T extends string>(sorting: Sorting<T>): Sorting<T> => {
    return sortingOf(sorting.property, sorting.direction === 'asc' ? 'desc' : 'asc');
};