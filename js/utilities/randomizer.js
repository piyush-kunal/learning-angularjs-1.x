class Randomizer {
    static getValue(minimum = 1, maximum = 100000) {
        return Math.floor(
            Math.random() * (maximum - minimum) + minimum);
    }
}

module.exports = Randomizer;