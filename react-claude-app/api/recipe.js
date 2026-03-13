export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {

    const body = typeof req.body === "string"
  ? JSON.parse(req.body)
  : req.body

const { ingredients } = body

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `
You are Chef Claude, a friendly cooking assistant.

Create a concise recipe using the following ingredients:
${ingredients.join(", ")}

Guidelines:
- Prefer using only the listed ingredients
- Additional ingredients should be OPTIONAL
- Keep the recipe under 10 steps

Format using markdown:

### Ingredients
### Instructions
`
          }
        ],
        max_tokens: 300
      })
    })

    const data = await response.json()

    res.status(200).json({
      recipe: data.choices[0].message.content
    })

  } catch (error) {

    console.error("AI error:", error)

    res.status(500).json({
      error: "Recipe generation failed"
    })
  }
}