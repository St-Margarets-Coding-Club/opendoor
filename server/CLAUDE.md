# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Flask web application that displays random animal data from a MongoDB database. It is configured for deployment on Vercel.

## Architecture

**Backend (Python/Flask):**
- `server.py` - Main Flask application with two routes: `/` (renders index.html) and `/get_data` (returns random animal JSON)
- `data.py` - Connects to MongoDB Atlas on startup, fetches animal documents from `animalsdb.animals` collection, filters out entries with placeholder images, and exports a deduplicated list
- Uses `waitress` as the WSGI server in production (port 8000)

**Frontend:**
- `templates/index.html` - Main page
- `static/css/` - Stylesheets
- `static/js/` - JavaScript files
- `static/images/` - Static image assets

**Database:**
- MongoDB Atlas cluster
- Database: `animalsdb`
- Collection: `animals`
- Documents expected to have fields including `image` (URL or 'temp' for placeholders)

## Environment Setup

**Required environment variables (in `.env`):**
- `CLUSTER_URL` - MongoDB Atlas connection string
- `CLOUDINARY_URL` - Cloudinary image service URL

**Installation:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

## Development Commands

**Run the development server:**
```bash
python server.py
```
The server starts on http://0.0.0.0:8000

**Run with Flask development server (for debugging):**
```bash
flask --app server.py run --debug
```

## Deployment

The app is configured for Vercel deployment via `vercel.json`, which rewrites all routes to `server.py`.

## Project Structure Notes

- No test suite is currently configured
- No linting/formatting tools (flake8, black, etc.) are configured
- The `data.py` module connects to MongoDB at import time; the connection runs when server.py imports it
- Animal data is shuffled and served without replacement until the list is exhausted, then reshuffled
