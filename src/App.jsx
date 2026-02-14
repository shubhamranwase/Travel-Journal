import Header from "./Components/Header";
import MainContent from "./MainContent";
import Contacts from "./Components/Contacts";


export default function App() {
    return(
    <>
      <Header />
      <MainContent  image="https://imgs.search.brave.com/rbGMUS6xaD27DxFdZWEnpL4yoouKSWZCCUb7Dj37dKU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE2LzQ0LzkwLzkz/LzM2MF9GXzE2NDQ5/MDkzODFfMnhTRmRG/ZzljQXNWNlZiNTFs/UTZMcWtHdTg2aE5m/bmQuanBn" name="Mount Fuji" desc="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,389 feet) above sea level." link="https://en.wikipedia.org/wiki/Mount_Fuji"/>
      <MainContent image="https://imgs.search.brave.com/bgDhHS0CvqIdW6cf0ogsJp6sBQOEDX5fLsq51-dIVkQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTUx/Mzc0NTE0L2RlL2Zv/dG8vc3lkbmV5LW9w/ZXJhLWhvdXNlLWhh/dXRuYWguanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPW5Bcjkw/RC02b0g0SnZubzlV/ZlFNZjFaQjR5ZVk4/cGFJSHdYYTBkNU4t/QVU9" name="Sydney Opera House" desc="The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia." link="https://en.wikipedia.org/wiki/Sydney_Opera_House"/>
      <MainContent image="https://imgs.search.brave.com/F05xPubi4YaZo2iUVXjkDzgp4hLtFoWzl8YNTf8DkQ8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/NTQyMjEwNS9waG90/by9laWZmZWwtdG93/ZXItYWVyaWFsLXZp/ZXctcGFyaXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXNG/bjZGd1RKUjBUcFgz/clBfVzRWSHJia1RC/X182bDVrci1sa2tx/ZFlydEU9" name="Eiffel Tower" desc="The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France." link="https://en.wikipedia.org/wiki/Eiffel_Tower"/>

      {/* <div className="card-grid">
      <Contacts image="img" name="John Wick" phone="123-456-7890" email="abc@gmail.com"/>
      <Contacts image="img" name="Jane Smith" phone="098-765-4321" email="def@gmail.com"/>
      <Contacts image="img" name="Bob Johnson" phone="555-123-4567" email="ghi@gmail.com"/>
      <Contacts image="img" name="Alice Williams" phone="555-987-6543" email="jkl@gmail.com"/>
      </div> */}
    </>
  )
}