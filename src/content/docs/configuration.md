---
title: Configuration
description: Complete configuration reference for Idep.
---

## Config File Location

Idep reads its config from (in order):

1. `~/.config/idep/config.toml` (XDG Base Dir spec, primary)
2. `~/.idep/config.toml` (fallback)

A starter config is included in the repo root as `config.example.toml`.

## Configuration Structure

```toml
[ai]
backend  = "ollama"          # ollama | anthropic | huggingface | openai
model    = "codellama:13b"
endpoint = "http://localhost:11434"   # optional — ollama and openai-compat only

[ai.auth]
api_key = "..."              # optional — anthropic, huggingface, openai only
```

## Config Reference

| Key | Type | Default | Description |
|---|---|---|---|
| `ai.backend` | string | — | Backend type: `ollama`, `anthropic`, `huggingface`, `openai` |
| `ai.model` | string | — | Model identifier (e.g., `codellama:13b`, `claude-3-5-sonnet-20241022`) |
| `ai.endpoint` | string | `http://localhost:11434` (ollama only) | API endpoint URL. Optional for ollama and openai-compat. |
| `ai.auth.api_key` | string | — | API key for anthropic, huggingface, openai. Optional if `IDEP_API_KEY` env var is set. |

## Environment Variables

### `IDEP_API_KEY`

Fallback for `ai.auth.api_key`. If set, overrides the config file value.

```bash
export IDEP_API_KEY="sk-ant-..."
```

## XDG Base Directory Spec

Idep follows the [XDG Base Directory specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html):

- **Config home:** `$XDG_CONFIG_HOME/idep/config.toml` (defaults to `~/.config/idep/config.toml`)
- **Data home:** `$XDG_DATA_HOME/idep/` (defaults to `~/.local/share/idep/`)
- **Cache home:** `$XDG_CACHE_HOME/idep/` (defaults to `~/.cache/idep/`)

Override by setting `XDG_CONFIG_HOME`, `XDG_DATA_HOME`, or `XDG_CACHE_HOME` environment variables.

## Backend Comparison

| Backend | API Key Required | Cloud Dependency | Best For |
|---|---|---|---|
| Ollama | No | None | Local, private, offline |
| Anthropic | Yes | Moderate | Quality completions, Claude models |
| HuggingFace | Yes | Moderate | Open models, flexible hosting |
| OpenAI-compat | Yes | Moderate–High | Flexibility, Groq speed, LM Studio |

## Example Configs

### Ollama (Local)

```toml
[ai]
backend  = "ollama"
model    = "codellama:13b"
endpoint = "http://localhost:11434"
```

### Anthropic

```toml
[ai]
backend = "anthropic"
model   = "claude-3-5-sonnet-20241022"

[ai.auth]
api_key = "sk-ant-..."
```

### HuggingFace

```toml
[ai]
backend = "huggingface"
model   = "bigcode/starcoder2-15b"

[ai.auth]
api_key = "hf_..."
```

### OpenAI-compatible (Groq)

```toml
[ai]
backend  = "openai"
model    = "mixtral-8x7b-32768"
endpoint = "https://api.groq.com/openai/v1"

[ai.auth]
api_key = "gsk_..."
```

### OpenAI Direct

```toml
[ai]
backend = "openai"
model   = "gpt-4o-mini"

[ai.auth]
api_key = "sk-..."
```

(Omit `endpoint` to use OpenAI's default: `https://api.openai.com/v1`)
