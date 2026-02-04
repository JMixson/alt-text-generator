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

function ImageUploadForm() {
  const [fileKey, setFileKey] = useState(0);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
    },
  });

  function onSubmit(data: formSchemaType) {
    toast.success('Image Submitted', { position: 'top-center' });
    console.log(data.image?.name);
    form.reset();
    setFileKey(key => key + 1);
  }

  return (
    <Card className="w-1/3">
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
                    onChange={e => field.onChange(e.target.files?.[0])}
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
              <Button type="button" variant="outline">
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
