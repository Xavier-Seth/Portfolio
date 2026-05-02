# DocuNet — Project Summary

## What This Project Does

DocuNet is a web-based document management system for a Philippine public school. It digitizes and centralizes teacher records (DTRs, SALN, appointment papers, etc.) and school property documents (ICS, RIS). Documents are automatically categorized using OCR and a machine learning classifier, stored encrypted at rest, and accessible through a role-gated web interface.

## Who It's Built For

- **School Admins** — manage all teachers, users, documents, system settings, and backups
- **Admin Staff** — upload and manage documents, view records
- **Teachers** — view their own personal records and profile

## Key Features

- **OCR-powered auto-categorization** — uploads are scanned via Tesseract OCR and classified by a Flask ML microservice; category and linked teacher are auto-detected from document text
- **Encrypted document storage** — all teacher records are AES-encrypted at rest; decrypted only on-the-fly for preview/download
- **Document preview** — inline PDF/image viewer with LibreOffice-powered Office → PDF conversion
- **Duplicate detection** — hash-based check on upload with user-prompted override modal
- **Backup & restore** — one-click full backup (DB dump + all files) in two variants: encrypted archive and human-readable decrypted archive
- **Role-based access control** — three roles (Admin, Admin Staff, Teacher) with middleware-enforced route groups
- **Teacher management** — full CRUD with photo upload, status tracking, and document history
- **Audit logs** — all significant actions recorded
- **Dashboard** — storage usage breakdown, teacher roster with quick-access document modals, recent activity feed
- **Email notifications** — document upload events trigger email to relevant parties
- **In-browser document scan** — pre-scan before upload to extract and preview OCR text

## Tech Stack

| Layer                | Technology                                  |
| -------------------- | ------------------------------------------- |
| Backend framework    | Laravel 11 (PHP 8.2)                        |
| Frontend framework   | Vue 3 (Composition API)                     |
| Server-client bridge | Inertia.js v2                               |
| CSS / UI             | Tailwind CSS 3, Bootstrap Icons, Lucide Vue |
| Build tool           | Vite                                        |
| Database             | MySQL                                       |
| Authentication       | Laravel Breeze + Sanctum                    |
| OCR engine           | Tesseract OCR                               |
| PDF rendering        | pdftoppm (Poppler)                          |
| Office conversion    | LibreOffice headless                        |
| ML classifier        | Python Flask microservice                   |
| Excel parsing        | PhpSpreadsheet                              |
| PDF generation       | DomPDF                                      |
| Route helpers        | Ziggy (Laravel → JS)                        |
| Testing              | PHPUnit 11                                  |

## System Architecture

```
Browser (Vue 3 SPA-feel)
       │  Inertia.js (no separate REST API for pages)
       ▼
Laravel 11 (Web Server)
  ├── Controllers (thin)
  ├── Services
  │     ├── DocumentUploadService  ← encrypt, store, trigger OCR
  │     ├── OcrService             ← Tesseract + pdftoppm + LibreOffice
  │     ├── CategorizationService  ← keyword-rule auto-classifier
  │     ├── BackupService          ← DB dump + ZIP export/restore
  │     └── LogService
  └── MySQL Database
       │
       ├── Flask Microservice (port 5000)
       │     └── /extract-and-classify  ← ML-based OCR + category detection
       │
       └── storage/app/public/
             ├── documents/   (AES-encrypted blobs)
             ├── previews/    (decrypted, ephemeral)
             └── backups/
```

## Notable Technical Decisions

1. **Inertia.js over a separate SPA/API** — keeps routing and auth in Laravel while giving Vue a reactive feel. Eliminates token management overhead for an internal school tool.

2. **Encryption at rest for teacher documents** — teacher records contain sensitive personal data (SALN, PDS). Encrypting at the file level means raw storage access does not expose document contents.

3. **Dual backup format** — `backup_*.zip` (encrypted blobs, for system restore) and `backupdecrypt_*.zip` (plaintext files, for human-readable export). Backup includes a full `database.sql` dump generated via raw PDO to avoid mysqldump dependency.

4. **Flask ML sidecar, not a library** — the OCR + classification model runs in a separate Python process. This decouples the ML stack from PHP and allows model updates without touching the Laravel app.

5. **Priority-ordered keyword rules in CategorizationService** — most-specific document types listed first to prevent generic terms (e.g., "rics") from matching before specific ones. Two-pass strategy: strict whole-word OCR match first, then loose filename match as fallback.

6. **LibreOffice headless for Office → PDF** — avoids paid cloud APIs; keeps all processing on-premises, which matters for a government school context.

## Challenges & What I Learned

> One of the hardest decisions in this project was choosing the right classification algorithm. I initially built the document classifier using Word2Vec with hardcoded rules — meaning the categories and matching logic were manually written into the code. While it worked to some extent, it was rigid and difficult to maintain. I eventually replaced it entirely with a multilingual E5 vector model, which learns from real document samples instead of hardcoded rules. This was a much better approach — the model classifies documents by comparing them against actual snippets of real documents I collected, making it far more accurate and flexible.
> The bigger challenge, however, was a fundamental one: I had to completely restart the project midway through. My original plan was to target student records, but I realized this raised serious privacy concerns — student data is sensitive and protected. I had to scrap that direction entirely and pivot to teacher documents instead, which are less confidential and more appropriate for a school document management system. If I could start over, I would spend much more time planning upfront — clearly defining what the system is for, who it targets, and what data it will handle — before writing a single line of code.

---

_Generated from source code analysis_
