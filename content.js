/* =========================================================
   PORTFOLIO CONTENT
   Edit the arrays below to add certifications or projects.
   No other file needs to change.
   ========================================================= */

/**
 * CERTIFICATIONS
 * Add a new object to this array for each certificate.
 * Fields: title, issuer, date
 */
const certifications = [
  {
    title: "Statistical Analysis by Using R",
    issuer: "Mira Academy — Certificate of Participation",
    date: "July 2026"
  },
  {
    title: "ISO 9001:2015 Quality Management System",
    issuer: "IFAQT",
    date: "April 2019"
  },
  {
    title: "Application of Good Laboratory Practices in Quality Control Laboratory",
    issuer: "WANYLAB",
    date: "April 2019"
  }
  // Add future certifications here, e.g.:
  // { title: "...", issuer: "...", date: "..." },
];

/**
 * PROJECTS
 * Add a new object to this array for each project.
 * Fields:
 *   title       - project name
 *   category    - short label, e.g. "R", "Python", "Bioinformatics"
 *   description - short description
 *   objective   - scientific objective (optional)
 *   tools       - string of tools/technologies (optional)
 *   repo        - GitHub repository URL (optional)
 *   demo        - live demo URL (optional)
 *   placeholder - true if this is a "coming soon" card with no content yet
 */
const projects = [
  {
    title: "R projects",
    category: "R",
    description: "Applied data analysis and statistics work in R — to be added as projects are completed.",
    placeholder: true
  },
  {
    title: "Python projects",
    category: "Python",
    description: "Python-based analysis projects — currently being developed.",
    placeholder: true
  },
  {
    title: "Bioinformatics projects",
    category: "Bioinformatics",
    description: "Genomic and biological data analysis projects — coming soon.",
    placeholder: true
  },
  {
    title: "Data analysis projects",
    category: "Data analysis",
    description: "Exploratory and applied data analysis work — coming soon.",
    placeholder: true
  },
  {
    title: "Computational drug discovery",
    category: "Drug discovery",
    description: "Computational approaches to drug design and discovery — coming soon.",
    placeholder: true
  }
  // Add a completed project here, e.g.:
  // {
  //   title: "Project name",
  //   category: "R",
  //   description: "Short description of what it does.",
  //   objective: "Scientific objective of the project.",
  //   tools: "R, ggplot2, dplyr",
  //   repo: "https://github.com/username/repo-name",
  //   demo: "",
  //   placeholder: false
  // },
];
