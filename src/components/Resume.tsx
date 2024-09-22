"use client";

import { useResizeObserver } from "@wojtekmaj/react-hooks";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { useCallback, useEffect, useRef, useState } from "react";
import { Document, pdfjs, Page as ReactPdfPage } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./Resume.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

export default function Resume({
  file,
  maxWidth,
}: {
  file: string;
  maxWidth: number;
}) {
  const [numPages, setNumPages] = useState<number>(0);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(400);
  const [documentHeight, setDocumentHeight] = useState<number>(400);

  const handleSetContainerWidth = useCallback((width: number) => {
    setContainerWidth(width);
    setDocumentHeight(Math.floor(width * (11 / 8.5)));
  }, []);

  const debounce = useCallback(
    (fn: typeof handleSetContainerWidth, delay: number) => {
      let timeoutId: NodeJS.Timeout;

      return (...args: Parameters<typeof handleSetContainerWidth>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    },
    [],
  );

  const debounceSetContainerWidth = useRef(
    debounce(handleSetContainerWidth, 100),
  );

  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: PDFDocumentProxy) => {
      setNumPages(numPages);
    },
    [],
  );

  useEffect(() => {
    debounceSetContainerWidth.current = debounce(handleSetContainerWidth, 100);
  }, [debounce, handleSetContainerWidth]);

  const resizeObserverCallback: ResizeObserverCallback = useCallback(
    (entries) => {
      const [entry] = entries;

      if (entry) {
        debounceSetContainerWidth.current(entry.contentRect.width);
      }
    },
    [],
  );

  useResizeObserver(containerRef, {}, resizeObserverCallback);

  return (
    <div className="PDF__container">
      <div className="PDF__container__document xs:m-0" ref={setContainerRef}>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (_, numPage) => (
            <ReactPdfPage
              canvasBackground="#ffffff"
              className="min-w-fit border border-primary-500 bg-primary-500"
              key={`page_${numPage + 1}`}
              pageNumber={numPage + 1}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
              height={documentHeight}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
