Warning: fs was declared with const; use let for reassignable variables.
# Brown Dust 2 Assets
![Brown Dust 2 Header](header/header.png)

This repository contains primarily 2D and Live2D assets from **Brown Dust 2**.

> ⚠️ **Disclaimer:**  
The folder structure in this repository does **not** reflect the actual asset storage structure used in the official game. It is already sorted by me for ease of browsing and accessibility.

## Cloning repository
For faster cloning and saving bandwith, you can use this command to clone which should be fine in most case:

`git clone --depth 1 https://github.com/myssal/Brown-Dust-2-Asset.git`

## Character asset index

The repository-level [index.json](index.json) maps each character to its costume, dating, background, and audio resources. The top-level keys are zero-padded four-digit character IDs; each entry includes its English and Simplified Chinese name.

| Field | Meaning |
|---|---|
| <code>canonicalCostumeIds</code> | Current costume IDs from the character roster. |
| <code>costumeIds</code> | Costume IDs including known legacy aliases and available censored variants. |
| <code>costumeAssetIds</code> | Exact IDs of character directories present under <code>spine/char</code>. |
| <code>costumeIdAliases</code> | Maps a legacy or variant asset ID to its canonical costume ID. |
| <code>datingIds</code> | Dating scene resource IDs, such as <code>illust_dating1</code>. |
| <code>datingLobbyIds</code> / <code>datingInteractionIds</code> | Native dating lobby row IDs and nonzero interaction IDs. |
| <code>backgroundIds</code> | Background resource IDs used by the character's costume illustrations. |
| <code>backgroundsByCostume</code> | Maps each canonical costume ID to its background resource ID(s). |
| <code>audioIds</code> | Audio asset IDs grouped as <code>characterVoice</code>, <code>skillCutscene</code>, and <code>dating</code>. Voice and skill IDs are file-name stems; dating IDs are hashed OGG file IDs. |
| <code>audioEventIds</code> | Related FMOD event names, grouped by audio category. |
| <code>audioFiles</code> | Relative audio file paths. Paths are relative to <code>audio/char</code>, <code>audio/cutscene</code>, or <code>audio/dating</code> according to category. |

The index combines current costume IDs with legacy asset aliases so older resource names can still be resolved. Some hashed files in <code>audio/dating</code> have no scene-event mapping and are therefore not assigned to a character.
