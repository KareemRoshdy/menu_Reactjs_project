import React from "react";
import "./Cards.css";
import { motion } from "framer-motion";
const Cards = ({ itemsData }) => {
  return (
    <div className="cards-container">
      {itemsData.length >= 1 ? (
        itemsData.map((item) => {
          return (
            <motion.div
              layout
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="card"
              key={item.id}
            >
              <div className="img">
                <img src={item.img} />
              </div>
              <div className="info">
                <div className="head">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="price">{item.price} </p>
                </div>
                <div className="desc">
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })
      ) : (
        <h3 className="text-center">لا توجد اصناف</h3>
      )}
    </div>
  );
};

export default Cards;
