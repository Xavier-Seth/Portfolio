# Chicken Sales POS — Project Summary

## What This Project Does

A mobile app built for a small fried chicken street food stall. Every day, the stall owner enters how many items were stocked, delivered, and left over — and the app automatically calculates how many were sold, the total revenue, and whether the cash in the register matches what it should be. Daily records are saved on the phone, and the app shows a history log and a sales chart to track performance over time.

## Who It's Built For

Small food stall operators and carinderia owners in the Philippines who need a simple, offline tool to close out their day — without spreadsheets, paper forms, or an internet connection. The app supports both English and Filipino to match the local context.

## Key Features

- **Live sales calculation** — Enter beginning stock, delivered stock, and remaining stock per product; the app instantly computes units sold and revenue.
- **Cash reconciliation** — Compares the expected cash (starting cash + net sales) against the actual cash counted at end of day, and labels the result as Match, Short, or Over.
- **Ticket deductions** — Supports discount tickets that reduce gross sales to arrive at net sales.
- **Daily record saving** — Saves one record per business day. Re-saving updates the existing record rather than creating a duplicate.
- **Sales history** — Scrollable list of all past days with gross sales, net sales, expected vs actual cash, and cash status per record. Includes a running total across all days.
- **Sales chart** — Bar chart of net sales for the last 7 saved days, with tap-to-inspect tooltips.
- **Configurable prices** — Product prices can be changed in Settings and immediately affect all calculations. Defaults can be restored with one tap.
- **Bilingual UI** — Full English and Filipino translation, switchable in Settings without restarting the app.
- **Fully offline** — No internet connection required. All data is stored locally on the device.

## Tech Stack

| Technology                       | Role in This Project                                                                            |
| -------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Flutter**                      | Cross-platform UI framework — one codebase runs on Android, iOS, and Web                        |
| **Dart**                         | Programming language used by Flutter                                                            |
| **Material 3**                   | Google's modern design system — provides the visual components (cards, buttons, navigation bar) |
| **shared_preferences**           | Stores all sales records and settings directly on the device, like a lightweight local database |
| **fl_chart**                     | Draws the bar chart on the Charts tab                                                           |
| **flutter_localizations / intl** | Powers the English ↔ Filipino language switching                                                |

## System Architecture

The app is structured into four clear layers:

1. **Pages (screens)** — Four tabs: Sales (data entry), History (past records), Charts (visual trends), Settings (prices and language). Each tab holds its own state so switching between them does not reset your work.

2. **Logic** — A single `SalesCalculator` class handles all the math (sold units, gross sales, net sales, expected cash, cash difference). It is completely separate from the UI so it can be tested independently.

3. **Services** — Three service classes handle all reads and writes:
   - `SalesStorage` — saves, retrieves, and deletes daily sales records
   - `SettingsService` — saves and loads product prices and the chosen language
   - `SalesRefreshNotifier` — a lightweight broadcast signal so that saving on the Sales tab instantly updates the History and Charts tabs

4. **Models** — `SalesRecord` is the single data object representing one day of sales. It converts to and from a simple key-value format for storage.

Data flows in one direction: the user fills in the Sales form → `SalesCalculator` computes the result → the user saves → `SalesStorage` writes the record → `SalesRefreshNotifier` tells the other tabs to reload.

## Notable Technical Decisions

**1. SharedPreferences instead of a database**
Rather than setting up SQLite or a cloud database, all records are stored as a list of JSON strings in the device's built-in key-value store. This keeps the app dead-simple to install and use — no sign-up, no sync, no storage permissions. The trade-off is that data lives only on one device and is lost if the app is uninstalled without a backup, which is acceptable for the target use case.

**2. Cross-tab refresh via a counter signal**
When the user saves a record on the Sales tab, the History and Charts tabs need to show the updated data. Instead of a complex state management library, the app uses a single global counter (`ValueNotifier<int>`) that increments by one on every save. All tabs listen to this counter and reload their data whenever it changes. This is a minimal, dependency-free solution that avoids over-engineering for a four-tab app.

**3. Backward-compatible data migration in the model**
The field names in the saved data were renamed during development (e.g., `soldChicken20` was renamed to `soldChickenLarge` to make the app more flexible). Rather than running a migration script, the data loading code checks for the old name as a fallback whenever the new name is missing. This means records saved with an older version of the app continue to load correctly without any extra steps from the user.

## Challenges & What I Learned

The hardest part wasn't technical — it was jumping into development without fully understanding how the business actually operates. I built the first version of the app without studying the stall's real workflow, pricing structure, or expense tracking. It was only later that I discovered features like ticket deductions needed to be included, which required me to go back and redesign parts of the app. If I could start over, I would spend time observing and interviewing the business owner first before writing any code — understanding the problem deeply before building the solution.

---

_Generated from source code analysis_
