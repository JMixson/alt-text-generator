function AltText({ result }: { result: string }) {
  if (!result) {
    return (
      <p className="text-pretty">
        <em>No image has been selected yet.</em>
      </p>
    );
  }

  return <p className="text-pretty">{result}</p>;
}

export default AltText;
