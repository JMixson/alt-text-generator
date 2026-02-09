'use client';
import { useState } from 'react';
import { CheckIcon, CopyIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CopyButton = ({
  className,
  text,
}: React.ComponentProps<'div'> & { text: string }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant="outline"
      className="hover:bg-primary/10 relative disabled:opacity-100"
      onClick={handleCopy}
      disabled={copied}
    >
      <span
        className={cn(
          'transition-all',
          copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        )}
      >
        <CheckIcon className="stroke-green-600 dark:stroke-green-400" />
      </span>
      <span
        className={cn(
          'absolute transition-all',
          copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100',
          className,
        )}
      >
        <CopyIcon />
      </span>
    </Button>
  );
};

export default CopyButton;
