/**
 * Scale API Adapter (Demo)
 *
 * Simulates communication with an external scale API.
 */

define([], function () {

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
});
