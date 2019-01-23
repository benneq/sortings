"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var sortingDirections = ['asc', 'desc'];
exports.isSortingDirection = function (direction) {
    return sortingDirections.indexOf(direction) !== -1;
};
exports.sortingOf = function (arg1, arg2) {
    if (Array.isArray(arg1)) {
        return exports.sortingOf(arg1[0], arg1[1]);
    }
    return {
        property: arg1,
        direction: arg2
    };
};
exports.sortingEqual = function (sorting1, sorting2) {
    return sorting1 === sorting2 || (sorting1.property === sorting2.property && sorting1.direction === sorting2.direction);
};
exports.toggleSortingDirection = function (sorting) {
    return exports.sortingOf(sorting.property, sorting.direction === 'asc' ? 'desc' : 'asc');
};
