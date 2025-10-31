import { allUsers, posts as allPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostCard } from '@/components/posts/PostCard';
import { Heart, MessageCircle } from 'lucide-react';

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = allUsers.find((u) => u.username === params.username);
  
  if (!user) {
    notFound();
  }

  const userPosts = allPosts.filter((p) => p.user.id === user.id);

  return (
    <div className="container mx-auto max-w-4xl py-6">
      <div className="space-y-6">
        <ProfileHeader user={user} />
        
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
          </TabsList>
          <TabsContent value="posts" className="mt-6 space-y-6">
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
             {userPosts.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg font-medium">No posts yet</p>
                    <p>When {user.name.split(' ')[0]} posts, they'll show up here.</p>
                </div>
            )}
          </TabsContent>
          <TabsContent value="media" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {userPosts.filter(p => p.imageUrl).map(post => (
                <Card key={post.id} className="group relative aspect-square overflow-hidden">
                  <Image src={post.imageUrl!} alt="Post media" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                       <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments.length}</span>
                      </div>
                  </div>
                </Card>
              ))}
               {userPosts.filter(p => p.imageUrl).length === 0 && (
                <div className="col-span-full text-center py-12 text-muted-foreground">
                    <p className="text-lg font-medium">No media yet</p>
                    <p>When {user.name.split(' ')[0]} posts photos or videos, they'll show up here.</p>
                </div>
              )}
            </div>
          </TabsContent>
           <TabsContent value="likes" className="mt-6">
                <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg font-medium">No likes yet</p>
                    <p>When {user.name.split(' ')[0]} likes posts, they'll show up here.</p>
                </div>
          </TabsContent>
        </Tabs>

      </div>
    </div>
  );
}
