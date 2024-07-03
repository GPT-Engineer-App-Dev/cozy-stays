import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((listing) => (
            <Card key={listing}>
              <img src="/placeholder.svg" alt="Listing" className="h-48 w-full object-cover" />
              <CardHeader>
                <CardTitle>Listing Title</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Location</p>
                <p>$100/night</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Popular Destinations</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {[1, 2, 3, 4, 5].map((destination) => (
            <Card key={destination} className="min-w-[200px]">
              <img src="/placeholder.svg" alt="Destination" className="h-32 w-full object-cover" />
              <CardHeader>
                <CardTitle>Destination Name</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;