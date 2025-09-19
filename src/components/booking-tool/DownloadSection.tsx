"use client";

import React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface DownloadSectionProps {
  loading: boolean;
}

export default function DownloadSection({ loading }: DownloadSectionProps) {
  const downloadReport = () => {
    window.open("/api/download", "_blank"); // replace with your endpoint
  };

  return (
    <Card>
      <CardContent className="flex justify-center">
        <Button onClick={downloadReport} disabled={loading}>
          <Download className="w-4 h-4 mr-2" /> Download Report
        </Button>
      </CardContent>
    </Card>
  );
}
