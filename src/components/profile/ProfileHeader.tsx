import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { User } from '@/lib/data';
import { currentUser } from '@/lib/data';

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  const isCurrentUser = user.id === currentUser.id;

  return (
    <Card className="overflow-hidden">
        <div className="relative h-32 md:h-48 bg-secondary">
          <Image 
            src={`https://picsum.photos/seed/${user.username}/1200/400`} 
            alt={`${user.name}'s cover photo`}
            fill
            className="object-cover"
            data-ai-hint="abstract background"
          />
        </div>
        <div className="p-4 sm:p-6">
          <div className="flex items-end -mt-16 sm:-mt-20">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 border-card ring-2 ring-border overflow-hidden">
                <Image 
                    src={user.avatarUrl} 
                    alt={user.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="ml-auto">
              {isCurrentUser ? (
                <Button variant="outline">Edit Profile</Button>
              ) : (
                <Button variant="default" className="bg-primary hover:bg-primary/90">Follow</Button>
              )}
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold font-headline">{user.name}</h1>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
            <p className="mt-2 text-base">{user.bio}</p>
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <span className="font-semibold">{user.following.toLocaleString()}</span>
              <span className="text-muted-foreground">Following</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">{user.followers.toLocaleString()}</span>
              <span className="text-muted-foreground">Followers</span>
            </div>
          </div>
        </div>
    </Card>
  );
}
