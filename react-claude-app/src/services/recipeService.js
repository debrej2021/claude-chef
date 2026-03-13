export async function getRecipeFromAI(ingredients) {

  try {

    const response = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ingredients })
    })

    const data = await response.json()

    return data.recipe

  } catch (error) {

    console.error("API error:", error)

    return "Sorry, recipe generation failed."

  }
}