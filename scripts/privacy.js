import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';
import * as marked from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');

// fix github pages 404
await fs.copyFile(
    path.resolve(ROOT, 'dist/index.html'),
    path.resolve(ROOT, 'dist/404.html'),
);

async function genPrivacyPage() {
    const content = (
        await fs.readFile(path.resolve(ROOT, 'privacy.md'))
    ).toString();
    const body = marked.parse(content);
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>隐私条款</title>
        <link rel="stylesheet" href="/lib/md.css">
        <style>
        body {
            padding: 10px;
        }
        </style>
    </head>
    <body class="markdown-body">
        ${body}
    </body>
    </html>`;
    await fs.writeFile(path.resolve(ROOT, 'dist/privacy.html'), html);
}
await genPrivacyPage();
