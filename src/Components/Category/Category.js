import React from "react";
import { motion } from "framer-motion";
import "./Category.css";
const Category = ({ filterByCategory, allCategories }) => {
  return (
    <div className="category">
      <div className="category-buttons">
        {allCategories.length >= 1 ? (
          allCategories.map((cat) => {
            return (
              <motion.button
                layout
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => filterByCategory(cat)}
                key={cat}
                className="btn"
              >
                {cat}
              </motion.button>
            );
          })
        ) : (
          <h4>لا يوجد تصنيفات</h4>
        )}
      </div>
    </div>
  );
};

export default Category;
