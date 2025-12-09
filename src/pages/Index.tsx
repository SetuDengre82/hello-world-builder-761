const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center">
        <pre className="text-foreground text-xs sm:text-sm md:text-base mb-8 opacity-50">
          {"<!DOCTYPE html>"}
        </pre>
        
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold text-foreground tracking-tighter text-glitch">
          hello<span className="text-accent">_</span>
        </h1>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span className="text-accent">&gt;</span>
          <span>world</span>
          <span className="cursor-blink text-accent">|</span>
        </div>

        <div className="mt-16 border border-border p-4 max-w-md mx-auto">
          <code className="text-xs text-muted-foreground block text-left">
            <span className="text-accent">{"<"}</span>
            <span className="text-foreground">html</span>
            <span className="text-accent">{">"}</span>
            <br />
            <span className="ml-4 text-accent">{"<"}</span>
            <span className="text-foreground">body</span>
            <span className="text-accent">{">"}</span>
            <br />
            <span className="ml-8 text-foreground">hello, world</span>
            <br />
            <span className="ml-4 text-accent">{"</"}</span>
            <span className="text-foreground">body</span>
            <span className="text-accent">{">"}</span>
            <br />
            <span className="text-accent">{"</"}</span>
            <span className="text-foreground">html</span>
            <span className="text-accent">{">"}</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Index;
