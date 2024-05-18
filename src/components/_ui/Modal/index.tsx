import * as Dialog from "@radix-ui/react-dialog";
import { XIcon } from "@heroicons/react/solid";
import { ReactNode } from "react";
import "./styles.css";

export default function Modal({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-20 DialogOverlay bg-background/50 backdrop-blur-sm" />
      <Dialog.Content className="lg:p-8 p-4 shadow fixed z-20 w-[95vw] max-w-md -translate-x-1/2 -translate-y-1/2 border rounded border-background DialogContent bg-backgroundSecondary left-1/2 top-1/2">
        <div className="relative flex items-center justify-center mb-4 text-gray-400">
          <Dialog.Title className="text-xl">{title}</Dialog.Title>
          <Dialog.Close
            className="absolute top-0 right-0 hover:text-gray-500"
            asChild
            aria-label="Close"
          >
            <button>
              <XIcon className="w-7 h-7" />
            </button>
          </Dialog.Close>
        </div>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
