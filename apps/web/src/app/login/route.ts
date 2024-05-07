export function POST(req, res) {
  const { email, password } = req.body;

  console.log(email, password);

  return res.status(200).json({ message: "Login successful" });
}
