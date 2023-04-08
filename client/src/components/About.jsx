import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    This website is a small initiative to reduce waiting time in canteen and stalls at IITISM.
  This website can help people to order their food from their phones and get an estimated time for
  preparation of corresponding item.So accordingly people can go and get their food without
  wasting their time while the item is being prepared.This helps the people in saving their time and
  also reduces rush at stalls.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}
