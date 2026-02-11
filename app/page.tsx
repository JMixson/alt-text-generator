'use client';
import { useState } from 'react';
import ImageUploadForm from '@/components/ImageUploadForm';
import AltText from '@/components/AltText';
import Loading from '@/components/Loading';

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultText, setResultText] = useState('');

  return (
    <div className="my-5 max-w-xl">
      <h1 className="mb-5 text-center text-4xl font-bold">
        Image Alt Tag Generator
      </h1>
      <ImageUploadForm
        isLoading={isLoading}
        onSubmitStart={() => setIsLoading(true)}
        onFirstChunk={() => setIsLoading(false)}
        onResult={setResultText}
      />

      <h2 className="my-5 text-2xl font-bold">Alt Text:</h2>
      {isLoading ? <Loading /> : <AltText result={resultText} />}
    </div>
  );
}
