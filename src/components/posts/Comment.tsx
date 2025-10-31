import type { Comment as CommentType } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

type CommentProps = {
  comment: CommentType;
};

export function Comment({ comment }: CommentProps) {
  return (
    <div className="flex items-start gap-3">
      <Link href={`/profile/${comment.user.username}`}>
        <Avatar className="h-8 w-8 border-2 border-background">
          <AvatarImage src={comment.user.avatarUrl} alt={comment.user.name} />
          <AvatarFallback>{comment.user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex-1">
        <div className="rounded-lg bg-secondary p-3 text-sm">
          <div className="flex items-baseline gap-2">
            <Link href={`/profile/${comment.user.username}`} className="font-semibold text-foreground hover:underline">
              {comment.user.name}
            </Link>
            <span className="text-xs text-muted-foreground">
              @{comment.user.username}
            </span>
          </div>
          <p className="mt-1">{comment.text}</p>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
        </p>
      </div>
    </div>
  );
}
