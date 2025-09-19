"use client";

import React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ProcessSectionProps {
  logs: string[];
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProcessSection({ logs, setLogs, loading, setLoading }: ProcessSectionProps) {
  const processData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/process"); // replace with your endpoint
      const data = await res.json();
      setLogs((prev) => [...prev, `Processed data: ${data.mismatches} mismatches`]);
    } catch {
      setLogs((prev) => [...prev, "Error processing data"]);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Play className="w-5 h-5" /> Process & Compare
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={processData} disabled={loading}>
          {loading ? "Processing..." : "Start Process"}
        </Button>
      </CardContent>
    </Card>
  );
}
