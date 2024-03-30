const { calculatePrice } = require("../services/priceCalculator");

async function calculatePriceController(req, res) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const totalPrice = await calculatePrice(
      zone,
      organization_id,
      total_distance,
      item_type
    );
    return res.status(200).json({ total_price: totalPrice });
  } catch (error) {
    console.error("Error calculating price:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { calculatePriceController };
