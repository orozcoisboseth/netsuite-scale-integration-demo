/**
 * Scale API Adapter (Demo)
 *
 * Simulates communication with an external scale API.
 */

(function (root, factory) {

    if (typeof define === 'function') {
        // NetSuite (SuiteScript AMD)
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js (local testing)
        module.exports = factory();
    }

}(this, function () {

    function getWeight() {
        return {
            success: true,
            weight: Math.floor(Math.random() * 100) + 1,
            unit: 'kg',
            timestamp: new Date().toISOString()
        };
    }

    return {
        getWeight: getWeight
    };
}));
