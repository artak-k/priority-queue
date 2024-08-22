function swap(array, i, j) {
    const oldI = array[i];
    array[i] = array[j];
    array[j] = oldI;
}

module.exports = { swap }