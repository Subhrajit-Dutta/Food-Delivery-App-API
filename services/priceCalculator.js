const { getPricingByOrganizationAndZone } = require("../models/pricing");

async function calculatePrice(zone, organizationId, totalDistance, itemType) {
  const pricing = await getPricingByOrganizationAndZone(
    organizationId,
    zone,
    itemType
  );
  if (!pricing) {
    throw new Error("Pricing details not found for the given parameters.");
  }

  let totalPrice = 0;

  if (totalDistance > pricing.base_distance_in_km) {
    totalPrice += pricing.fix_price;
    const extraDistance = totalDistance - pricing.base_distance_in_km;
    totalPrice += extraDistance * pricing.km_price;
  }

  totalPrice *= 100;

  return totalPrice;
}

module.exports = { calculatePrice };
