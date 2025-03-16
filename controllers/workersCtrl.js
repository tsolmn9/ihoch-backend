const workersModel = require("../models/workersModel");

const createWorker = async (req, res) => {
  try {
    const body = req.body;
    const response = await workersModel.create(body);
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getWorkers = async (req, res) => {
  try {
    const response = await workersModel.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteWorker = async (req, res) => {
  try {
    const { workerId } = req.params;
    const deletedWorker = await serviceModel.findByIdAndDelete(workerId);
    if (!deletedWorker) {
      return res.send("Worker not found");
    }
    res.status(200).send("Worker deleted successfully");
  } catch (error) {
    res.status(404).send(error);
  }
};
const editWorkerField = async (req, res) => {
  const { workerId } = req.params;
  const { field, value } = req.body;

  const validFields = ["lastName", "firstName", "imgUrl", "job"];
  if (!validFields.includes(field)) {
    return res.status(400).send({ message: "Тохиромжгүй талбар." });
  }

  try {
    if (!workerId) {
      return res.status(400).send({ message: "Ажилтны ID олдсонгүй." });
    }

    const updateData = { [field]: value };

    const updatedWorkerInfo = await workersModel.findByIdAndUpdate(
      workerId,
      updateData,
      { new: true }
    );

    if (!updatedWorkerInfo) {
      return res.status(404).send({ message: "Ажилтан олдсонгүй." });
    }

    res.status(200).send(updatedWorkerInfo);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Алдаа гарлаа." });
  }
};
const getOneWorker = async (req, res) => {
  try {
    const { workerId } = req.params;
    const worker = await workersModel.findById(workerId);
    res.status(200).send(worker);
  } catch (error) {
    res.status(404).send(error);
  }
};
module.exports = {
  createWorker,
  getWorkers,
  deleteWorker,
  editWorkerField,
  getOneWorker,
};
