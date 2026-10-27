# Zhuojun Jiang — Personal Website

A dependency-free academic personal website built with HTML, CSS, and JavaScript.

## Local preview

1. Open this folder in Visual Studio Code.
2. Install the **Live Server** extension by Ritwick Dey.
3. Open `index.html` and click **Go Live** in the VS Code status bar.
4. Edit `content.js` and save. The browser refreshes automatically.

No Ruby, Jekyll, Docker, or npm installation is required.

## Visitor map

MapMyVisitors loads on published pages through the shared `script.js`; only
Connect displays the map. Localhost and file previews do not load the tracker.
Set `SITE_CONTENT.visitorMap.enabled` to `false` in `content.js` to disable it
site-wide. The provider receives visit data and its public statistics pages may
show regions and visit times. Blocking analytics can prevent collection or display.

## Editing content

- Personal information, links, publications, projects, and news: `content.js`
- About and updates: `index.html`
- Research, publications, and projects: `work.html`
- Personal notes, photos, and thoughts: `life.html`
- Contact and professional links: `connect.html`
- Colors, typography, spacing, and responsive layout: `styles.css`
- Theme toggle, navigation, and content rendering: `script.js`

To add a profile image or CV, create an `assets/` folder and update the corresponding paths in `content.js`.
