import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import InfoNote from "../components/infoNote";
import SignatureBox from "../components/signatureBox";
import TimelineSide from "../components/timelineSide";

export default function Layout() {
  const handleSavePdf = async () => {
    const element = document.getElementById("info-guest");
    if (!element) {
      alert("Elemento #info-guest não encontrado");
      return;
    }

    const canvas = await html2canvas(element, { scale: 2 });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("info-guest.pdf");
  };

  return (
    <div className="min-h-screen w-full h-full sm:flex p-2 items-center flex-start justify-center bg-gray-100">
      <div className="sm:w-1/2">
        <TimelineSide />
      </div>

      <div
        id="info-guest"
        className="sm:w-1/2 bg-white p-4 rounded shadow-md"
      >
        <InfoNote />
        <SignatureBox />
      </div>

      <button
        onClick={handleSavePdf}
        className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded shadow-lg"
      >
        Salvar InfoGuest em PDF
      </button>
    </div>
  );
}
