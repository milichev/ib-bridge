# ib-bridge

A tiny Java thingy called to alleviate PITA with the absence of a decent IBKR TWS API to Node.js connectivity.

## Tech Stack

- Java: official TWS API client (see `source/JavaClient`)
  See the sources [here](https://interactivebrokers.github.io).
- Node.js: test client using `ws`.

## Setup & Running

### 1. Installation

This project uses `mise` to manage the Java environment (Java 21 is required for Gradle compatibility with the TWS SDK).

```bash
# 1. Install Java 21
mise install java@21

# 2. Install Node.js dependencies
cd ib-bridge
npm install
```

### 2. Running the Bridge

The bridge acts as a middleman between TWS and Node.js. Start it first:

```bash
cd ib-bridge
# Ensure mise is active in your shell
eval "$($HOME/.local/bin/mise activate zsh)"

# Run the Java bridge using the correct Java home
./gradlew run -Dorg.gradle.java.home=$(mise where java@21)
```

### 3. Running the Test Client

In a separate terminal, connect to your bridge and start pulling data:

```bash
cd ib-bridge
node test-client.js
```
