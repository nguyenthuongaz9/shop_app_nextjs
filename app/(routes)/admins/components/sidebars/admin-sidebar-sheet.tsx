import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function AdminSidebarSheet() {
  return (
    <div className="w-full h-full md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent side="left" >
          <SheetHeader>
            <SheetTitle>
              <VisuallyHidden>Admin Sidebar</VisuallyHidden> 
            </SheetTitle>
          </SheetHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              side bar
            </div>
          </div>
          
        </SheetContent>
      </Sheet>

    </div>
  );
}
