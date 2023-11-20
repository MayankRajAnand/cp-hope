"use client"
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import Link from 'next/link';
import topics from "../../../constants"
import { Progress } from "../../../components/ui/progress"

const fetchProgress = (val) => {
  let storedProgress = JSON.parse(localStorage.getItem(val))
  if(storedProgress)
  {
    return Object.keys(storedProgress).length
  }
  return 0
  
}
const DashboardPage = () => {

  return (
    <div className='mb-8 space-y-4 text-left md:text-center'>
      <h2 className='text-2xl md:text-4xl font-bold'>Your Gateway to Crack DSA🔥</h2>
      <p className='text-muted-foreground font-light text-sm w-2/3 md:w-full md:text-lg '>
        Boost Your Placement Preparation by Start Solving the Best DSA Material.
      </p>
      <div className='py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12'>
        {topics.map((el) => (
          <Card key={el.topic} className="border-4 hover:scale-110 w-90 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-blue-700" >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <Button variant="outline" className='border-none'>
                  <el.icon />
                </Button>
                <div className="ml-2">
                  <p className="text-lg">{el.topic}</p>
                </div>
              </CardTitle>
              <CardContent className="px-3 flex-row justify-center">
                <div className='flex justify-between items-center text-zinc-600'>
                  <p className='text-muted-foreground  text-sm md:text-lg text-center'>
                    Total Questions
                  </p>
                  <p>{el.totalQues}</p>
                </div>

                {
                  fetchProgress(el.topic) == el.totalQues ? (
                    <div className='flex-row justify-between space-y-3 text-zinc-600'>
                      <div className='flex justify-between items-center'>
                        <p className='text-green-500 font-bold  text-sm md:text-lg text-center mx-auto mt-3'>
                          Well Done !
                        </p>

                      </div>
                      <p className='text-green-600'>
                        🥳🥳 No Ques Left 🥳🥳
                      </p>
                    </div>

                  ) : fetchProgress(el.topic) > 0 ? (
                    <div className='flex-row justify-between space-y-3 text-zinc-600'>
                      <div className='flex justify-between items-center'>
                        <p className='text-muted-foreground  text-sm md:text-lg text-center'>
                          Questions Left
                        </p>
                        <p>{el.totalQues - Object.keys(JSON.parse(localStorage.getItem(el.topic))).length}</p>
                      </div>
                      <Progress
                        value={Object.keys(JSON.parse(localStorage.getItem(el.topic))).length / el.totalQues * 100}
                        className="w-[100%] border-2"
                        indicatorColor="bg-blue-500" />
                    </div>
                  ) : (
                    <div className='flex justify-between items-center text-red-500'>
                      <p className='font-bold text-sm md:text-md text-center italic my-3'>
                        Not yet Started !
                      </p>
                    </div>
                  )
                }

              </CardContent>

              <div className='text-center text-2xl'>
                <Link href={`/dashboard/${el.topic}`} >
                  <Button variant="outline" className='border-gray-500 border-2 font-bold' size="lg" >Start now</Button>
                </Link>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )

}
export default DashboardPage

