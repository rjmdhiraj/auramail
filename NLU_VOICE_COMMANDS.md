# AuraMail NLU Engine — Natural Language Voice Commands

## Overview

AuraMail now understands **natural speech** instead of requiring exact command phrases. Users can speak naturally in **English or Hindi**, and the system automatically identifies their intent and executes the right action.

## How It Works

```
User speaks: "read the second email"
         ↓
Voice Recognition (Web Speech API)
         ↓
1. Exact command match? → Yes → Execute directly
2. Partial match?      → Yes → Execute best match
3. NLU Engine fallback  → Pattern matching + intent classification
         ↓
Result: { intent: "open_email_number", action: "openEmailByNumber", params: { emailNumber: 2 } }
         ↓
App executes: openEmail(emails[1])
```

The NLU engine runs **entirely client-side** — no API calls, no latency, works offline.

## Architecture

| Layer | Purpose |
|-------|---------|
| `nlu.js` | Intent patterns, number extraction, confidence scoring |
| `app.js` → `processVoiceCommand()` | Exact match → Partial match → **NLU fallback** |
| `app.js` → `_executeNLUAction()` | Maps NLU results to app methods |

## Supported Natural Phrases

### Navigation
| What you say | What happens |
|---|---|
| "read my emails" / "check inbox" / "any new mail?" | Opens inbox and reads emails |
| "I want to compose a new email" / "write an email" | Opens compose screen |
| "show me settings" / "change my preferences" | Opens settings |
| "go back" / "return" | Goes to previous screen |
| "help" / "what can I say?" | Shows voice command guide |

### Email Actions
| What you say | What happens |
|---|---|
| "read the second email" / "open email 3" | Opens that specific email |
| "read this to me" / "say the email aloud" | Reads current email via TTS |
| "reply to this" / "write back" | Opens reply |
| "forward this email" | Opens forward |
| "please delete this" / "move to trash" | Deletes (with confirmation) |
| "this is spam" / "mark as spam" | Marks as spam (with confirmation) |

### Dictation
| What you say | What happens |
|---|---|
| "start dictating" / "voice input mode" | Begins voice typing |
| "stop dictating" / "I'm done" | Stops voice typing |
| "dictate recipient" / "who should I send to?" | Voice input for To field |
| "dictate subject" | Voice input for Subject |
| "dictate message" / "let me write the message" | Voice input for body |

### Accessibility
| What you say | What happens |
|---|---|
| "switch to dark mode" / "make it dark" | Toggles dark/light theme |
| "make the text bigger" / "I can't read" | Increases font size |
| "louder" / "I can't hear" / "volume up" | Increases speech volume |
| "quieter" / "too loud" | Decreases speech volume |
| "repeat" / "say that again" / "what did you say?" | Repeats last spoken text |

### Hindi Examples (हिन्दी)
| What you say | What happens |
|---|---|
| "दूसरा ईमेल खोलो" | Opens the 2nd email |
| "डार्क मोड चालू करो" | Toggles dark mode |
| "इसे हटाओ" | Deletes current email |
| "मदद" / "सहायता" | Shows help |
| "आवाज़ बढ़ाओ" / "सुनाई नहीं" | Increases volume |
| "ईमेल लिखो" | Opens compose |
| "वापस जाओ" | Goes back |

## Number Recognition

The NLU understands numbers in multiple forms:

| Input | Extracted Number |
|---|---|
| "email 3" / "email #3" | 3 |
| "the second email" | 2 (ordinal → number) |
| "पहला ईमेल" (first) | 1 |
| "दूसरा ईमेल" (second) | 2 |
| "आखिरी ईमेल" (last) | -1 (resolved to last email) |

## Safety: Destructive Action Confirmation

Destructive commands (delete, spam) always trigger a spoken confirmation:

```
User: "please delete this email"
App:  "Are you sure you want to delete? Say 'yes' to confirm or 'no' to cancel."
User: "yes" / "हाँ"
App:  *deletes email*
```

## Files Changed

- **`nlu.js`** (NEW) — NLU engine with 30+ intents, 200+ patterns (EN + HI)
- **`index.html`** — Added `<script src="nlu.js">` 
- **`app.js`** — Added NLU fallback in `processVoiceCommand()` + `_executeNLUAction()` router

## Test Results

```
✅ 15/15 tests passed

✅ "read the second email"         → open_email_number (0.99) num=2
✅ "switch to dark mode"           → toggle_dark_mode (0.99)
✅ "I want to compose a new email" → compose_email (0.92)
✅ "please delete this email"      → delete_email (0.89)
✅ "show me my sent emails"        → switch_to_sent (0.90)
✅ "make the text bigger"          → increase_font (0.99)
✅ "volume up please"              → increase_volume (0.91)
✅ "go to drafts folder"           → switch_to_drafts (0.94)
✅ "दूसरा ईमेल खोलो"               → open_email_number (0.99) num=2
✅ "डार्क मोड चालू करो"             → toggle_dark_mode (0.96)
✅ "can you read my emails"        → read_inbox (0.93)
✅ "what did you say"              → repeat_last (0.95)
✅ "मदद"                           → show_help (0.99)
✅ "इसे हटाओ"                      → delete_email (0.99)
✅ "speak hindi"                   → switch_to_hindi (0.99)
```
