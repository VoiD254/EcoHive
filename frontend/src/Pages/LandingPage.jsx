import { Header } from "../Components/Header";
import SupportHover from '../Components/srcLand/SupportHover'
import CardHover from '../Components/srcLand/CardHover';

export const LandingPage = () =>{
    return (
        <div className=" bg-gray-900 text-white">
            <header className="bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600" href="#">
                        <span className="sr-only">Home</span>
                        <svg className="h-10" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <image href="/src/assets/EcoHive.png" x="0" y="0" height="24" width="28"/>
                        </svg>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                        <ul className="flex items-center gap-6  text-1xl">
                            <li>
                            <a className="text-gray-400 transition hover:text-gray-900" href="#"> About Us </a>
                            </li>

                            <li>
                            <a className="text-gray-400 transition hover:text-gray-900" href="#"> Features </a>
                            </li>

                            <li>
                            <a className="text-gray-400 transition hover:text-gray-900" href="#"> FAQ </a>
                            </li>

                            <li>
                            <a className="text-gray-400 transition hover:text-gray-900" href="#"> Support </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                        <a
                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-gray-900 shadow"
                            href="#"
                        >
                            Login
                        </a>

                        <div className="hidden sm:flex">
                            <a
                            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                            href="#"
                            >
                            Register
                            </a>
                        </div>
                        </div>

                        <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <div className="flex flex-row justify-between items-center ">
                <div className=" align-top items-start">
                <h1 className="font-bold text-8xl ml-28">ECOHIVE</h1>
                </div>
                <div className="mockup-phone place-items-end mr-28 mt-12 h-96  w-52" >
                    <div className="camera"></div>
                    <div className="display">
                    <div className="artboard artboard-demo phone-1">Hi.</div>
                    </div>
                </div>
            z</div>
            <div className="LandingPage bg-gray-900 text-gray-900">
            <CardHover/>
            </div>
            <div className="bg-gray-900 text-gray-900 py-12 mx-auto max-w-5xl px-8">
                <h1 className="text-center text-5xl font-bold mb-10">FAQ</h1>
                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" id="accordion-1" name="accordion" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                    <p>Content for accordion 1</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 mb-3">
                    <input type="radio" id="accordion-2" name="accordion" />
                    <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                    <p>Content for accordion 2</p>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 pb-0">
                    <input type="radio" id="accordion-3" name="accordion" />
                    <div className="collapse-title text-xl font-medium">
                    Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                    <p>Content for accordion 3</p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-gray-900 py-16 px-8">
                <SupportHover/>
            </div>
            <Header/>
        </div>

    );
}