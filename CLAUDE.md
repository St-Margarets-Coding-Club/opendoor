# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenDoor is an animal adoption website (useopendoor.com) built with Flask. It displays one animal profile at a time in a social media-style card interface. Animal data is sourced from the Hong Kong Animal Adoption Database and stored in MongoDB Atlas.

## Architecture

### Tech Stack
- **Backend**: Flask (Python) with Waitress WSGI server
- **Database**: MongoDB Atlas (cloud-hosted MongoDB)
- **Image Hosting**: Cloudinary
- **Frontend**: Vanilla HTML/CSS/JavaScript (Jinja2 templating)
- **Deployment**: Vercel

### Directory Structure

```
/database/          # Data processing Jupyter notebooks
  - convert.ipynb     # Converts CSV to MongoDB documents
  - scraping.ipynb    # Web scraping utilities
  - images.ipynb      # Image processing for Cloudinary
  - links.ipynb       # Link processing
  - update.ipynb      # Database update scripts
  - animals.csv       # Source data from HK Animal Adoption Database

/server/            # Flask application
  - server.py         # Main Flask app, defines routes
  - data.py           # MongoDB connection and data loading
  - requirements.txt  # Python dependencies
  - vercel.json       # Vercel deployment config
  - .env              # Environment variables (CLUSTER_URL, CLOUDINARY_URL)
  - templates/
    - index.html      # Jinja2 template with animal card UI
  - static/
    - css/index.css   # Styling for the animal card
    - js/connector.js # Frontend fetch logic and DOM updates
    - images/         # Static assets (logo, buttons)
```

### Key Architectural Patterns

1. **Single-Page Animal Viewer**: The app displays one animal profile at a time. Users click "shuffle" to load a new random animal.

2. **Server-Side Randomization**: Random animal selection happens in `server.py:animals()` using a shuffled in-memory list to avoid repeats during a session.

3. **API-Style Data Flow**: Frontend fetches animal data via `/get_data` endpoint returning JSON; JavaScript updates DOM elements individually.

4. **MongoDB Data Pipeline**: Source data flows: `animals.csv` → Jupyter notebooks (`convert.ipynb`) → MongoDB Atlas → Flask (`data.py`) → Frontend.

## Common Commands

### Development

```bash
# Start the Flask development server
cd server
python server.py
# Server runs on http://0.0.0.0:8000

# Install dependencies
cd server
pip install -r requirements.txt
```

### Data Processing

Data processing is done via Jupyter notebooks in `/database/`:

- **`convert.ipynb`**: Reads `animals.csv`, converts to dicts, inserts into MongoDB
- **`images.ipynb`**: Uploads/processes animal images to Cloudinary
- **`update.ipynb`**: Scripts for updating existing database records

Run these notebooks to refresh the database with new shelter data.

## Key Files and Their Roles

- **`server/server.py`**: Defines two routes - `/` serves the HTML template, `/get_data` returns random animal JSON
- **`server/data.py`**: Establishes MongoDB connection, filters out records without images, exports `list` variable used by server.py
- **`server/static/js/connector.js`**: `fetchData()` calls `/get_data`, then updates each DOM element with animal info
- **`server/templates/index.html`**: Jinja2 template using `url_for('static', ...)` for asset paths

## Environment Variables

Required in `server/.env`:
- `CLUSTER_URL`: MongoDB Atlas connection string
- `CLOUDINARY_URL`: Cloudinary API credentials

## Deployment Notes

- Configured for Vercel via `vercel.json` with rewrite rules
- Uses Waitress WSGI server in production (`server.py` line 45)

## gstack

**Important**: For all web browsing, use the `/browse` skill from gstack. Never use `mcp__claude-in-chrome__*` tools.

### Available Skills

- `/plan-ceo-review` - Planning for CEO review
- `/plan-eng-review` - Planning for engineering review
- `/review` - Code review functionality
- `/ship` - Shipping/deployment workflows
- `/browse` - Web browsing and site testing (use this instead of mcp__claude-in-chrome__*)
- `/qa` - QA testing utilities
- `/setup-browser-cookies` - Browser cookie setup
- `/retro` - Retrospective tools

### Troubleshooting

If gstack skills aren't working, run the following to build the binary and register skills:

```bash
cd .claude/skills/gstack && ./setup
```
