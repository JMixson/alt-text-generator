function AltText({ result }: { result: string }) {
  if (!result) return;

  return (
    <>
      <p>{result}</p>
    </>
  );
}

export default AltText;
