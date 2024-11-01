import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 gird lg:grid-cols-3 gap-8 text-gray-300 ">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">Sam.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos doloremque modi, harum odit amet ab corporis blanditiis quo sed ex ipsum minus vitae facilis quasi similique minima officia optio!
        </p>
        <div className="flex  md:w-[75%] my-6">
          <FaFacebookSquare className="m-2" size={30} />
          <FaInstagram className="m-2" size={30} />
          <FaTwitterSquare className="m-2" size={30} />
          <FaGithubSquare className="m-2" size={30} />
          <FaDribbbleSquare className="m-2" size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2  text-sm">Analytics</li>
            <li className="py-2  text-sm">Marketing</li>
            <li className="py-2  text-sm">Commerce</li>
            <li className="py-2  text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2  text-sm">Pricing</li>
            <li className="py-2  text-sm">Documentation</li>
            <li className="py-2  text-sm">Guides</li>
            <li className="py-2  text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2  text-sm">About</li>
            <li className="py-2  text-sm">Blog</li>
            <li className="py-2  text-sm">Jobs</li>
            <li className="py-2  text-sm">Press</li>
            <li className="py-2  text-sm">Conference</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2  text-sm">Terms</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-gray-500">&copy; 2024 Stanley Amunze || All rights reserved.</p>
    </div>
  );
};

export default Footer;
