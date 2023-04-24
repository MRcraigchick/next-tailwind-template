export default async function message(req, res) {
  res.status(200).json({ result: true, message: "Hello world." });
}
