//external imports
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//internal imports
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";
import { store } from "./redux/store";

//code starts from here
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route exact path="/carts" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
