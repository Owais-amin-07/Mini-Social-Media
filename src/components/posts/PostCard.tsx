"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

import type { Post } from "@/lib/data";
import { cn } from "@/lib/utils";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Comment } from "./Comment";
import { Textarea } from "../ui/textarea";
import { currentUser } from "@/lib/data";


export function PostCard({ post }: { post: Post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${post.user.username}`}>
            <Avatar className="h-11 w-11 border">
              <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
              <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </Link>
          <div className="grid gap-0.5">
            <Link href={`/profile/${post.user.username}`} className="font-semibold text-foreground hover:underline font-headline">
              {post.user.name}
            </Link>
            <p className="text-xs text-muted-foreground">
              @{post.user.username} &middot; {formatDistanceToNow(post.timestamp, { addSuffix: true })}
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Follow @{post.user.username}</DropdownMenuItem>
              <DropdownMenuItem>View profile</DropdownMenuItem>
              <DropdownMenuItem>Report post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-2">
        <p className="whitespace-pre-wrap">{post.content}</p>
        {post.imageUrl && (
          <div className="mt-4 relative aspect-video w-full overflow-hidden rounded-lg border">
            <Image
              src={post.imageUrl}
              alt="Post image"
              fill
              className="object-cover"
              data-ai-hint="post image"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <Collapsible open={isCommentsOpen} onOpenChange={setIsCommentsOpen} className="w-full">
            <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
                <button
                    onClick={handleLike}
                    className="flex items-center gap-1.5 hover:text-accent transition-colors"
                >
                    <Heart className={cn("h-5 w-5 transition-all", isLiked && "fill-accent text-accent")} />
                    <span>{likes.toLocaleString()}</span>
                </button>
                <CollapsibleTrigger asChild>
                    <button 
                    className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments.length.toLocaleString()}</span>
                    </button>
                </CollapsibleTrigger>
                <button className="flex items-center gap-1.5 hover:text-green-500 transition-colors">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                </button>
            </div>
            <CollapsibleContent className="w-full">
                <Separator className="my-4" />
                <div className="space-y-4">
                  {post.comments.map((comment) => (
                      <Comment key={comment.id} comment={comment} />
                  ))}
                </div>
                <div className="flex items-start gap-3 pt-4">
                    <Avatar className="h-8 w-8">
                    <AvatarImage src={currentUser.avatarUrl} />
                    <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                    <form>
                        <Textarea
                        placeholder="Write a comment..."
                        className="w-full rounded-lg bg-secondary min-h-[40px] focus-visible:ring-1 focus-visible:ring-primary ring-offset-0"
                        />
                        <div className="mt-2 flex justify-end">
                        <Button type="submit" size="sm" className="bg-primary hover:bg-primary/90">Comment</Button>
                        </div>
                    </form>
                    </div>
                </div>
            </CollapsibleContent>
        </Collapsible>
      </CardFooter>
    </Card>
  );
}
