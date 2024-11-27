import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

export const ServiceModalForm = ({
  modalState,
  handleCloseModal,
}: {
  modalState: { open: boolean; id: string };
  handleCloseModal: () => void;
}) => {
  return (
    <Dialog open={modalState.open} onOpenChange={handleCloseModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Service</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <div className="border-2 border-dashed rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex flex-col items-center gap-2 text-center relative">
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Upload source file or drag it here
                </p>
                <p className="text-xs text-muted-foreground">
                  Add a source file and get the source file could be SVG, PNG,
                  JPG archive etc.
                </p>
                <Button variant="secondary" size="sm" className="mt-2">
                  Browse
                </Button>
                <input type="file" className=" absolute inset-0 opacity-0" />
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="img_icon">Icon Image</Label>
            <Input id="img_icon" type="file" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="heading">Heading</Label>
            <Input id="heading" placeholder="Enter Heading" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter Description" />
          </div>

          <Button className="w-full" size="sm">
            Save
          </Button>

          <Button
            variant="ghost"
            className="w-full"
            size="sm"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
