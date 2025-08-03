import Card from "@/components/Card"
import Button from "@/components/Button";
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">landing pages</h1>
      <Card />
      <Button title="Small" styles="rounded-sm" />
<Button title="Medium" styles="rounded-md" />
<Button title="Full" styles="rounded-full" />
      <Button title="Large" styles="rounded-lg" />
    </div>
  )
}
export default Landing
