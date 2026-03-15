# Year 3 Semester 1 Data Science Study Hub

Interactive React study app for **SLIIT Year 3 Semester 1 Data Science** with both:

- **TPSM** (Theory & Practices in Statistical Modelling)
- **PAF** (Programming Applications and Frameworks)

## What Is Included

- Module home screen with **TPSM + PAF + File Tools**
- TPSM lecture MCQs, past-paper MCQs, study guides, and original lecture PDFs
- PAF lecture MCQs, study guides, and original lecture PDFs
- Instant answer feedback + explanations
- Progress tracking and end-of-quiz review
- Theme selector

## Run Locally

```bash
npm install
npm start
```

Open http://localhost:3000

## Production Build

```bash
npm run build
```

## Key Structure

```text
src/
	App.js
	components/
		Quiz.js
		StudyGuide.js
		PdfViewer.js
		PafFilesViewer.js
		FileTools.js
	data/
		# TPSM
		note01.js ... note08.js
		pastpapers.js
		studyGuides.js
		mockexam2026.js
		# PAF
		pafLectures.js
		pafStudyGuides.js

public/
	modules/
		tpsm/pdfs/
		paf/pdfs/
```

## Notes

- PAF original lectures are converted to PDF and open inside the app viewer.
- The project uses a single root app.
