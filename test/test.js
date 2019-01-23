'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('isSortingDirection test', () => {
    it('should return true', () => {
        var result = index.isSortingDirection('asc');
        expect(result).to.equal(true);
    });
    it('should return true', () => {
        var result = index.isSortingDirection('desc');
        expect(result).to.equal(true);
    });
    it('should return false', () => {
        var result = index.isSortingDirection('');
        expect(result).to.equal(false);
    });
    it('should return false', () => {
        var result = index.isSortingDirection('foo');
        expect(result).to.equal(false);
    });
});

describe('sortingOf test', () => {
    it('should return Sorting', () => {
        var result = index.sortingOf('foo', 'asc');
        expect(result).to.deep.equal({ property: 'foo', direction: 'asc' });
    });
    it('should return Sorting', () => {
        var result = index.sortingOf('bar', 'desc');
        expect(result).to.deep.equal({ property: 'bar', direction: 'desc' });
    });

    it('should return Sorting', () => {
        var result = index.sortingOf(['foo', 'asc']);
        expect(result).to.deep.equal({ property: 'foo', direction: 'asc' });
    });
    it('should return Sorting', () => {
        var result = index.sortingOf(['bar', 'desc']);
        expect(result).to.deep.equal({ property: 'bar', direction: 'desc' });
    });
});

describe('sortingEqual test', () => {
    it('should return true', () => {
        var sorting1 = index.sortingOf('foo', 'asc');
        var sorting2 = index.sortingOf('foo', 'asc');
        var result = index.sortingEqual(sorting1, sorting2);
        expect(result).to.equal(true);
    });
    it('should return false', () => {
        var sorting1 = index.sortingOf('foo', 'asc');
        var sorting2 = index.sortingOf('foo', 'desc');
        var result = index.sortingEqual(sorting1, sorting2);
        expect(result).to.equal(false);
    });
    it('should return false', () => {
        var sorting1 = index.sortingOf('foo', 'asc');
        var sorting2 = index.sortingOf('bar', 'asc');
        var result = index.sortingEqual(sorting1, sorting2);
        expect(result).to.equal(false);
    });
    it('should return false', () => {
        var sorting1 = index.sortingOf('foo', 'asc');
        var sorting2 = index.sortingOf('bar', 'desc');
        var result = index.sortingEqual(sorting1, sorting2);
        expect(result).to.equal(false);
    });
});

describe('toggleSortingDirection test', () => {
    it('should return Sorting', () => {
        var sorting = index.sortingOf('foo', 'asc');
        var result = index.toggleSortingDirection(sorting);
        expect(result).to.deep.equal({ property: 'foo', direction: 'desc' });
    });
    it('should return Sorting', () => {
        var sorting = index.sortingOf('bar', 'desc');
        var result = index.toggleSortingDirection(sorting);
        expect(result).to.deep.equal({ property: 'bar', direction: 'asc' });
    });
});
