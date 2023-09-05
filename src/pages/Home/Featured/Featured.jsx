import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white my-20">
            <div className="bg-slate-500 bg-opacity-70 pt-8 ">
                <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
                <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div className="md:ml-10 space-y-2">
                        <p>March 20, 2023</p>
                        <p className="uppercase">Where Can i Get Some?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;