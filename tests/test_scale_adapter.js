
// Simple local test for the scale adapter
const scaleAdapter = require('../src/adapters/scale_api_adapter');

function testGetWeight() {
  const result = scaleAdapter.getWeight();

  console.assert(result.success === true, 'Expected success');
  console.assert(result.weight > 0, 'Weight should be > 0');
  console.assert(result.unit === 'kg', 'Unit should be kg');

  console.log(' Scale adapter mock test passed:', result);
}

testGetWeight();
