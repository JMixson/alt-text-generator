import CopyButton from './ui/copy-button';

function AltText({ result }: { result: string }) {
  if (!result) {
    return (
      <p className="text-pretty">
        <em>No image has been selected yet.</em>
      </p>
    );
  }

  return (
    <div className="bg-muted/50 flex gap-3.5 rounded-lg border-transparent px-4 py-3.5">
      <p className="text-pretty">{result}</p>
      <CopyButton text={result} />
    </div>
  );
}

export default AltText;
