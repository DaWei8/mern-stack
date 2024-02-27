import Blogs from "./Blogs";
import ListEmployees from "./Employees";

export default function Home() {
  return (
    <div className=" container  pe-5 ">
      <h1 className="mt-5"></h1>
      <ListEmployees />
      <Blogs />
    </div>
  );
}
