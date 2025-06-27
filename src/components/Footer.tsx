import React, { useState } from "react";
import Modal from "@/components/Modal";
import privacyPolicy from "@/data/privacy";
import disclaimer from "@/data/disclaimer";
import terms from "@/data/terms";

export default function Footer() {
  const [modal, setModal] = useState<null | "privacy" | "disclaimer" | "terms">(null);

  const getModalData = () => {
    switch (modal) {
      case "privacy":
        return { title: "Privacy Policy", content: privacyPolicy, file: "PrivacyPolicy.txt" };
      case "disclaimer":
        return { title: "Disclaimer", content: disclaimer, file: "Disclaimer.txt" };
      case "terms":
        return { title: "Terms & Conditions", content: terms, file: "TermsAndConditions.txt" };
      default:
        return null;
    }
  };

  const modalData = getModalData();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <a href="#home">
              <img
                src="../img/logo.png"
                style={{ width: "50px", height: "50px" }}
              ></img>
            </a>
            <a href="#home">
              <span className="text-2xl font-bold">GetOnlineZA</span>
            </a>
          </div>
          <p className="text-gray-400 mb-6">
            Helping small businesses get found online, one website at a time.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span>
              <a href="mailto:hello@getonlineza.co.za">
                hello@getonlineza.co.za
              </a>
            </span>
            <span>•</span>
            <span>
              <a href="tel:+27649884235">+27 64 988 4235</a>
            </span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
            <p>
              &copy; 2025 GetOnlineZA. Made with care for small businesses
              across South Africa.
            </p>
            <div className="space-x-4" style={{ marginTop: "15px" }}>
              <button
                onClick={() => setModal("privacy")}
                className="hover:text-blue-600"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModal("disclaimer")}
                className="hover:text-blue-600"
              >
                Disclaimer
              </button>
              <button
                onClick={() => setModal("terms")}
                className="hover:text-blue-600"
              >
                Terms & Conditions
              </button>
            </div>
            {modal && modalData && (
              <Modal
                isOpen={!!modal}
                onClose={() => setModal(null)}
                title={modalData.title}
                content={modalData.content}
                downloadName={modalData.file}
              />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
