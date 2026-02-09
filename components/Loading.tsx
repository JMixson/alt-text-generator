import { Item, ItemContent, ItemMedia, ItemTitle } from '@/components/ui/item';
import { Spinner } from '@/components/ui/spinner';

function Loading() {
  return (
    <div className="flex w-full flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing image...</ItemTitle>
        </ItemContent>
      </Item>
    </div>
  );
}

export default Loading;
