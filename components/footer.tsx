import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4">
      <div className="m-full p-4 md:py-8">
        <div className="text-center text-5m">
        <h3 className="mt-2 text-5xl font-bold text-black">
          Arte<span className="text-blue-500 font-bold">Sano</span>
        </h3>
          
        </div>
      </div>
      <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        &copy; 2024  - Developed by <br/>
        <Link href="https://github.com/ELperrocode" className="hover:underline m-0">
        ELperrocode
        </Link> <br/>
        <Link href="https://github.com/quexopacode" className="hover:underline m-0">
        quexopacode
        </Link> <br/>
        <Link href="https://github.com/IamBlack0" className="hover:underline m-0">
        IamBlack0
        </Link><br/>
      </p>
    </footer>
  );
};

export default Footer;
