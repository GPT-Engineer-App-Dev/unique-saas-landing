import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Package, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold mb-4">Welcome to SaaS Product</h1>
        <p className="text-xl mb-8">The best solution for your business needs.</p>
        <Button size="lg" className="mb-8">Get Started</Button>
        <img src="https://placehold.co/600x400" alt="placeholder" className="mx-auto" />
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature
            icon={<Package className="h-12 w-12 text-primary" />}
            title="Feature One"
            description="Description of feature one."
          />
          <Feature
            icon={<Package className="h-12 w-12 text-primary" />}
            title="Feature Two"
            description="Description of feature two."
          />
          <Feature
            icon={<Package className="h-12 w-12 text-primary" />}
            title="Feature Three"
            description="Description of feature three."
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Testimonial
                name="John Doe"
                feedback="This product is amazing! It has helped my business grow exponentially."
                image="https://placehold.co/100x100"
              />
            </CarouselItem>
            <CarouselItem>
              <Testimonial
                name="Jane Smith"
                feedback="I love using this product. It's user-friendly and very efficient."
                image="https://placehold.co/100x100"
              />
            </CarouselItem>
            <CarouselItem>
              <Testimonial
                name="Sam Wilson"
                feedback="Highly recommend this product to anyone looking to improve their business."
                image="https://placehold.co/100x100"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan
            title="Basic"
            price="$19/month"
            features={["Feature A", "Feature B", "Feature C"]}
          />
          <PricingPlan
            title="Pro"
            price="$49/month"
            features={["Feature A", "Feature B", "Feature C", "Feature D"]}
          />
          <PricingPlan
            title="Enterprise"
            price="$99/month"
            features={["Feature A", "Feature B", "Feature C", "Feature D", "Feature E"]}
          />
        </div>
      </section>
    </div>
  );
};

const Feature = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const Testimonial = ({ name, feedback, image }) => (
  <Card className="text-center">
    <img src={image} alt={name} className="mx-auto rounded-full mb-4" />
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{feedback}</p>
    </CardContent>
  </Card>
);

const PricingPlan = ({ title, price, features }) => (
  <Card className="text-center">
    <CardHeader>
      <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
      <p className="text-4xl font-bold mb-4">{price}</p>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center">
            <Star className="h-4 w-4 text-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>
      <Button>Choose Plan</Button>
    </CardContent>
  </Card>
);

export default Index;