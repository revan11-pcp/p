import logo from'../../assets/logo.png'
const Footer = () => {
  return (
    
<footer className="bg-white shadow-sm dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className=" sm:flex sm:items-center sm:justify-center">
            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={logo} className="h-8 dark:invert" alt="Flowbite Logo" />
            </a>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">PCP Transport</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

export default Footer