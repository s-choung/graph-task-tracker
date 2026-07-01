# Graph Task Tracker

> A single-file, zero-build visual task manager — flow graph + kanban, in one `index.html`.

Graph Task Tracker is a vanilla-JS task manager that lets you plan work as an n8n-style node/edge flow graph or a plain kanban list. Organize everything into nestable projects, connect tasks to model dependencies, and drop finished work into a done archive. There's no backend, no account, and no build step — your data lives in `localStorage`, and the whole app is a single HTML file you can open straight from disk.

![Graph Task Tracker demo](demo.gif)

## Features

- **Two views, one toggle** — an n8n-style node/edge flow graph and a kanban list.
- **Project sidebar** — nestable subprojects (drag a project onto another to nest; drag onto the top/bottom edge to reorder), a collapsible accordion tree, inline rename, per-project collaborators, a unique `#number`, and resizable width.
- **Aggregated parent view** — selecting a parent project shows a combined graph of all its subprojects' tasks; selecting a subproject shows just its own.
- **Cards and notes** — task cards carry state, priority, due date, assignees, and ETA; free-text notes sit alongside them.
- **Connect cards** — drag the hover handles on either side, or drag one card near another for proximity auto-connect on both sides. Edge types: `next`, `success`, `fail`, `sub`.
- **Done archive ("완료함")** — finished and deleted items are kept with their dates; restore by button or by dragging back onto a project.
- **Fast editing** — `Ctrl+Z` undo, `Ctrl+C`/`Ctrl+V` copy-paste, marquee multi-select, Space/middle-drag pan, and double-click empty space to create.
- **Local persistence** — everything saves to `localStorage`. No backend, no build, no account.

## Live demo

**▶ [s-choung.github.io/graph-task-tracker](https://s-choung.github.io/graph-task-tracker/)** — runs entirely in your browser (localStorage). Preloaded with a demo: a Europe trip, a battery-research project, and a website launch.

## Quick start

Just open `index.html` in a browser — no install.

## Controls

| Action | Gesture |
|---|---|
| New card / text | Double-click empty space |
| Marquee select | Drag empty space |
| Pan | Space or middle-drag |
| Auto-connect | Drag a card near another |
| Connect | Hover a card, drag the ● handles |
| Delete | `Del` |
| Undo | `Ctrl+Z` |
| Copy / paste | `Ctrl+C` / `Ctrl+V` |
| Auto-layout | ↹ Arrange |

## Tech

Vanilla JS with no framework and no build step. Graph layout is handled by [dagre](https://github.com/dagrejs/dagre), and typography comes from Google Fonts.

## License

[MIT](LICENSE)
