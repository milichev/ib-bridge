# IBJts Agent Instructions

## GOAL

Build an app serving as a bridge between TWS API and Node.js app.

## STRUCTURE

The project represents the unzipped package downloaded from the official TWS API page:
https://interactivebrokers.github.io

The initial content is:

```
samples
sourec
API_VersionNum.txt
CMakeLists.txt
```

## START

1. Run the following to initialize terminal shell, if you need it:
   ```bash
   eval "$(/opt/homebrew/bin/brew shellenv)"
   eval "$($HOME/.local/bin/mise activate zsh)"
   source "$HOME/.orbstack/shell/init.zsh" 2>/dev/null || :
   ```

## SKILLS

* Use `IBKR TWS API` skill (`~/.gemini/antigravity/skills/ibkr-tws-api/SKILL.md`) as reference for TWS/Gateway API and `ib-async`.