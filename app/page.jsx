import Image from 'next/image'
import OmletteImage from './img/image-omelette.jpeg'
import { Young_Serif } from 'next/font/google'

const young_serif = Young_Serif({ subsets: ['latin'], weight: ['400'] })

export default function Home() {
  return (
    <main className="grid place-items-center h-[200dvh]">
      {/* Main Content */}
      <div className="bg-white h-[95%] w-[40em] rounded-2xl p-12 max-mobile:w-full max-mobile:p-8 max-mobile:h-full ">
        <Image
          className="rounded-2xl"
          src={OmletteImage}
          sizes="80% 80%"
          alt="Omelette"
        />
        <h1 className={`${young_serif.className} mt-5 tracking-wide text-4xl`}>
          Simple Omlette Recipe
        </h1>

        <p className="text-dark-charcoal mt-2 text-base">
          An easy and quick dish, perfect for any meal. This classic omellete
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables or meat.
        </p>

        <div className="bg-rose-white p-5 my-3 rounded-xl">
          <h2 className="text-base text-dark-raspberry font-[600]">
            Preparation Time
          </h2>
          <ul className="list-disc ml-5">
            <li>
              <span className="font-[600]">Total</span>: Approximately 10
              minutes
            </li>
            <li>
              <span className="font-[600]">Preparation</span>: 5 minutes
            </li>
            <li>
              <span className="font-[600]">Cooking</span>: 5 minutes
            </li>
          </ul>
        </div>

        <div className="my-8">
          <h1
            className={`${young_serif.className} text-2xl text-nutmeg font-bold`}
          >
            Ingredients
          </h1>
          <ul className="ml-5 mt-2 list-disc ">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <hr />

        <div className="my-8">
          <h1
            className={`${young_serif.className} text-2xl text-nutmeg font-bold`}
          >
            Instructions
          </h1>
          <ul className="ml-5 mt-3 list-decimal">
            <li>
              <b>Beat the eggs</b>: In a bowl, beat the eggs with a pinch of
              salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <b>Heat the pan</b>: Place a non-stick frying pan over medium heat
              and add butter or oil.
            </li>
            <li>
              <b>Cook the omletter</b>: Once the butter has melted and bubbling,
              pour in the eggs. Tilt the pan to ensure the eggs evenly coat the
              surface.
            </li>
            <li>
              <b>Add fillings(optional)</b>: When the eggs begin to set at the
              edges, but are still slightly runny
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </main>
  )
}
