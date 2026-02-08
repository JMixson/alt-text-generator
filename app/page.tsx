'use client';
import { useState } from 'react';
import ImageUploadForm from '@/components/ImageUploadForm';
import AltText from '@/components/AltText';

export default function Page() {
  const [resultText, setResultText] = useState('');

  return (
    <div className="my-5 max-w-xl">
      <h1 className="mb-5 text-center text-4xl font-bold">
        Image Alt Tag Generator
      </h1>
      <ImageUploadForm onResult={setResultText} />

      <h2 className="my-5 text-2xl font-bold">Alt Text:</h2>
      <AltText result={resultText} />
    </div>
  );
}
