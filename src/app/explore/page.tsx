import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";

export default function ExplorePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-4">
        <Card className="w-full max-w-lg text-center">
            <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <Compass className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-headline">Explore</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    This page is under construction. Come back soon to discover new content and trends!
                </p>
            </CardContent>
        </Card>
    </div>
  );
}
