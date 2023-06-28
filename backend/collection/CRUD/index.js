import Featured from "../../models/Schema.js";
import skincare from "../../models/skinCare.js";

export const getMakeUp = async (req, res) => {
  try {
    const Item = await Featured.find();
    res.send({ data: Item });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
export const getSkinCare = async (req, res) => {
  try {
    const Item = await skincare.find();
    res.send({ data: Item });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
export const searchItems = async (req, res) => {
  const { query } = req.query;
  try {
    const title = new RegExp(query, "i");
    // Perform the search based on the query
    // Perform the word match search based on the query using Mongoose
    const items = await Featured.find({
      $or: [{ "products.name": title }, { "products.description": title }],
    });

    res.send({ data: items });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
