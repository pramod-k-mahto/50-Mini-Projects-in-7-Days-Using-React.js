import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";

function App() {
  // const [scrollValue, setScrollValue] = useState(0);
  const [toggle, setToggle] = useState(false);

  const position = () => {
    const y = window.scrollY;
    console.log(y);
    // setScrollValue(y);
    if (y >= 400) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", position);
    return () => {
      window.removeEventListener("scroll", position);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className={`flex text-xl justify-between transition-h duration-300  ${
          toggle ? "text-black bg-white h-14" : "text-white h-16"
        } fixed shadow-2xl shadow-black w-screen items-center px-10  z-10`}
      >
        <div className="flex gap-x-3 justify-center items-center ">
          <FaMoon
            size={20}
            className={toggle ? "text-black " : "text-white "}
          />
          <p> My Website</p>
        </div>
        <div className="flex">
          <ul className="flex gap-x-10">
            <li
              className={`${
                toggle
                  ? "text-black font-bold"
                  : " underline text-red-100 font-bold"
              }`}
            >
              Home
            </li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="h-[30rem] w-screen bg-no-repeat bg-center bg-cover flex justify-center items-center bg-[url('https://scx2.b-cdn.net/gfx/news/hires/2023/new-study-reveals-nasa.jpg')]">
        <div className="text-white text-center h-20 w-[42rem]">
          <p>WELCOME TO MY WEBSITE</p>
          <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT.</p>
        </div>
      </div>

      <div className="px-20">
        <h1 className="text-2xl font-bold py-5">CONTENT ONE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla,
          maiores inventore voluptas id aliquid harum delectus ullam molestiae
          ducimus repellendus quidem doloribus voluptate earum provident
          veritatis quaerat nostrum quam esse dolore fuga beatae illo
          aspernatur. Vel voluptas repudiandae placeat deserunt, iusto dolorem
          optio excepturi beatae sunt, recusandae voluptatum nobis! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Maiores ea perspiciatis
          eos aliquam. Nulla, dolor. Adipisci ad tempore, perspiciatis sequi
          libero quod rerum iste expedita quis voluptatum corporis odit ea
          voluptatibus dolores quos omnis, nobis ducimus? Hic consequatur,
          distinctio provident iste quos quas id. Dolor excepturi laborum iusto
          qui quam! Ullam ipsam ipsum praesentium dignissimos at porro, numquam
          voluptates voluptatibus, ex molestiae, nobis minus. Quibusdam deleniti
          soluta cum velit alias, ut earum voluptas corporis mollitia amet
          adipisci voluptates perferendis animi impedit ab ex, delectus
          perspiciatis debitis deserunt et aliquam libero rem molestias! Iusto,
          sint. Sapiente eius voluptatum tempore deserunt perferendis nesciunt
          facere autem quam velit magni repudiandae suscipit labore, commodi,
          animi necessitatibus culpa excepturi asperiores et ipsam laboriosam
          tenetur, cupiditate vel! Eum animi culpa deserunt adipisci inventore,
          corporis rerum minus perspiciatis nulla aut omnis vel! Quas, eius.
          Quis?
        </p>
      </div>

      <div className="px-20">
        <h1 className="text-2xl font-bold py-5">CONTENT TWO</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla,
          maiores inventore voluptas id aliquid harum delectus ullam molestiae
          ducimus repellendus quidem doloribus voluptate earum provident
          veritatis quaerat nostrum quam esse dolore fuga beatae illo
          aspernatur. Vel voluptas repudiandae placeat deserunt, iusto dolorem
          optio excepturi beatae sunt, recusandae voluptatum nobis! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Maiores ea perspiciatis
          eos aliquam. Nulla, dolor. Adipisci ad tempore, perspiciatis sequi
          libero quod rerum iste expedita quis voluptatum corporis odit ea
          voluptatibus dolores quos omnis, nobis ducimus? Hic consequatur,
          distinctio provident iste quos quas id. Dolor excepturi laborum iusto
          qui quam! Ullam ipsam ipsum praesentium dignissimos at porro, numquam
          voluptates voluptatibus, ex molestiae, nobis minus. Quibusdam deleniti
          soluta cum velit alias, ut earum voluptas corporis mollitia amet
          adipisci voluptates perferendis animi impedit ab ex, delectus
          perspiciatis debitis deserunt et aliquam libero rem molestias! Iusto,
          sint. Sapiente eius voluptatum tempore deserunt perferendis nesciunt
          facere autem quam velit magni repudiandae suscipit labore, commodi,
          animi necessitatibus culpa excepturi asperiores et ipsam laboriosam
          tenetur, cupiditate vel! Eum animi culpa deserunt adipisci inventore,
          corporis rerum minus perspiciatis nulla aut omnis vel! Quas, eius.
          Quis?
        </p>
      </div>

      <div className="px-20 pb-16">
        <h1 className="text-2xl font-bold py-5">CONTENT THREE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nulla,
          maiores inventore voluptas id aliquid harum delectus ullam molestiae
          ducimus repellendus quidem doloribus voluptate earum provident
          veritatis quaerat nostrum quam esse dolore fuga beatae illo
          aspernatur. Vel voluptas repudiandae placeat deserunt, iusto dolorem
          optio excepturi beatae sunt, recusandae voluptatum nobis! Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Maiores ea perspiciatis
          eos aliquam. Nulla, dolor. Adipisci ad tempore, perspiciatis sequi
          libero quod rerum iste expedita quis voluptatum corporis odit ea
          voluptatibus dolores quos omnis, nobis ducimus? Hic consequatur,
          distinctio provident iste quos quas id. Dolor excepturi laborum iusto
          qui quam! Ullam ipsam ipsum praesentium dignissimos at porro, numquam
          voluptates voluptatibus, ex molestiae, nobis minus. Quibusdam deleniti
          soluta cum velit alias, ut earum voluptas corporis mollitia amet
          adipisci voluptates perferendis animi impedit ab ex, delectus
          perspiciatis debitis deserunt et aliquam libero rem molestias! Iusto,
          sint. Sapiente eius voluptatum tempore deserunt perferendis nesciunt
          facere autem quam velit magni repudiandae suscipit labore, commodi,
          animi necessitatibus culpa excepturi asperiores et ipsam laboriosam
          tenetur, cupiditate vel! Eum animi culpa deserunt adipisci inventore,
          corporis rerum minus perspiciatis nulla aut omnis vel! Quas, eius.
          Quis?
        </p>
      </div>
    </div>
  );
}

export default App;
