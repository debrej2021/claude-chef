export async function getRecipeFromAI(ingredients) {

  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_KEY}`
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
- Format using markdown sections:

### Ingredients
### Instructions
`
          }
        ],
        max_tokens: 300
      })
    })

    // NEW: handle API failure gracefully
    if (!response.ok) {
      console.warn("OpenAI API returned error:", response.status)
      return generateFallbackRecipe(ingredients)
    }

    const data = await response.json()

    return data.choices[0].message.content

  } catch (error) {

    console.error("AI API error:", error)

    return generateFallbackRecipe(ingredients)
  }
}


/* ---------- NEW FALLBACK GENERATOR ---------- */

function generateFallbackRecipe(ingredients) {

  const ingredientList = ingredients.map(i => `- ${i}`).join("\n")

  return `
⚠ AI unavailable — showing quick recipe suggestion

### Ingredients
${ingredientList}
- Optional: salt, pepper, herbs

### Instructions
1. Prepare all ingredients and wash if necessary.
2. Heat a pan on medium heat.
3. Add the ingredients gradually while stirring.
4. Cook for 10–15 minutes until the main ingredients are done.
5. Season with optional salt, pepper, or herbs.
6. Serve warm and enjoy your simple homemade dish.
`
}