---
title: First Run
description: Verify your Idep installation is working.
---

## Verify the build

```bash
cargo build --release
./target/release/idep --version
```

Expect: `idep 0.0.2`.

## Verify your config

```bash
cat ~/.config/idep/config.toml
```

Confirm backend, model, and any endpoint/api_key are set. See [Backends](/configuration/backends/).

## Optional: Ollama check

In a second terminal:

```bash
ollama serve
```

Then trigger a completion from the IDE/LSP client. Expected: tokens stream until stop-sequence; debounce honored (300ms default); stops at function boundary.

## Run the test suite

```bash
cargo test --all
```

Backend unit tests run against mock servers — no live API key or running Ollama required.
