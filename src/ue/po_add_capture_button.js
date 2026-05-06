/**
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 *
 * Demo User Event for Purchase Order
 * Adds a button to start the weight capture flow
 */

define(['N/runtime'], function (runtime) {

    function beforeLoad(context) {
        if (context.type !== context.UserEventType.VIEW) {
            return;
        }

        var form = context.form;
        var record = context.newRecord;

        // Attach client script
        form.clientScriptModulePath = '../cl/po_capture_redirect.js';

        // Add Capture Weight button
        form.addButton({
            id: 'custpage_capture_weight',
            label: 'Capture Weight',
            functionName: 'redirectToWeightCapture'
        });
    }

    return {
        beforeLoad: beforeLoad
    };
});
