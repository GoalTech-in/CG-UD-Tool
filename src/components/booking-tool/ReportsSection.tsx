"use client";

import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ReportsSectionProps {
  logs: string[];
  setLogs: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReportsSection({ logs, setLogs, loading, setLoading }: ReportsSectionProps) {
  const fetchReports = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reports"); // replace with your endpoint
      const data = await res.json();
      setLogs((prev) => [...prev, `Fetched ${data.count} reports`]);
    } catch {
      setLogs((prev) => [...prev, "Error fetching reports"]);
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="w-5 h-5" /> Fetch Email Reports
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={fetchReports} disabled={loading}>
          {loading ? "Loading..." : "Fetch Reports"}
        </Button>
      </CardContent>
    </Card>
  );
}
