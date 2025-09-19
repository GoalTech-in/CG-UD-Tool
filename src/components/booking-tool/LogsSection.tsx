"use client";

import React from "react";
import { FileText } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LogsSectionProps {
  logs: string[];
}

export default function LogsSection({ logs = [] }: LogsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" /> Logs
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-40 rounded-md border p-3 bg-muted font-mono text-sm">
          {logs.length === 0 ? (
            <p className="text-muted-foreground">No logs yet...</p>
          ) : (
            logs.map((log, i) => <div key={i}>{log}</div>)
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

