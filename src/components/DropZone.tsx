// Source: https://blog.alexdevero.com/react-file-dropzone/

import React, {
  memo,
  PropsWithChildren,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";

// Define interface for component props/api
export interface DropZoneProps {
  onDragStateChange?: (isDragActive: boolean) => void;
  onDrag?: () => void;
  onDragIn?: () => void;
  onDragOut?: () => void;
  onDrop?: () => void;
  onFilesDrop?: (files: File[]) => void;
}

export const DropZone = memo((props: PropsWithChildren<DropZoneProps>) => {
  const {
    onDragStateChange,
    onDrag,
    onDragIn,
    onDragOut,
    onDrop,
    onFilesDrop,
  } = props;

  // State to keep track when dropzone is active/inactive
  const [isDragActive, setIsDragActive] = useState(false);

  // Ref for dropZone element
  const dropZoneRef = useRef<HTMLDivElement>(null);

  // helper method to map file list to of files
  const mapFileListToArray = (files: FileList) => {
    const fileArray = [];

    for (let i = 0; i < files.length; i++) {
      fileArray.push(files[i]);
    }

    return fileArray;
  };

  // ...
  // Handler for dragIn event
  const handleDragIn = useCallback(
    (e) => {
      // prevent default events
      e.preventDefault();
      e.stopPropagation();

      // invoke any optional method passed as "onDragIn()"
      onDragIn?.();

      // check if there are files dragging over the dropZone
      if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
        // if so, set active state to "true"
        setIsDragActive(true);
      }
    },
    [onDragIn]
  );

  // handler for dragOut event
  const handleDragOut = useCallback(
    (e) => {
      // prevent default events
      e.preventDefault();
      e.stopPropagation();

      // invoke any optional method passed as "onDragOut()"
      onDragOut?.();

      // set active state to "false"
      setIsDragActive(false);
    },
    [onDragOut]
  );

  // handler for onDrag (over) event
  const handleDrag = useCallback(
    (e) => {
      // prevent default events
      e.preventDefault();
      e.stopPropagation();

      // invoke any optional method passed as "onDrag()"
      onDrag?.();

      // set active state to "true" if it is not active
      if (!isDragActive) {
        setIsDragActive(true);
      }
    },
    [isDragActive, onDrag]
  );

  // handler for onDrop event
  const handleDrop = useCallback(
    (e) => {
      // prevent default events
      e.preventDefault();
      e.stopPropagation();

      // set active state to "false"
      setIsDragActive(false);

      // invoke any optional method passed as "onDrop()"
      onDrop?.();

      // check if there are files dragging over the dropZone
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        // if so, convert these files to an array
        const files = mapFileListToArray(e.dataTransfer.files);

        // invoke any optional method passed as "onFilesDrop()", passing the array of files as an argument
        onFilesDrop?.(files);

        // clear transfer data to prepare dropZone for another use
        e.dataTransfer.clearData();
      }
    },
    [onDrop, onFilesDrop]
  );

  // observe active state and emit changes
  useEffect(() => {
    onDragStateChange?.(isDragActive);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragActive]);

  // attach listeners to dropZone on mount
  useEffect(() => {
    const tempZoneRef = dropZoneRef?.current;

    if (tempZoneRef) {
      tempZoneRef.addEventListener("dragenter", handleDragIn);
      tempZoneRef.addEventListener("dragover", handleDrag);
      tempZoneRef.addEventListener("dragleave", handleDragOut);
      tempZoneRef.addEventListener("drop", handleDrop);
    }

    // remove listeners from dropZone on unmount
    return () => {
      tempZoneRef?.removeEventListener("dragenter", handleDragIn);
      tempZoneRef?.removeEventListener("dragover", handleDrag);
      tempZoneRef?.removeEventListener("dragleave", handleDragOut);
      tempZoneRef?.removeEventListener("drop", handleDrop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // ...

  // Render div with ref and children
  return <div ref={dropZoneRef}>{props.children}</div>;
});

DropZone.displayName = "DropZone";
