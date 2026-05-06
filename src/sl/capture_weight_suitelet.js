/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 *
 * Demo Suitelet
 * Simulates weight capture flow for a Purchase Order
 */

define(['N/ui/serverWidget'], function (serverWidget) {

    function onRequest(context) {

        if (context.request.method === 'GET') {

            var poId = context.request.parameters.poId || '';

            var form = serverWidget.createForm({
                title: 'Weight Capture (Demo)'
            });

            form.addField({
                id: 'custpage_po_id',
                type: serverWidget.FieldType.TEXT,
                label: 'Purchase Order ID'
            }).defaultValue = poId;

            form.addSubmitButton({
                label: 'Get Weight'
            });

            context.response.writePage(form);
        }

        if (context.request.method === 'POST') {

            // Simulated response from scale adapter
            var response = {
                success: true,
                weight: Math.floor(Math.random() * 100) + 1,
                unit: 'kg',
                message: 'Weight captured successfully (demo)'
            };

            context.response.write({
                output: JSON.stringify(response)
            });
        }
    }

    return {
        onRequest: onRequest
    };
});
