const getScenarios = (req, res) => {
  res.status(200).json({ message: "Get all scenarios" });
};

const createScenario = (req, res) => {
  res.status(201).json({ message: "Create a new scenario" });
};

module.exports = {
  getScenarios,
  createScenario,
};