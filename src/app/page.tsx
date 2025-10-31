import { CreatePostForm } from "@/components/posts/CreatePostForm";
import { PostCard } from "@/components/posts/PostCard";
import { SuggestedUsers } from "@/components/users/SuggestedUsers";
import { posts } from "@/lib/data";

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <CreatePostForm />
          <div className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
        <aside className="hidden lg:block space-y-6">
          <SuggestedUsers />
        </aside>
      </div>
    </div>
  );
}
