---
title: Architecture
description: Idep crate map and design overview.
---

## Crate Structure

```
idep/
├── idep-core/          Core buffer, workspace, and file I/O
├── idep-ai/            AI backend abstraction and completion/chat engines
├── idep-lsp/           LSP server and protocol handling
├── idep-plugin/        Plugin system and extensibility
├── idep-index/         Code indexing and symbol resolution
└── idep/               Binary entry point
```

## Crates

### idep-core

**Status:** Stable (v0.0.2)

Core data structures and APIs for buffer management, workspace operations, and file I/O.

**Key APIs:**
- `Buffer::insert(pos, text)` — insert text at position
- `Buffer::delete(range)` — delete text in range
- `Buffer::lines()` — get lines as iterator
- `Buffer::to_string()` — serialize to string
- `Workspace::open_file(path)` — load file into buffer
- `Workspace::save_file(path, buffer)` — persist buffer to disk
- File watcher (via `notify` crate) — triggers `Indexer::reindex_file` on save

Cursor position tracking and line/column mapping built in.

### idep-ai

**Status:** Partial (v0.0.2 — completions and chat streaming)

AI backend abstraction layer and completion/chat engines.

**Backends:**
- Ollama (local inference)
- Anthropic (Claude)
- HuggingFace (open models)
- OpenAI-compatible (Groq, Together, LM Studio, etc.)

**Completion Engine:**
- Connected to `idep-lsp` via LSP bridge
- Configurable debounce (default 300ms)
- Stop-sequence handling (halts at function boundary)
- FIM token validation for DeepSeek, StarCoder, CodeLlama

**Chat Engine:**
- Streaming token callback on `send()`
- Debounce wired through to chat context

### idep-lsp

**Status:** In Progress (v0.0.2 — LSP server foundation)

LSP server implementation and protocol handling. Bridges editor clients to Idep's completion and chat engines.

**Current scope:**
- LSP server lifecycle (initialize, shutdown)
- Completion request handling
- Diagnostics (future)

### idep-plugin

**Status:** Planned (v0.1.0+)

Plugin system for extending Idep with custom backends, indexers, and UI components.

### idep-index

**Status:** Planned (v0.1.0+)

Code indexing, symbol resolution, and cross-file navigation. Will power "go to definition" and refactoring tools.

## Data Flow

```
Editor Client
    ↓
idep-lsp (LSP Server)
    ↓
idep-ai (CompletionEngine / ChatEngine)
    ↓
Backend (Ollama / Anthropic / HuggingFace / OpenAI)
    ↓
Tokens → idep-lsp → Editor
```

File changes flow through `idep-core`'s file watcher:

```
File Save
    ↓
idep-core (FileWatcher)
    ↓
idep-index (Indexer::reindex_file)
    ↓
Symbol table updated
```

## Configuration

All backends configured via `~/.config/idep/config.toml`. See [Configuration](/configuration/) for details.

## Testing

- **Unit tests:** Run `cargo test --all` — backend tests use mock servers, no live API keys required.
- **Integration tests:** Coming in v0.1.0.
