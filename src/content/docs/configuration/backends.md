---
title: Backends
description: Configure which AI backend Idep uses for completions and chat.
---

Idep supports four AI backends. Switch by changing one line in your config.
No restart required (coming in v0.2.0-beta — restart required for now).

## Ollama (local, no API key)

Best for: privacy, offline use, no ongoing cost.

```toml
[ai]
backend  = "ollama"
model    = "codellama:13b"
endpoint = "http://localhost:11434"
```

Install Ollama from [ollama.com](https://ollama.com), then pull a model:

```bash
ollama pull codellama:13b
```

Recommended models: `codellama:13b`, `deepseek-coder:6.7b`, `starcoder2:15b`.

`endpoint` defaults to `http://localhost:11434` if omitted.

---

## Anthropic

Best for: highest quality completions, Claude models.

```toml
[ai]
backend = "anthropic"
model   = "claude-haiku-4-5-20251001"

[ai.auth]
api_key = "sk-ant-..."
```

Or set the environment variable:

```bash
export IDEP_API_KEY="sk-ant-..."
```

---

## HuggingFace

Best for: open models, flexible hosting.

```toml
[ai]
backend = "huggingface"
model   = "bigcode/starcoder2-15b"

[ai.auth]
api_key = "hf_..."
```

---

## OpenAI-compatible

Best for: Groq, Together AI, LM Studio, or any OpenAI-compatible endpoint.

```toml
[ai]
backend  = "openai"
model    = "gpt-4o-mini"
endpoint = "https://api.groq.com/openai/v1"

[ai.auth]
api_key = "gsk_..."
```

The `endpoint` field accepts any OpenAI-compatible base URL.
Omit `endpoint` to use OpenAI directly (`https://api.openai.com/v1`).

---

## Backend comparison

| Backend | API key required | Cloud dependency | Best for |
|---|---|---|---|
| Ollama | No | None | Local, private, offline |
| Anthropic | Yes | Moderate | Quality completions |
| HuggingFace | Yes | Moderate | Open models |
| OpenAI-compat | Yes | Moderate–High | Flexibility, Groq speed |
