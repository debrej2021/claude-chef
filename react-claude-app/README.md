# Claude Chef

Claude Chef is a small AI-assisted recipe app that turns a short list of ingredients into a usable recipe. The goal of the project is to keep the experience simple: enter what is available, send it to the model, and return a response that is readable enough to cook from without extra cleanup.

The project is built as a lightweight frontend application and is deployed on Vercel. Environment variables for deployed environments are managed through Vercel rather than committed to the repository.

## Why this project exists

A lot of recipe apps assume the user already knows what they want to cook. This project starts from the opposite direction. The input is a handful of ingredients, and the application uses an LLM to suggest a practical dish based on what is already available.

It is intentionally small in scope, but structured in a way that makes it easy to extend with validation, saved recipes, better prompt design, or support for multiple providers.

## What it does

- Accepts a list of ingredients from the user
- Sends the ingredient list to an AI model
- Returns a recipe suggestion in a readable format
- Runs as a frontend app with Vercel-based deployment

## Tech stack

- React
- Vite
- JavaScript
- Vercel for deployment

Update this section if your repo uses any additional tools such as Tailwind, serverless functions, or a separate API layer.

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/debrej2021/claude-chef.git
cd claude-chef
