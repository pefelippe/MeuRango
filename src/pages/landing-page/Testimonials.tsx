import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials } from "@/consts/mockInfo";
import { useTranslation } from "react-i18next";

export function Testimonials() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 py-32 border-t">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-5xl font-bold text-blue-800 text-center mb-12">
          {t("testimonial.message")}
        </h3>

        <Carousel
          opts={{
            loop: true,
            align: "center",
          }}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="flex flex-col p-6 bg-white rounded-lg shadow-md h-full border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4 flex items-center">
                    <img
                      className="h-16 w-16 rounded-full object-cover border-2 border-blue-200"
                      alt={testimonial.name}
                      src={testimonial.avatarUrl}
                      loading="lazy"
                    />
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-blue-800">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-blue-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <q className="flex-1 text-base text-gray-700 italic">
                    {testimonial.quote}
                  </q>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
}
