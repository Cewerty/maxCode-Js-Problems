function ndfl(income) {
    const taxBrackets = [
        { limit: 2400000, rate: 0.13 },
        { limit: 5000000, rate: 0.15 },
        { limit: 20000000, rate: 0.18 },
        { limit: 50000000, rate: 0.20 },
        { limit: Infinity, rate: 0.22 }
    ];

    let totalTax = 0;
    let previousLimit = 0;

    for (const bracket of taxBrackets) {
        if (income <= previousLimit) {
            break;
        }

        const taxableIncome = Math.min(income, bracket.limit) - previousLimit;
        totalTax += taxableIncome * bracket.rate;
        previousLimit = bracket.limit;
    }

    const effectiveRate = totalTax / income;
    return effectiveRate * 100; 
}

console.log(ndfl(3_000_000)); // 13.4
