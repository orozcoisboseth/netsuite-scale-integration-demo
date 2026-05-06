/**
 * Weight Service (Demo)
 *
 * Contains business logic related to weight capture.
 * Delegates external communication to the scale adapter.
 */

define(['../adapters/scale_api_adapter'], function (scaleAdapter) {

    function captureWeight() {
        var result = scaleAdapter.getWeight();

        if (!result || !result.success) {
            throw new Error('Failed to capture weight from scale');
        }

        if (result.weight <= 0) {
            throw new Error('Invalid weight value');
        }

        return {
            weight: result.weight,
            unit: result.unit,
            capturedAt: result.timestamp
        };
    }

    return {
        captureWeight: captureWeight
    };
});
