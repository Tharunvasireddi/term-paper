// SecRASP Middleware - Runtime Application Self-Protection (demo)
const attackPatterns = [
  /<script.*?>/i,                // XSS
  /javascript:/i,                // XSS
  /(\$ne|\$gt|\$lt|\$regex|\$or)/i, // NoSQL Injection
  /(DROP|DELETE|UPDATE|INSERT)/i // SQL-like
];

function detectAttack(payload) {
  if (!payload) return false;
  const str = typeof payload === "string" ? payload : JSON.stringify(payload);
  return attackPatterns.some(p => p.test(str));
}

module.exports = function (req, res, next) {
  try {
    if (detectAttack(req.body) || detectAttack(req.query)) {
      console.warn("🚨 SecRASP blocked:", {
        path: req.path,
        payload: req.body || req.query
      });
      return res.status(400).json({ message: "Blocked by SecRASP" });
    }
    next();
  } catch (err) {
    console.error("SecRASP error:", err);
    return res.status(500).json({ message: "SecRASP internal error" });
  }
};
