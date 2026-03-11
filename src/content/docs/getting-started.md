---
title: Getting Started
description: Build and configure Idep from source.
---

## Prerequisites

- **Rust stable** — install via [rustup](https://rustup.rs)
- **Cargo** — included with Rust
- **Git**
- *Optional:* **Ollama** for local AI inference (recommended for first run)

Idep pins its Rust version via `rust-toolchain.toml` in the repo root. `rustup` will auto-install the correct version on first `cargo build`.

## Clone and Build

```bash
git clone https://github.com/idep-editor/idep
cd idep
cargo build --release
```

A successful build means all crates compile and the binary is ready at `target/release/idep`.

## Configure Your Backend

Create the config directory and file:

```bash
mkdir -p ~/.config/idep
cp config.example.toml ~/.config/idep/config.toml
```

Edit `~/.config/idep/config.toml` to select your AI backend. See [Configuration](/configuration/) for all options.

### Ollama (Local, No API Key)

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

### Anthropic

Best for: highest quality completions, Claude models.

```toml
[ai]
backend = "anthropic"
model   = "claude-3-5-sonnet-20241022"

[ai.auth]
api_key = "sk-ant-..."
```

Or set the environment variable:

```bash
export IDEP_API_KEY="sk-ant-..."
```

### HuggingFace

Best for: open models, flexible hosting.

```toml
[ai]
backend = "huggingface"
model   = "bigcode/starcoder2-15b"

[ai.auth]
api_key = "hf_..."
```

### OpenAI-compatible

Best for: Groq, Together AI, LM Studio, or any OpenAI-compatible endpoint.

```toml
[ai]
backend  = "openai"
model    = "gpt-4o-mini"
endpoint = "https://api.groq.com/openai/v1"

[ai.auth]
api_key = "gsk_..."
```

The `endpoint` field accepts any OpenAI-compatible base URL. Omit `endpoint` to use OpenAI directly (`https://api.openai.com/v1`).

## Verify It Works

```bash
cargo build --release
./target/release/idep --version
```

Expected output:

```
idep 0.0.2
```

If you configured Ollama, start the server in another terminal:

```bash
ollama serve
```

Then run a completion test (exact command depends on UI availability in v0.0.2 — check [TODO.md](https://github.com/idep-editor/idep/blob/main/TODO.md) for current status).
