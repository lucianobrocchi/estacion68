// Crea una preferencia de pago en Mercado Pago y devuelve el link de Checkout (con cuotas).
// Requiere la variable de entorno MP_ACCESS_TOKEN en Vercel (Settings -> Environment Variables).
module.exports = async (req, res) => {
  if (req.method !== "POST") { res.status(405).json({ error: "Method not allowed" }); return; }
  const token = process.env.MP_ACCESS_TOKEN;
  if (!token) { res.status(500).json({ error: "MP_ACCESS_TOKEN no configurado" }); return; }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : (req.body || {});
    const items = Array.isArray(body.items) ? body.items : [];
    const back = (body.back || "").toString();
    if (!items.length) { res.status(400).json({ error: "Carrito vacío" }); return; }
    const preference = {
      items: items.map(function (it) {
        return {
          title: String(it.title || "Producto").slice(0, 250),
          quantity: Math.max(1, parseInt(it.quantity) || 1),
          unit_price: Math.round(Number(it.unit_price) || 0),
          currency_id: "ARS"
        };
      }),
      back_urls: { success: back + "?pago=ok", failure: back + "?pago=error", pending: back + "?pago=pendiente" },
      auto_return: "approved",
      statement_descriptor: "ESTACION 68"
    };
    const r = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" },
      body: JSON.stringify(preference)
    });
    const data = await r.json();
    if (!r.ok) { res.status(502).json({ error: "Error de Mercado Pago", detail: data }); return; }
    res.status(200).json({ init_point: data.init_point, id: data.id });
  } catch (e) {
    res.status(500).json({ error: String((e && e.message) || e) });
  }
};
