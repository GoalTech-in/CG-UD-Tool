"use client";

import React from "react";
import { Upload } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface UploadSectionProps {
  file: File | null;
  setFile: (file: File | null) => void;
}

export default function UploadSection({ file, setFile }: UploadSectionProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" /> Upload File
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Input type="file" onChange={handleFileUpload} />
        {file && (
          <p className="mt-2 text-sm text-muted-foreground">
            Selected: {file.name}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
