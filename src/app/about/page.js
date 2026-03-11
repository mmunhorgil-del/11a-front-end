export default function AboutPage() {
  return (
    <div>
      <div className="h-[100px] bg-white flex items-center justify-between">
        <div className="flex items-center justify-start">
          <img
            className="h-[100px] w-[100px] ml-8 mt-8"
            src="https://nhs.edu.mn/favicon.ico"
          ></img>
        </div>
        <div className="flex items-center ">
          <p className="text-black text-[20px] m-4">Home</p>
          <p className="text-black text-[20px] m-4">About Us</p>
          <p className="text-black text-[20px] m-4">Portfilio</p>
          <p className="text-black text-[20px] mr-8">Contact</p>
        </div>
      </div>
      <div className="bg-white h-screen flex items-center">
      <div>
        <h1 className="text-blue-800 font-bold text-[75px] pt-8 ml-8">
          About Us
        </h1>
        <p className="text-gray-500 text-[20px] m-8">
          Lorem ipsum dolor sit amet, consectetuer adipsicing elit, sed diam
          nonummy nibh euismode tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <button className="bg-orange-500 text-[20px] h-[70px] w-[175px] rounded-[50px] m-8">
          Contact Now
        </button>
      </div>
      <div>
        <img src="https://i.pinimg.com/736x/c7/77/1b/c7771bd71ad9615abfb93bbc5078e4f5.jpg"></img>
      </div>
      </div>
    </div>
  );
}
