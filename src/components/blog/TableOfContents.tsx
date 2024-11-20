
// src/components/blog/TableOfContents.tsx
export function TableOfContents() {
    return (
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
        <nav className="space-y-2">
          <a href="#getting-started" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
            Getting Started
          </a>
          <a href="#advanced-concepts" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
            Advanced Concepts
          </a>
          {/* Add more TOC items */}
        </nav>
      </div>
    );
  }