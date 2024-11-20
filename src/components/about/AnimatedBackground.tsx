// src/components/about/AnimatedBackground.tsx
export function AnimatedBackground() {
    return (
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent opacity-80" />
      </div>
    );
  }