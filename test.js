const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('adds 1 $ to equal 115.79 Yens', () => 
    expect(fromDollarToYen(1)).toBe(115.79));
   
test('adds 10 € to equal 12 $', () => 
    expect(fromEuroToDollar(10)).toBe(12));

test('adds 10000 yen to equal 64 GPB', () => 
    expect(fromYenToPound(10000)).toBe(64));



