// src/components/blog/AuthorCard.tsx
interface AuthorCardProps {
  author: {
    name: string;
    avatar: string;
    role: string;
  }
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h3 className="text-xl font-bold">{author.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{author.role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400">
        A passionate web developer who loves creating beautiful and functional web applications.
        Sharing knowledge and experiences through writing.
      </p>
    </div>
  );
}