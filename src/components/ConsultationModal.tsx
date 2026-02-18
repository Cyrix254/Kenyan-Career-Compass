import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "./ui/dialog";
import { MessageCircle, User } from "lucide-react";
import { admins } from "@/data/admins";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
    courseName: string;
}

const ConsultationModal = ({ isOpen, onClose, courseName }: ConsultationModalProps) => {
    const handleContact = (whatsappNumber: string) => {
        const message = `Hi, I need guidance regarding the course: ${courseName}.`;
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Seek Guidance</DialogTitle>
                    <DialogDescription>
                        Select an admin to contact on WhatsApp for {courseName}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {admins.map((admin) => (
                        <div
                            key={admin.id}
                            className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <User className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium leading-none">{admin.name}</p>
                                    <p className="text-sm text-muted-foreground">{admin.role}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleContact(admin.whatsappNumber)}
                                className="inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                            >
                                <MessageCircle size={16} />
                                Chat
                            </button>
                        </div>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConsultationModal;
