
// src/components/blog/ShareButtons.tsx
export function ShareButtons({ orientation = "horizontal" }: { orientation?: "horizontal" | "vertical" }) {
    const buttons = [
      { icon: "🔗", label: "Copy Link" },
      { icon: "𝕏", label: "Share on X" },
      { icon: "in", label: "Share on LinkedIn" }
    ];
  
    return (
      <div className={`flex ${orientation === "vertical" ? "flex-col" : ""} gap-4`}>
        {buttons.map((button) => (
          <button
            key={button.label}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <span>{button.icon}</span>
            <span className="text-sm">{button.label}</span>
          </button>
        ))}
      </div>
    );
  }