import calculateDeductionFromName from '../CalcUtil';

describe('calculateDeductionFromName >>>', function(){
    it('should return input cost when name does not start with A', function(){
        let name = 'Raji', cost = 500;
        let result = calculateDeductionFromName({name, cost});
        expect(result).toBe(cost);
    });
    it('should return 10% of cost when name starts with A', function(){
        let name = 'Alex', cost = 500;
        let result = calculateDeductionFromName({name, cost});
        expect(result).toBe(450);
    });
    it('should return 0 when no name', function(){
        let name = '', cost = 500;
        let result = calculateDeductionFromName({name, cost});
        expect(result).toBe(0);
    });
});