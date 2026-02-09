# Alt-Gen - Image Alt Tag Generator

A web application that uses AI to automatically generate descriptive alt text for images. Built with Next.js and the Vercel AI SDK and powered by Google Gemini AI.

## Features

- Upload images in PNG, JPG, or JPEG format up to 10MB
- AI-powered alt text generation using Google Gemini Flash
- Real-time streaming of generated descriptions
- Form validation with error handling
- Toast notifications for user feedback

## Built With

[![Next.js]][Nextjs-url] [![Vite]][Vite-url] [![Typscript][Typscript]][Typscript-url] [![Tailwindcss][tailwindcss]][tailwindcss-url] [![Vercel]][Vercel-url] [![Google]][Google-url] [![RHF]][RHF-url] [![Zod]][Zod-url] [![Shadcn]][Shadcn-url]
[![Zod]][Zod-url]

- **REACT** - JavaScript library for building user interfaces
- **NEXT.JS** - React framework for production
- **TYPESCRIPT** - Typed superset of JavaScript
- **TAILWINDCSS** - Utility-first CSS framework
- **VERCEL AI SDK** - AI integration toolkit
- **GOOGLE GEMINI** - AI model for image analysis
- **REACT HOOK FORM** - Form validation library
- **ZOD** - Schema validation
- **SHADCN/UI** - UI component library
- **SONNER** - Toast notification library

## Installation

1. Clone the repo

```bash
git clone https://github.com/yourusername/alt-gen.git
cd alt-gen
```

2. Install packages

```bash
npm install
# or
yarn add
# or
pnpm install
# or
bun install
```

3. Create a `.env.local` file in the root directory and add your Vercel AI Gateway API key:

```env
AI_GATEWAY_API_KEY=your_api_key_here
```

To get an API key, visit the [Vercel AI Gateway documentation](https://sdk.vercel.ai/docs).

## Usage

To start the application, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the application.

1. Click the file input to select an image
2. Choose a PNG, JPG, or JPEG image up to 10MB
3. Click Submit
4. Wait for the AI to generate the alt text
5. Copy the generated description for use in your web projects

## Environment Variables

The application requires the following environment variable:

- `AI_GATEWAY_API_KEY` - Your Vercel AI Gateway API key for accessing Google Gemini AI

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Vercel AI SDK](https://sdk.vercel.ai/docs) - learn about integrating AI models
- [React Hook Form](https://react-hook-form.com/) - performant form validation
- [Tailwind CSS](https://tailwindcss.com/) - utility-first CSS framework

<!-- MARKDOWN LINKS & IMAGES -->

[Next.js]: https://img.shields.io/badge/-Next.JS-20232A?style=for-the-badge&logo=next.js&logoColor=ffffff
[Nextjs-url]: https://nextjs.org/docs
[Vite]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite
[Vite-url]: https://vitejs.dev/
[Typscript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=3178c6
[Typscript-url]: https://www.typescriptlang.org
[Tailwindcss]: https://img.shields.io/badge/Tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=20c4ff
[Tailwindcss-url]: https://tailwindcss.com
[Vercel]: https://img.shields.io/badge/-Vercel-20232A?style=for-the-badge&logo=vercel
[Vercel-url]: https://sdk.vercel.ai/docs
[Zod]: https://img.shields.io/badge/-Zod-20232A?style=for-the-badge&logo=zod
[Zod-url]: https://zod.dev/
[Google]: https://img.shields.io/badge/-Google-20232A?style=for-the-badge&logo=google
[Google-url]: https://ai.google.dev/gemini-api/docs
[RHF]: https://img.shields.io/badge/-RHF-20232A?style=for-the-badge&logo=react-hook-form
[RHF-url]: https://react-hook-form.com/
[Shadcn]: https://img.shields.io/badge/-shadcnui-20232A?style=for-the-badge&logo=shadcnui
[Shadcn-url]: https://ui.shadcn.com/
