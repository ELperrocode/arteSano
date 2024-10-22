import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-4 flex flex-col items-center mb-8"> {/* Cambié mb-3 a mb-8 para un margen inferior más grande */}
      <div className="w-full p-4 md:py-8">
        <div className="text-center">
          <h3 className="mt-2 mb text-5xl font-bold text-black">
            Arte<span className="text-blue-700 font-bold">Sano</span>
          </h3>
        </div>
      </div>
      <p className="block  text-gray-500 sm:text-center dark:text-gray-400 flex flex-row space-x-4">
        &copy; 2024 - Developed by - .
        <Link href="https://github.com/ELperrocode" className="hover:underline">
          ELperrocode
        </Link>
        <Link href="https://github.com/quexopacode" className="hover:underline">
          quexopacode
        </Link>
        <Link href="https://github.com/IamBlack0" className="hover:underline">
          IamBlack0
        </Link>
      </p>
    </footer>
  );
};

export default Footer;