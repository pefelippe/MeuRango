import { Card, CardTitle } from "@/components/ui/card";
import { MoveRight, Store } from "lucide-react";

function CardManageStore() {
  return (
    <Card className="h-[140px] rounded-xl flex w-full bg-gray-900 p-6 text-[#f8f8f8] flex-col items-center gap-2 justify-center">
      <CardTitle className="text-xl flex items-center gap-3 mx-auto">
        <Store className="h-8 w-8" />
        <p className="">Gerencie sua loja virtual</p>
        <MoveRight className="h-8 w-8" />
      </CardTitle>
    </Card>
  );
}

export default CardManageStore;
