"use client"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
const testimonials = [
    {
        name: " Babita",
        avatar: "B",
        title: "SWE @Amazon",
        description: "This immensely helped me to revise my DSA concepts"
    },
    {
        name: "Onam",
        avatar: "O",
        title: "SDE @Oracle",
        description: "This is one of the best DSA sheets out there"
    },
    {
        name: "Ojaswi",
        avatar: "O",
        title: "App Developer @42Gears",
        description: "This helped me to crack 42Gears OA, Highly recommend to give it a try"
    },
    {
        name: "Bhavin",
        avatar: "B",
        title: "ML  @Fractal Analytics",
        description: "Such amazing content for FREE. The support team is also very prompt"
    }
]
const LandingComponent = () => {
  

    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold my-4">
                Testimonials
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {testimonials.map((el) => (
                    <Card key={el.name} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <Button>{el.avatar}</Button>
                                <div className="ml-2">
                                    <p className="text-lg">{el.name}</p>
                                    <p className="text-zinc-400 text-sm">{el.title}</p>
                                </div>

                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {el.description}

                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default LandingComponent