---
title: Configuration Overview
description: How Idep configuration works.
---

Idep reads its config from:

```
~/.config/idep/config.toml        (primary — XDG Base Dir spec)
~/.idep/config.toml               (fallback)
```

A starter config is included in the repo root as `config.example.toml`.

## Structure

```toml
[ai]
backend  = "ollama"          # ollama | anthropic | huggingface | openai
model    = "codellama:13b"
endpoint = "http://localhost:11434"   # optional — ollama and openai-compat only

[ai.auth]
api_key = "..."              # optional — anthropic, huggingface, openai only
```

`IDEP_API_KEY` environment variable is checked as a fallback for `api_key`.

## Hot Reload

🔴 **Coming in v0.2.0-beta** — config changes without restarting the editor.

## Keybindings

🔴 **Coming in v0.2.0-beta** — `~/.config/idep/keybindings.toml`.

See [Backends](/configuration/backends/) for full per-backend examples.
