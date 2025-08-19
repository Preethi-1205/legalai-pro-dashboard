import React, { useRef, useState } from "react";
import SectionCard from "./SectionCard";
import {
  Eye,
  Pencil,
  Download,
  Trash2,
  File,
  FileText,
  FileSpreadsheet,
  Upload,
} from "lucide-react";
import { documents as seedDocs } from "../data/mockData";

const typeFrom = (filename) => {
  const ext = filename.split(".").pop()?.toLowerCase();
  if (ext === "pdf") return "pdf";
  if (ext === "xlsx" || ext === "xls") return "xls";
  if (ext === "doc" || ext === "docx") return "doc";
  return "file";
};

const iconFor = (type) => {
  if (type === "pdf") return <FileText className="w-4 h-4" />;
  if (type === "xls") return <FileSpreadsheet className="w-4 h-4" />;
  return <File className="w-4 h-4" />;
};

const fmtSize = (bytes) => `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
const today = () =>
  new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export default function Documents() {
  const [docs, setDocs] = useState(seedDocs);
  const [files, setFiles] = useState({});
  const inputRef = useRef(null);

  const onUploadClick = () => inputRef.current?.click();

  const onFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const id = Date.now();
    const type = typeFrom(file.name);
    const objUrl = URL.createObjectURL(file);
    setFiles((m) => ({ ...m, [id]: { file, url: objUrl } }));
    setDocs((prev) => [
      ...prev,
      {
        id,
        type,
        size: fmtSize(file.size),
        name: file.name,
        subtitle: "Uploaded file",
        modified: today(),
        url: objUrl,
      },
    ]);
    e.target.value = "";
  };

  const removeDoc = (id) => {
    const f = files[id];
    if (f?.url) URL.revokeObjectURL(f.url);
    setDocs((prev) => prev.filter((d) => d.id !== id));
    setFiles((m) => {
      const copy = { ...m };
      delete copy[id];
      return copy;
    });
  };

  // 🟢 Handlers
  const handleView = (doc) => alert(`👁 Viewing: ${doc.name}`);
  const handleEdit = (doc) => alert(`✏️ Editing: ${doc.name}`);

  return (
    <SectionCard
      title="Document Management"
      action={
        <button className="btn btn-primary" onClick={onUploadClick}>
          <Upload className="w-4 h-4" /> Upload
        </button>
      }
    >
      <input ref={inputRef} type="file" className="hidden" onChange={onFileChange} />
      <div className="space-y-3">
        {docs.map((d) => (
          <div key={d.id} className="flex items-center justify-between border rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded-lg">{iconFor(d.type)}</div>
              <div>
                <div className="font-medium">{d.name}</div>
                <div className="text-xs text-slate-500">
                  {d.subtitle} • {d.size} • {d.modified}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn" onClick={() => handleView(d)}>
                <Eye className="w-4 h-4" />
              </button>
              <button className="btn" onClick={() => handleEdit(d)}>
                <Pencil className="w-4 h-4" />
              </button>
              {d.url ? (
                <a className="btn" href={d.url} download={d.name}>
                  <Download className="w-4 h-4" />
                </a>
              ) : (
                <button className="btn" disabled>
                  <Download className="w-4 h-4" />
                </button>
              )}
              <button className="btn btn-danger" onClick={() => removeDoc(d.id)}>
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        {docs.length === 0 && (
          <div className="text-sm text-slate-500">No documents yet.</div>
        )}
      </div>
    </SectionCard>
  );
}
