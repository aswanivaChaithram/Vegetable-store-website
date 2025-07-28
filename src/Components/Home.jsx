import React from 'react'
import spinach from '../assets/spinach.png'
import veg from '../assets/veg.png'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 font-sans">

      {/* Hero Section */}

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-light leading-snug">
          We're <em className="italic font-medium">farmers</em>, 
          <em className="italic font-medium">purveyors</em>, 
          and <em className="italic font-medium">eaters</em> 
          of <br /> organically grown food.
        </h2>
        <button className="mt-8 px-6 py-3 bg-green-800 text-white rounded
         hover:bg-green-700 cursor-pointer" onClick={() => 
         navigate('/Vegetable-store-website/products')}>
          Browse our shop
        </button>
      </section>

      {/* Images Section */}
      <section className="grid md:grid-cols-2 gap-8 px-20 mb-16 mt-10">
        <img src={spinach} alt="Greens" className="w-full rounded-lg shadow md:h-190 md:w-150" />
        <div className="flex flex-col justify-center">
          <img src={veg} alt="Veggies Stack" className="rounded-lg shadow mb-2" />
          <p className="text-sm text-gray-500">
            <strong>Central California</strong> — The person who grew these was located in Central California and, er, hopefully very well-compensated.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center py-8" id='about'>
        <h2 className="text-5xl font-bold">About</h2>
      </section>

      {/* What We Believe Section */}
      <section className="px-6 pb-20 max-w-[1250px] mx-auto">
        <h3 className="text-sm font-bold uppercase mb-4">What we believe</h3>
        <p className="mb-4">
          We believe in produce. Tasty produce. Produce like:
        </p>
        <p className="mb-4">
          Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. 
          Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese 
          eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. 
          Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. 
          Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. 
          Dill.
        </p>
        <h3 className="mb-4 font-bold">
          What are we forgetting?
        </h3>
        <p>
          Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). 
          Persian cucumbers, in addition to aforementioned “normal” 
          cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what 
          some cultures call pumpkins). Sweet potatoes and potato-potatoes. 
          Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor 
          (this website). Sorrel. Pineapple. Mango. Gooseberries. 
          Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. 
          Corn. Endive. Escarole, which, we swear, we're vendors of 
          organic products, not just a couple of people who
          like to throw around fancy words.
        </p>
      </section>
    </div>
  )
}

export default Home