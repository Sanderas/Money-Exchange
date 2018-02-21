// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    if (currency <= 0)
        return {};
    let H = 0,
        Q = 0,
        D = 0,
        N = 0,
        P = 0;
    if (currency >= 50) {
        H = Math.floor(currency / 50);
        currency -= H * 50;
    }
    if (currency >= 25) {
        Q = Math.floor(currency / 25);
        currency -= Q * 25;
    }
    if (currency >= 10) {
        D = Math.floor(currency / 10);
        currency -= D * 10;
    }
    if (currency >= 5) {
        N = Math.floor(currency / 5);
        currency -= N * 5;
    }
    if (currency >= 1) {
        P = Math.floor(currency / 1);
    }

    let obj = {};
    if (H != 0)
        obj.H = H;
    if (Q != 0)
        obj.Q = Q;
    if (D != 0)
        obj.D = D;
    if (N != 0)
        obj.N = N;
    if (P != 0)
        obj.P = P;

    return obj;
}
