# sortings
JavaScript / TypeScript utility for sorting property and direction

## Installation 
```sh
npm i sortings
```

## Usage
```ts
// create Sorting object
const sorting = sortingOf('created_at', 'desc');

// parse from string like "foo,asc"
const parse = (input: string): Sorting | undefined => {
    const [property, direction] = input.split(',');
    if(!isSortingDirection(direction)) {
        return undefined;
    } else {
        return sortingOf(property, direction);
    }
};

// to string
const toString = (sorting: Sorting): string => {
    return sorting.property + "," + sorting.direction;
};

// toggle direction onClick
const handleClick = (): void => {
    this.sorting = toggleSortingDirection(this.sorting);
};

// property name constraints
const sorting: Sorting<'foo' | 'bar'> = {
    property: 'foo',
    direction: 'asc'
};

// parse to generic type with property name constraints
const parse = <T extends string>(input: string, allowedProperties: T[]): Sorting<T> | undefined => {
    const [property, direction] = input.split(',') as [T, string];
    if(!isSortingDirection(direction)) {
        return undefined;
    } else if (!allowedProperties.indexOf(property)) {
        return undefined;
    } else {
        return sortingOf(property, direction);
    }
};
```

## Build 
```sh
npm run build
```

## Test 
```sh
npm run test
```