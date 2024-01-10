const InfoRestaurant = {
  img: "",
  name: "Restaurante Souza Grill",
  minimum: "",
  address: "mamede nogueira, 773 - Centro, Pacajus - CE, 62870-000, Brasil",
  paymentmethos: ["cards", "dinheiro", "pix"],
  operatingHours: {
    Sunday: "10am to 12am",
    Monday: "10am to 12am",
    Tuesday: "10am to 12am",
    Wednesday: "10am to 12am",
    Thursday: "10am to 12am",
    Friday: "10am to 12am",
    Saturday: "10am to 12am",
  },
};

function Info() {
  return (
    <div
      className="w-full bg-muted text-[#101010] font-semibold h-screen max-w-sm p-6
     text-2xl items-center justify-center text-star "
    >
      {InfoRestaurant.name}
    </div>
  );
}

export default Info;
