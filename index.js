function randomNumber(precision) {
    return Math.floor(Math.random() * precision);
}
module.exports = (req, res) => {
    const coin = randomNumber(10000) % 2 ? 'Heads' : 'Tails';

    return {
        data: coin,
    };
};
