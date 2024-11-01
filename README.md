# Halloween Bingo

## About

This is a icebreaker bingo game I built for our Halloween team event at work using Vue 3.

It supports five types of gameplay:

- Single Line
- Full card
- Four corners
- X
- Outside edges

It also supports alternate phrases for replayability

### How to play

Invite friends to your virtual meeting of choice (Microsoft Teams, Zoom, Webex, etc.).

Every player can generate their own bingo card using the following URL:

https://jpoiri.github.io/halloween-bingo/

The game master can call out phrases in a random order using this URL:

https://jpoiri.github.io/halloween-bingo/callout

### Game modes

You can change game modes using the <code>gameMode</code> query param (e.g. https://jpoiri.github.io/halloween-bingo/#/?gameMode=card)

It supports the following game modes:

- <code>line</code> (Default)
- <code>card</code> (Full card)
- <code>corners</code> (Four corners)
- <code>x</code> (X)
- <code>edges</code> (Outside edges)

### Alternate phrases

You can use alternate phrases using the <code>alternatePhrases</code> query param (e.g. https://jpoiri.github.io/halloween-bingo/#/?alternatePhrases=true)

## Pre-requisites

- Node.js is installed
- GIT is installed|

## Installation 

1. Download repository by running the following command:

```
git clone https://github.com/jpoiri/halloween-bingo.git
```
2. Download the project dependencies by running following command on project root:

```
npm install
```

## Running the project

```
npm run dev
```

## Copyright

Pumpkin icon is from <a href="https://www.freepik.com/icons/halloween">Icon by Good Ware</a>