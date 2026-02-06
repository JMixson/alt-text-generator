import { generateText } from 'ai';

export async function POST(req: Request) {
  const data = await req.formData();
  const imageFile = data.get('image') as File;

  const bytes = await imageFile.arrayBuffer();
  const image = new Uint8Array(bytes);

  const result = await generateText({
    model: 'google/gemini-3-flash',
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'Describe the image. Explain in a short sentence with a max of 150 characters.',
          },
          { type: 'image', image },
        ],
      },
    ],
  });

  return Response.json(result.text);
}
