const scenarioController = require('../../server/controllers/scenarioController');
const { generateScenario } = require('../../ai/api/openai');

jest.mock('../../ai/api/openai');

describe('Scenario Controller', () => {
  it('should generate a scenario', async () => {
    generateScenario.mockResolvedValue('Mock scenario text');
    const req = {};
    const res = { json: jest.fn() };
    await scenarioController.createScenario(req, res);
    expect(res.json).toHaveBeenCalledWith({ scenario: 'Mock scenario text' });
  });
});