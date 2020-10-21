import Link from "next/link";

const FortyTwo = () => {
  return (
    <Link href={"/de-de/42"} passHref>
      <a>
        TO /de-de/42
      </a>
    </Link>
  );
};

export default FortyTwo;

