import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"

const guide = [

  {
    title: "Ques by Difficuilty",
    categories: "Easy Medium Hard",
    description: "Give me a <Medium> problem",
    color: '#1565c0'
  },
  {
    title: "Navigate B/w Topics",
    categories: "Array, Matrix, String, DP, Trie,etc",
    description: "Lets solve <Search and Sort>",
    color: "#00838f"
  },
  {
    title: "Random Question",
    categories: "",
    description: "Hit me up with a Random Problem",
    color: '#4527a0'
  },
  {
    title: "General",
    categories: "Go back, Ask Temperature, etc",
    description: "WHat does this App do / Go Back",
    color: '#283593'
  }
]



const page = ({ children }) => {

  return (
    <div className="mt-5 ">
      <h2 className="text-center m-5 text-3xl font-extrabold">PROMPTS</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center pt-5 '>
        {guide.map((el) => (
          <Card key={el.title} className=" h-60 md:h-80 mt-5 text-white" style={{backgroundColor:el.color}}>
            <CardHeader>
              <CardTitle className="flex items-center ">
                <div className="ml-2 h-1/4">
                  <p className="text-lg font-bold underline">{el.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-3 px-0 h-24 italic ">
                {el.categories}
              </CardContent>
              <div className="h-10">
                <p className="font-bold my-2">Try saying</p>
                <p className="">{el.description}</p>
              </div>

            </CardHeader>

          </Card>
        ))}
      </div>
    </div>
  )
}

export default page