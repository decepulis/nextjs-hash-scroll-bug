import Link from "next/link";

const Page = () => (
  <>
    <h1>Page</h1>
    <p>
      <Link href="#content">Click here to see the issue</Link>
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum corrupti
      neque quos? Aspernatur, eligendi dolorem aliquid provident consectetur
      sunt, praesentium, nemo totam fugiat nesciunt rem libero! Eligendi neque
      quis placeat.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum corrupti
      neque quos? Aspernatur, eligendi dolorem aliquid provident consectetur
      sunt, praesentium, nemo totam fugiat nesciunt rem libero! Eligendi neque
      quis placeat.
    </p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum corrupti
      neque quos? Aspernatur, eligendi dolorem aliquid provident consectetur
      sunt, praesentium, nemo totam fugiat nesciunt rem libero! Eligendi neque
      quis placeat.
    </p>
    <h2 id="content">Some content further down</h2>
  </>
);

export default Page;
