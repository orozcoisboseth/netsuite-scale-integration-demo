/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 *
 * Demo Suitelet
 * Orchestrates weight capture using service layer
 */

define(
    ['N/ui/serverWidget', '../services/weight_service'],
    function (serverWidget, weightService) {

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

                var result = weightService.captureWeight();

                context.response.write({
                    output: JSON.stringify({
                        success: true,
                        weight: result.weight,
                        unit: result.unit,
                        capturedAt: result.capturedAt
                    })
                });
            }
        }

        return {
            onRequest: onRequest
        };
    }
);
