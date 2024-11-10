# ✈️ Flight Academy App

Welcome to the Flight-Academy application repository, built using [SST](sst.dev) (Serverless Stack)! This repository houses the entire ecosystem of our flight school management application, enabling centralised development, testing, and deployment (WIP).

## 🗂️ Structure

This repository contains all core services and applications in the flight school platform, including:

    /packages: Core, Backend, Frontend & Lambda Functions
        Core: Domains & relevant logic such as: students, instructors, schedules, and billing...
        Web: Primary portal for tracking progress and scheduling. Interface for instructors to manage classes, log hours, and view student progress.
    /infra: SST-based infrastructure-as-code for provisioning AWS resources.
        Database: Serverlesss RDS Database configuration.
        API Services: API configuration.

## 🚀 Getting Started

Install dependencies:

```
npm i
```

Start the SST development environment:

```
sst dev
```

This will run the application locally with live AWS Lambda emulation.

Deploy to AWS:

   npm sst deploy

Deploys the entire stack to your AWS account using SST.

🛠️ Tech Stack

- SST: Serverless framework for managing AWS resources (v3)
- AWS Lambda, RDS, S3: Core backend services
- Astro & Svelte: Frontend framework for portals and dashboard
- REST: API layer for communication between services

📫 Contributing

Please review our CONTRIBUTING.md guide before submitting a PR.

Thank you for contributing to the Flight Academy platform! Together, we’re building the future of flight school management.