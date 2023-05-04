import styles from '@/styles/Home.module.css';
import Input from '@/components/input';
import Navbar from '@/components/navbar';
import { useState } from 'react';
import RecipeCard from '@/components/recipe';

const Home = () => {

  const recipies = [{title: "Paalappam",
    image: "/images/paalappam.jpg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Paper Masala Dosa",
    image: "/images/paper_masala_dosa.jpg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Puttu",
    image: "/images/puttu.jpg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Kerala Sadya",
    image: "/images/sadya.jpg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Biriyani",
    image: "/images/biriyani.jpeg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Noodles",
    image: "/images/noodles.jpeg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Dosa",
    image: "/images/dosa.jpg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  },
  {
    title: "Fish fry",
    image: "/images/fish_fry.jpg",
    description: "Some random text to fill the description frelds of every food recipe. Proper description can be add later"
  }
  ];
  const [recipe, setRecipe] = useState(recipies);


    const onType = event => {

      if(event.target.value == "")
      
        setRecipe(recipies)
        else{
      const filteredArray = recipies.filter(i=>i.title.toLowerCase().includes(event.target.value.toLowerCase()))
      setRecipe(filteredArray)}}
      
  
  return (
    <div>
      <Navbar />
      <hr/>
      <div className={styles.header}>
        <Input onType={onType} />
      </div>

  <div className={styles.cardGroup}>

 { recipe.map(i=>(
          <div className={styles.card}>
            <RecipeCard recipee={i} />
          </div>))}
          
      </div>

    </div>
  )
}
export default Home;