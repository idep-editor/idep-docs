---
title: First Run
description: Verify your Idep installation is working.
---

> ⚠️ **Pre-alpha.** End-to-end completions are not wired yet (coming in v0.0.2).
> These steps verify the build and config are healthy.

## Verify the build

```bash
cargo check --all
```

All crates should check clean with no errors.

## Verify your config

```bash
cat ~/.config/idep/config.toml
```

Confirm your chosen backend and model are set. See [Backends](/configuration/backends/).

## Run the test suite

```bash
cargo test --all
```

Backend unit tests run against mock servers — no live API key or running Ollama required.

## Next

Once v0.0.2 ships, this page will cover running Ollama completions end-to-end.
Follow [releases](https://github.com/idep-editor/idep/releases) for updates.
