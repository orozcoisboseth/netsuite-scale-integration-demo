/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 *
 * Demo Client Script
 * Redirects Purchase Order to weight capture Suitelet
 */

define(['N/currentRecord', 'N/url'], function (currentRecord, url) {

    function redirectToWeightCapture() {
        var record = currentRecord.get();

        var poId = record.id;

        var suiteletUrl = url.resolveScript({
            scriptId: 'customscript_weight_capture_sl_demo',
            deploymentId: 'customdeploy_weight_capture_sl_demo',
            params: {
                poId: poId
            }
        });

        window.location.href = suiteletUrl;
    }

    return {
        redirectToWeightCapture: redirectToWeightCapture
    };
});
