import Link from "next/link";

const Home = () => {
  return (
    <Link href={"/nl-nl/42"} passHref>
      <a>
        TO /nl-nl/42 
      </a>
    </Link>
  );
};

export default Home;

