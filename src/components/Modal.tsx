// src/components/Modal.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  downloadName: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  content,
  downloadName,
}: ModalProps) {
  const downloadFile = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = downloadName;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="fixed inset-0 z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="ease-in duration-150"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <Dialog.Panel className="max-w-2xl w-full bg-white p-6 rounded-xl shadow-xl overflow-y-auto max-h-[90vh]">
              <Dialog.Title className="text-xl font-semibold mb-4">
                {title}
              </Dialog.Title>
              <div className="text-sm whitespace-pre-wrap text-gray-700 mb-4">
                {content}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={onClose}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Close
                </button>
                <button
                  onClick={downloadFile}
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  Download
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
