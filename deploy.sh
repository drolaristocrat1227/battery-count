#!/bin/sh
# app/ の中身を Cloudflare Pages (battery-count.pages.dev) に公開する
cd "$(dirname "$0")"
npx wrangler@4.20.0 pages deploy app --project-name battery-count --branch main --commit-dirty=true
