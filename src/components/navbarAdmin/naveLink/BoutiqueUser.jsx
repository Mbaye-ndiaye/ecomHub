import image1 from "../../../assets/exclusive_image.png"
const BoutiqueUser = () => {
    return (
        <div className="bg-gray-200 p-5 h-screen">
            <h1 className="text-blue-600 font-bold text-2xl text-center mb-5">Les boutique disponoble</h1>
            <div className="grid grid-cols-4 gap-4 ">
                <div className="shadow-lg p-5 mx-1 my-2 bg-white rounded">
                    <div className="flex gap-3">
                        <img src={image1}
                            className="w-[30px] h-[30px] rounded-full"
                            alt="/"
                        />
                        <h1>Awa Ndiaye</h1>
                    </div>
                    <p className="text-center">je ne sias pas quoi mettre</p>
                </div>

                <div className="shadow-lg p-5 mx-1 my-2 bg-white rounded">
                    <div className="flex gap-3">
                        <img src={image1}
                            className="w-[30px] h-[30px] rounded-full"
                            alt="/"
                        />
                        <h1>Awa Ndiaye</h1>
                    </div>
                    <p className="text-center">je ne sias pas quoi mettre</p>
                </div>

                <div className="shadow-lg p-5 mx-1 my-2 bg-white rounded">
                    <div className="flex gap-3">
                        <img src={image1}
                            className="w-[30px] h-[30px] rounded-full"
                            alt="/"
                        />
                        <h1>Awa Ndiaye</h1>
                    </div>
                    <p className="text-center">je ne sias pas quoi mettre</p>
                </div>

                <div className="shadow-lg p-5 mx-1 my-2 bg-white rounded">
                    <div className="flex gap-3">
                        <img src={image1}
                            className="w-[30px] h-[30px] rounded-full"
                            alt="/"
                        />
                        <h1>Awa Ndiaye</h1>
                    </div>
                    <p className="text-center">je ne sias pas quoi mettre</p>
                </div>

                
            </div>
        </div>
    )
}

export default BoutiqueUser;