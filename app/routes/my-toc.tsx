import { cn } from '@/lib/cn';
import React from 'react';
import type {
  TOCProps,
  TOCPopoverProps,
  TOCProviderProps,
} from 'fumadocs-ui/layouts/docs/page/slots/toc';

// Create a context to pass toc data
const TOCContext = React.createContext<Array<any>>([]);

export function TOCProvider({ toc, children }: TOCProviderProps) {
  console.log('TOC Provider received:', toc);
  return (
    <TOCContext.Provider value={toc}>
      {children}
    </TOCContext.Provider>
  );
}

export function TOC({ container, header, footer }: TOCProps) {
  const toc = React.useContext(TOCContext);

  return (
    <div
      id="nd-toc"
      {...container}
      className={cn(
        'sticky top-12 h-[calc(100vh-3rem)] flex flex-col w-64 pe-4 pb-4 [grid-area:toc] max-xl:hidden overflow-y-auto',
        container?.className,
      )}
    >
      {header}
      <div className="text-sm font-semibold mb-3">On this page</div>
      <nav className="flex flex-col gap-2 text-sm text-fd-muted-foreground">
        {toc && toc.length > 0 ? (
          toc.map((item: any, idx: number) => (
            <a
              key={idx}
              href={item.url}
              className={cn(
                'hover:text-fd-foreground transition-colors px-3 py-1.5 rounded hover:bg-fd-accent/50 line-clamp-2',
                item.depth === 2 && 'pl-3',
                item.depth === 3 && 'pl-6',
                item.depth === 4 && 'pl-9',
              )}
            >
              {item.title}
            </a>
          ))
        ) : (
          <span className="text-xs italic text-fd-muted-foreground/60">No sections</span>
        )}
      </nav>
      {footer}
    </div>
  );
}

export function TOCPopover({ container, trigger, content, header, footer }: TOCPopoverProps) {
  const toc = React.useContext(TOCContext);

  return (
    <div {...container} className="flex md:hidden">
      <button
        {...trigger}
        className="px-3 py-1.5 text-sm rounded-md bg-fd-secondary hover:bg-fd-secondary/80 transition-colors"
      >
        On this page
      </button>
      <nav
        {...content}
        className="absolute top-full right-0 mt-2 bg-fd-card border rounded-lg shadow-lg p-3 w-56 max-h-96 overflow-y-auto"
      >
        {toc && toc.length > 0 ? (
          toc.map((item: any, idx: number) => (
            <a
              key={idx}
              href={item.url}
              className={cn(
                'block hover:text-fd-foreground transition-colors px-2 py-1 rounded text-sm text-fd-muted-foreground hover:bg-fd-accent/50 mb-1',
                item.depth > 2 && 'pl-4',
                item.depth > 3 && 'pl-8',
              )}
            >
              {item.title}
            </a>
          ))
        ) : (
          <span className="text-xs italic text-fd-muted-foreground/60">No sections</span>
        )}
      </nav>
    </div>
  );
}