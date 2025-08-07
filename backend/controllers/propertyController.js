import Property from '../models/Property.js';

export const addProperty = async (req, res) => {
  try {
    const property = await Property.create({ ...req.body, owner: req.user.id });
    res.status(201).json(property);
  } catch {
    res.status(400).json({ error: 'Failed to add property' });
  }
};

export const getAllProperties = async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
};