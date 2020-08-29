import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import Product from "./Product";
import ScrollSpy from "assert/ScrollSpy";

const useStyles = makeStyles((theme) => ({
  categoryContent: {
    border: "solid 1px #eeeeee",
    borderTopColor: "rgb(238, 238, 238)",
    borderTopStyle: "solid",
    borderTopWidth: "1px",
    padding: "25px 80px",
    background: "#f2f2f2",
    backgroundImage: "linear-gradient(to bottom, #ffffff, #f2f2f2 480px)",
    borderTop: "none",
    [theme.breakpoints.down("md")]: {
      padding: "25px 4px",
    },
  },
  numberColor: {
    color: "#b0b0b0",
  },
  productItemBox: {
    display: "flex",
    overflow: "hidden",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
}));

const RestaurantContent = ({className, categorise}) => {
	
	const classes = useStyles();
	
	useEffect(() => { 
	
		const scrollWrapper = document.getElementById("ScrollWrapper");
		const options = { sectionClass: '.categoryContent > section', offset: 160 };
		let onScroll;
		const timeId = setTimeout(() => { 
			const instance = new ScrollSpy(scrollWrapper, '.category > nav', options);
			onScroll = () => instance.onScroll();
			onScroll();		
			scrollWrapper.addEventListener('scroll', onScroll);		
		});	
		
		return () => {
			if(onScroll)
				scrollWrapper.removeEventListener('scroll', onScroll);
			clearTimeout(timeId);
		};
		
  }, []);
  
  return (
    <div className={className}>
      {categorise.map(({ id, name, count, products }, index) => (
        <section className={classes.categoryContent} id={id} key={index}>
          <div className="pt-5">
            <div className="flex items-center mb-3 text-xl">
              <span className=" font-bold mr-2">{name}</span>
              <span className={classes.numberColor}>{count}</span>
            </div>
            <div className={classes.productItemBox}>
              {products.map((item, index) => (
                <Product product={item} key={index} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categorise: state.restaurant.restaurantProductCategorise,
});

export default connect(mapStateToProps)(RestaurantContent);
