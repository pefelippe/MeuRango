import { Card, CardContent, CardTitle } from "@/components/ui/card";

const foods = [
  { name: "picanha", img: "" },
  { name: "maminha", img: "" },
  { name: "peixes", img: "" },
  { name: "petiscos", img: "" },
  { name: "linguiças", img: "" },
  { name: "carne do sol", img: "" },
  { name: "suíno", img: "" },
  { name: "na brasa", img: "" },
  { name: "guarnições", img: "" },
  { name: "frango", img: "" },
  { name: "pizza", img: "" },
  { name: "pizza", img: "" },
  { name: "refrigerantes", img: "" },
  { name: "massas", img: "" },
];

function Foods() {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 h-full md:p-8">
      {foods.map((food) => {
        return (
          <Card className=" w-full h-[200px]">
            <CardTitle className="px-4 uppercase text-md bg-[#101010] text-[#fafafa] py-1 bg-transparent/80">
              {food.name}
            </CardTitle>
            <CardContent>
              <img></img>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Foods;
