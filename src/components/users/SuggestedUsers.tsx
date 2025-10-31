import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { suggestedUsers } from "@/lib/data";

export function SuggestedUsers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-lg">Who to follow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between gap-3">
            <Link href={`/profile/${user.username}`} className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5">
                <p className="font-semibold text-sm hover:underline">{user.name}</p>
                <p className="text-xs text-muted-foreground">@{user.username}</p>
              </div>
            </Link>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Follow
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
