import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    This website is an initiative in order to resolve the issue of waiting in stalls at IIT(ISM).It's always frustrating to have to wait in long lines, especially when you're short on time or hungry. This website could help streamline the ordering process and make it more convenient for students and faculty at IIT(ISM) to order food and other items from the stalls. It could also potentially reduce congestion and wait times at the stalls themselves, making it a win-win for everyone involved.Through this website people can signup and order the items which require time to be prepared, and an estimated time is shown to the customer.According to the time shown the customer can come and collect the item. I hope the website is successful in helping to improve the overall experience for everyone at IIT(ISM).
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}
