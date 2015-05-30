jest.dontMock('../main');

var Clock = require('../main');
describe('Zegarek', function () {
    it('wyswietla date w formacie', function () {
        var regexp = /\d{4}\/\d{2}\/\d{2} \d{2}\:\d{2}\:\d{2}/; 
        var clock = new Clock();
        var testDate = clock.build();
        expect(regexp.test(testDate)).toBe(true);
    });
});
