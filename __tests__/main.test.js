jest.dontMock('../main');

var clock = require('../main');
describe('Zegarek', function () {
    it('wyswietla date w formacie', function () {
        var regexp = /\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2}/; 
        
