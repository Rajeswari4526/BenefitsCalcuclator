function calculateDeductionFromName( {name, cost} ) {
    return name ? (name[0] === 'A' ? (cost - (cost*0.1)) : cost) : 0;
}

export default calculateDeductionFromName;