import { Header } from "../Components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
export const LandingPage = () =>{
    return (
        <div>
            <div className="bg-gray-900 text-white py-16 px-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores soluta voluptate maxime natus doloribus cum iusto, dicta omnis velit! Tempore tenetur labore et omnis? Earum itaque harum explicabo soluta?</p>
            </div>
            <div className="bg-gray-900 text-white py-16 px-8">
                <div className="max-w-7xl mx-auto">         
                    <h1 className="text-5xl font-bold mb-4 text-center">Support center</h1>
                    <p className="text-lg mb-8 text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
                    Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L3.177 9.45a1 1 0 01-.134.89l-1.67 2.509a1 1 0 00-.183.866l1.397 5.863a1 1 0 001.34.725l6.003-2.25a1 1 0 01.764 0l6.003 2.25a1 1 0 001.34-.725l1.397-5.863a1 1 0 00-.183-.866l-1.67-2.509a1 1 0 01-.134-.89l1.174-3.567a1 1 0 00-.887-1.217L13.79 4.92a1 1 0 01-.775-.372l-2.7-3.046a1 1 0 00-1.56 0l-2.7 3.046a1 1 0 01-.775.372l-3.77.688a1 1 0 00-.887 1.217z" />
                        </svg>
                        <h3 className="text-xl font-bold ml-2">Sales</h3>
                        </div>
                        <p>Consequatur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.</p>
                    </div>
                    <div className="bg-gray-800/[.50] p-6 rounded-lg shadow-none hover:shadow-lg transition-all duration-300 delay-150">
                        <div className="flex items-center mb-4">
                            <FontAwesomeIcon icon={faHeadset} className="text-blue-500 text-2xl mr-2" />
                            <h3 className="text-xl font-bold ml-2">Technical Support</h3>
                        </div>
                        <p>Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h12zM4 9h4v2H4V9zm0 4h4v2H4v-2zm0-6h4v2H4V7zm6 0h4v6h-4V7zm0 8h4v2h-4v-2z" />
                        </svg>
                        <h3 className="text-xl font-bold ml-2">Media Inquiries</h3>
                        </div>
                        <p>Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.</p>
                    </div>
                    </div>
                </div>
            </div>
            <Header/>
        </div>
    );
}