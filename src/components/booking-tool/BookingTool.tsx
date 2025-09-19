"use client";

import  ReportsSection  from "./ReportsSection";
import  UploadSection  from "./UploadSection";
import  ProcessSection  from "./ProcessSection";
import LogsSection  from "./LogsSection";
import DownloadSection  from "./DownloadSection";

export function BookingTool() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Booking Tool</h1>

      {/* Step 1: Email Reports */}
      <ReportsSection />

      {/* Step 2: File Upload */}
      <UploadSection />

      {/* Step 3: Process & Logs */}
      <ProcessSection />
      <LogsSection />

      {/* Step 4: Download */}
      <DownloadSection />
    </div>
  );
}
