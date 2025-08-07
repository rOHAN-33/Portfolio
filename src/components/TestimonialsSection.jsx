import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    isHighlighted: false,
    bgClass: "bg-gray-900",
    textClass: "text-gray-50",
    stars: 5,
    testimonialText:
      "Duncan truly understood my vision and turned it into impactful designs. The results went beyond my expectations!",
    clientName: "John Harris",
    designation: "Marketing Director",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: 2,
    isHighlighted: false,
    bgClass: "bg-gray-900",
    textClass: "text-gray-50",
    stars: 5,
    testimonialText:
      "He took the time to understand our goals and delivered a design that resonated perfectly with our audience.",
    clientName: "Michael Lee",
    designation: "Product Manager",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: 3,
    isHighlighted: true,
    bgClass: "bg-white",
    textClass: "text-black",
    borderClass: "border-gray-200",
    topText: "I've worked with 50+ happy clients",
    statValue: "0%",
    statLabel: "Satisfaction Rate",
  },
  {
    id: 4,
    isHighlighted: true,
    bgClass: "bg-lime-400",
    textClass: "text-black",
    topText: "My work helped clients grow their revenue by 200%",
    statValue: "0%",
    statLabel: "Growth",
  },
  {
    id: 5,
    isHighlighted: false,
    bgClass: "bg-gray-900",
    textClass: "text-gray-50",
    stars: 5,
    testimonialText:
      "His design skills are unmatched. He transformed my ideas into a high-performing, visually striking website.",
    clientName: "Sarah Johnson",
    designation: "CEO",
    avatarUrl: "/placeholder.svg",
  },
  {
    id: 6,
    isHighlighted: false,
    bgClass: "bg-gray-900",
    textClass: "text-gray-50",
    stars: 5,
    testimonialText:
      "As a small business owner, I appreciated how stress-free Duncan made the process.",
    clientName: "Laura Bennett",
    designation: "Small Business Owner",
    avatarUrl: "/placeholder.svg",
  },
];

const gradientTextClass =
  "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent";

const TestimonialCard = ({
  isHighlighted,
  bgClass,
  textClass,
  borderClass,
  stars,
  testimonialText,
  clientName,
  designation,
  avatarUrl,
  topText,
  statValue,
  statLabel,
}) => {
  const keywords = [
    "impactful designs",
    "beyond my expectations",
    "perfectly with our audience",
    "unmatched",
    "high-performing",
    "visually striking",
    "stress-free",
    "200%",
  ];

  const renderText = (text) => {
    let parts = [text];
    keywords.forEach((keyword) => {
      const newParts = [];
      parts.forEach((part) => {
        if (typeof part === "string") {
          const segments = part.split(keyword);
          segments.forEach((segment, index) => {
            newParts.push(segment);
            if (index < segments.length - 1) {
              newParts.push(
                <span key={`${keyword}-${index}`} className={gradientTextClass}>
                  {keyword}
                </span>
              );
            }
          });
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    return parts;
  };

  return (
    <div
      className={`rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl border ${
        isHighlighted ? borderClass || "border-transparent" : "border-transparent"
      } ${bgClass} ${textClass}`}
    >
      {isHighlighted ? (
        <div className="flex flex-col h-full justify-between">
          <p className="text-lg font-medium mb-4">{topText}</p>
          <h3 className="text-6xl font-extrabold leading-none mt-4">
            {statValue}
          </h3>
          <p className="text-xl font-semibold mt-2">{statLabel}</p>
        </div>
      ) : (
        <>
          <div className="mb-4 flex items-center gap-0.5">
            {Array.from({ length: stars || 0 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-lime-400 text-lime-400"
              />
            ))}
          </div>
          <p className="text-lg leading-relaxed mb-6">
            {renderText(testimonialText)}
          </p>
          <div className="flex items-center">
            <img
              src={avatarUrl}
              alt={`Avatar of ${clientName}`}
              width={48}
              height={48}
              className="mr-4 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">{clientName}</p>
              <p className="text-sm text-gray-400">{designation}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="w-full  py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 ">
          <h2 className="text-4xl ml-32 font-bold tracking-tighter text-white sm:text-5xl md:text-6xl" style={{fontFamily: 'Antonio, sans-serif'}}>
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] ml-32 text-gray-400 md:text-xl">
            Hear from the businesses and individuals who have experienced the
            impact of our work.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
