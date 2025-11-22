export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-serif font-bold mb-2">Oxford's Religious History Walking Tour</h3>
          <p className="text-sm opacity-80 mb-4">
            An audio tour experience through a thousand years of Christian heritage
          </p>
          <p className="text-xs opacity-60">
            Available on VoiceMap • Self-guided • GPS-triggered narration
          </p>
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="text-xs opacity-60">
              © {new Date().getFullYear()} Oxford Christian History Tour. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
