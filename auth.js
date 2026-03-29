// ─── Simple token-based auth guard (placeholder) ─
// In production replace with JWT / OAuth.
// Set ADMIN_TOKEN in your .env file.

const authAdmin = (req, res, next) => {
  const token = req.headers['x-admin-token'];
  const expected = process.env.ADMIN_TOKEN || 'changeme';

  if (!token || token !== expected) {
    return res.status(401).json({ error: 'Unauthorised. Provide a valid X-Admin-Token header.' });
  }
  next();
};

module.exports = { authAdmin };
