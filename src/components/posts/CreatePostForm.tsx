"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { currentUser } from "@/lib/data";
import { Image as ImageIcon, Video, Smile } from "lucide-react";

export function CreatePostForm() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <form>
              <Textarea
                placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
                className="w-full min-h-[80px] border-0 focus-visible:ring-0 ring-offset-0 p-2 text-base"
              />
              <div className="mt-2 flex items-center justify-between">
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    <span className="sr-only">Add image</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-5 w-5 text-green-500" />
                     <span className="sr-only">Add video</span>
                  </Button>
                   <Button variant="ghost" size="icon">
                    <Smile className="h-5 w-5 text-accent" />
                     <span className="sr-only">Add emoji</span>
                  </Button>
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90">Post</Button>
              </div>
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
