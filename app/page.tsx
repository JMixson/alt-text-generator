'use client';
import { useState } from 'react';
import ImageUploadForm from '@/components/ImageUploadForm';
import AltText from '@/components/AltText';

export default function Page() {
  const [resultText, setResultText] = useState('');

  return (
    <>
      <ImageUploadForm onResult={setResultText} />
      <AltText result={resultText} />
    </>
  );
}
