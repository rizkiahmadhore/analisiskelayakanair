interface WarningDialogProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function WarningDialog({
  isOpen,
  title,
  message,
  onClose,
}: WarningDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-[#11112A] border border-cyan-400 neon-flicker-slide rounded-xl px-6 py-5 max-w-md mx-4">
        <h2 className="text-lg font-semibold mb-2 text-red-400">{title}</h2>

        <p className="text-sm text-gray-300 mb-4">{message}</p>

        <div className="flex justify-end">
          <button
            onClick={() => onClose()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
