# QShots Growth Dashboard

A single-page dashboard for QShots, the free daily email quiz. It reads the **Qshots Tracker** Google Sheet
directly in the browser, so new rows show up without changing any code.

It shows:
- Subscriber growth, emails sent, emails opened, quiz start rate and quiz completion rate
- Day / week / month views, as values or as change vs the previous period
- Where readers drop off (sent → opened → started → finished)
- An **Insights & actions** widget: live signals, three recommended actions with a number to track for each, and data-quality checks on the sheet

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole dashboard. No build step and no server code. |
| `Code.gs` | Optional: serves `index.html` as a Google Apps Script web app. |

## Requirements

- The sheet stays shared as **Anyone with the link: Viewer**.
- The tabs keep the names **QShots Engagement** and **Subscriber Count**, with the same columns
  (Date as `dd-mm-yyyy hh:mm`; sent, open, quiz start and quiz end counts in columns C–F).

The open page reloads the data every 5 minutes and has a "Refresh now" button.

## Publishing

### GitHub Pages (from this repo)
**Settings → Pages → Build and deployment → Deploy from a branch → `main` / root → Save.**
After a minute the dashboard is live at `https://qshala0.github.io/QShots-Dashboard/`.

### Google Apps Script (keeps it in your Google account)
1. In the sheet, open **Extensions → Apps Script**.
2. Replace `Code.gs` with this repo's `Code.gs`.
3. Add an HTML file named `index` and paste in all of `index.html`.
4. **Deploy → New deployment → Web app**. Execute as **Me**; access **Anyone** (or **Anyone with a Google account**).
5. The **Web app URL** (ends in `/exec`) is the dashboard link. After later edits, use
   **Deploy → Manage deployments → Edit → New version** to keep the same link.

## Settings

The `CONFIG` block at the top of the script in `index.html`:
- `sheetId`: the Google Sheet's ID
- `refreshMinutes`: how often the open page reloads data (default 5)
- `weeklyNewTarget`: weekly new-subscriber goal used in the Insights widget (default 25)
- `missingLogDays`: a gap between subscriber logs longer than this counts as missing data (default 35)
