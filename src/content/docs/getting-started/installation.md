---
title: Installation
description: How to install and build Idep from source.
---

> ⚠️ **Pre-alpha.** No release binary yet. Build from source.

## Prerequisites

- Rust toolchain — install via [rustup](https://rustup.rs)
- Git

Idep pins its Rust version via `rust-toolchain.toml` in the repo root.
`rustup` will auto-install the correct version on first `cargo build`.

## Clone and Build

```bash
git clone https://github.com/idep-editor/idep
cd idep
cargo build
```

A successful build means the AI backend layer is compiled and ready.
The editor UI is not available yet — see the [roadmap](https://github.com/idep-editor/idep/blob/main/TODO.md).

## Configure

```bash
mkdir -p ~/.config/idep
cp config.example.toml ~/.config/idep/config.toml
```

Edit `~/.config/idep/config.toml` to select your AI backend.
See [Backends](/configuration/backends/) for all options.
