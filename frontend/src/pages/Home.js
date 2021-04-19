import { useState, useEffect, Fragment } from 'react';
import Hero from '../components/Home/Hero';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import WoocommerceApi from '../woocommerce-api';
import BestSellingProducts from '../components/Home/BestSellingProducts';
import PromoBanner from '../components/Home/PromoBanner';
import Loading from '../components/Loading';

const Home = () => {
    const [heroImage, setHeroImage] = useState('');
    const [showPage, setShowPage] = useState(false);
    const [featuredCategories, setFeaturedCategories] = useState([]);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [promoBanner, setPromoBanner] = useState([]);
    
    // Cached API request
    const cachedHero = localStorage.getItem('hero');
    const cachedCategories = localStorage.getItem('categories');
    const cachedFeaturedProducts = localStorage.getItem('featuredProducts');
    const cachedPromoBanner = localStorage.getItem('promoBanner')
    const api = new WoocommerceApi();
    
    useEffect(() => {
      window.scrollTo(0, 0);
   
      if(cachedHero == null && cachedPromoBanner == null) {
          fetch('/server/wp-json/wp/v2/pages?slug=home')
          .then(res => res.json())
          .then(res => {
            setHeroImage(res[0].ACF.heroimage);
            localStorage.setItem('hero', res[0].ACF.heroimage);
      
            setPromoBanner([
              res[0].ACF.banner_one,
              res[0].ACF.banner_two
            ]);

            localStorage.setItem('promoBanner', JSON.stringify([
              res[0].ACF.banner_one,
              res[0].ACF.banner_two
            ]));

            setShowPage(true);
          });
      } else {
        setPromoBanner(JSON.parse(cachedPromoBanner));
        setHeroImage(cachedHero);
        setShowPage(true);
      }


      if(cachedCategories == null) {
        api.getCategories()
        .then(res => {
          const categories = res.data.filter(category => category.ACF && category);       
          setFeaturedCategories(categories);
          localStorage.setItem('categories', JSON.stringify(categories));
          setShowPage(true);
        });
      } else {
        setFeaturedCategories(JSON.parse(cachedCategories));
        setShowPage(true);
      }
        
      if(cachedFeaturedProducts == null) {
        api.getAllProducts()
        .then(res => {
          const products = res.data.filter(res => res.featured && res);
          localStorage.setItem('featuredProducts', JSON.stringify(products));
          setBestSellingProducts(products);
          setShowPage(true);
        });
    } else {
      setBestSellingProducts(JSON.parse(cachedFeaturedProducts));
      setShowPage(true);
    }
    }, [])

    if(showPage) {
      return (
        <Fragment>
          { (heroImage == null) ? 'Loading' : <Hero image={ heroImage } /> }
          { (featuredCategories.length == 0) ? 'Loading...' : <FeaturedCategories categories={ featuredCategories } /> }
          { (bestSellingProducts.length == 0) ? 'Loading..' : <BestSellingProducts products={ bestSellingProducts } /> }
          { (promoBanner.length == 0) ? 'Loading..' : <PromoBanner data={ promoBanner } /> }
        </Fragment>
      );
    }

    return (
      <Fragment>
          <Loading />
      </Fragment>
    );
}

export default Home;