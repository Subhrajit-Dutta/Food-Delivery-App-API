const pool = require("../db");

async function getPricingByOrganizationAndZone(organizationId, zone, itemType) {
  const query = {
    text: `SELECT p.* FROM pricing p
           INNER JOIN item i ON p.item_id = i.id
           WHERE p.organization_id = $1 
           AND p.zone = $2 
           AND i.type = $3`,
    values: [organizationId, zone, itemType],
  };

  const result = await pool.query(query);
  return result.rows[0];
}

module.exports = { getPricingByOrganizationAndZone };
