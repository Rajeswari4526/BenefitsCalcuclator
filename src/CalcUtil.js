const DISCOUNT_PERCENTAGE = 0.1;
const DISCOUNT_LETTER = 'A';

function calculateDeductionFromName( {name, cost} ) {
    return name ? (name[0] === DISCOUNT_LETTER ? (cost - (cost*DISCOUNT_PERCENTAGE)) : cost) : 0;
}

export default calculateDeductionFromName;