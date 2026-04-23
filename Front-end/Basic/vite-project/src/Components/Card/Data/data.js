import { useId } from "react";

export const users = [
  {
    id: 1,
    name: "Rahul Sharma",
    age: 25,
    city: "Delhi",
  },
  {
    id: 2,
    name: "Amit Verma",
    age: 30,
    city: "Mumbai",
  },
  {
    id: 3,
    name: "Priya Singh",
    age: 22,
    city: "Pune",
  },
  {
    id: 4,
    name: "Neha Gupta",
    age: 27,
    city: "Jaipur",
  },
];

// const [count, setCount] = useState(0);

// const increaseNumber = () => {
//   setCount(count + 1);
// };

// const decreaseNumber = () => {
//   setCount(count - 1);
// };


const useId = useId()
console.log(useId)