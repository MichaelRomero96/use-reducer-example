import MyComponent from "./components/MyComponent";
import MainProvider from "./context/mainContext";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <MainProvider>
      <ProductProvider>
        <MyComponent />
      </ProductProvider>
    </MainProvider>
  );
}

export default App;
