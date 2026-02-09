import CopyButton from './ui/copy-button';

function AltText({ result }: { result: string }) {
  return (
    <div className="bg-muted/50 flex gap-3.5 rounded-lg border-transparent px-4 py-3.5">
      {result ? (
        <>
          <p className="text-pretty">{result}</p>
          <CopyButton text={result} />
        </>
      ) : (
        <p className="text-pretty">
          <em>No image has been selected yet.</em>
        </p>
      )}
    </div>
  );
}

export default AltText;
