'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldDescription,
  FieldError,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const formSchema = z.object({
  image: z.file().max(10_000_000, 'Max 10MB').mime(['image/png', 'image/jpeg']),
});

type formSchemaType = z.infer<typeof formSchema>;
type arrowPropType = () => void;
type ImageFormPropType = (result: string) => void;

function ImageUploadForm({
  onSubmitStart,
  onFirstChunk,
  onResult,
}: {
  onSubmitStart: arrowPropType;
  onFirstChunk: arrowPropType;
  onResult: ImageFormPropType;
}) {
  const [fileKey, setFileKey] = useState(0);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
    },
  });

  function formReset() {
    form.reset();
    setFileKey((key) => key + 1);
  }

  async function onSubmit(data: formSchemaType) {
    if (!data.image) return;
    onSubmitStart();

    toast.success('Image Submitted', { position: 'top-center' });

    const formData = new FormData();
    formData.append('image', data.image);
    formReset();

    const res = await fetch('/api/ai', {
      method: 'POST',
      body: formData,
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    let receivedFirstChunk = false;
    let text = '';

    while (true) {
      const { value, done } = await reader.read();

      if (done) {
        text += decoder.decode();
        onResult(text);
        break;
      }

      if (!receivedFirstChunk) {
        onFirstChunk();
        receivedFirstChunk = true;
      }

      text += decoder.decode(value, { stream: true });
      onResult(text);
    }
  }

  return (
    <Card className="w-xl">
      <CardHeader>
        <CardTitle>Image Uploader</CardTitle>
        <CardDescription>
          Upload an image to receive an alt tag description
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="image"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="picture">Image</FieldLabel>
                  <Input
                    key={fileKey}
                    type="file"
                    id="picture"
                    accept="image/png, image/jpeg"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                  />
                  <FieldDescription>
                    Select an image to upload.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field orientation="horizontal">
              <Button type="button" variant="outline" onClick={formReset}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}

export default ImageUploadForm;
