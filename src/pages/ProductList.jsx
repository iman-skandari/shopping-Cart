import SearchFilter from "../components/SearchFilter/SearchFilter"
import Category from "../components/Category/Category"

import { useCart } from "../context/CartContext"
import ProductCard from "../components/ProductCard/ProductCard"
import { useState } from "react"

const ProductList = () => {
  const { products } = useCart()

  // console.log("muuu:", useCart());
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const filterProducts = products.filter((product) => {
    const mathSearch = product.name.toLowerCase().includes(search.toLowerCase())
      || product.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory == "All" || product.category === selectedCategory;

    return mathSearch && matchesCategory
  })

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8 pt-8">
        <SearchFilter search={search} setSearch={setSearch} />
        <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4">
          Featured gear({products.length} Items)
        </h2>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filterProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductList