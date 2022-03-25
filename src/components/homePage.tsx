import CardImage from "./card/cardImage";
import "../stylesGlobals/homePage.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import _ from "lodash";

interface IProductInfo {
  name: string;
  image: string;
  price: number;
  category: string;
}

function HomePage() {
  const [dataResponse, setDataResponse] = useState<IProductInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [dataSearch, setDataSearch] = useState<IProductInfo[]>([]);

  useEffect(() => {
    axios({
      url: "https://my-json-server.typicode.com/luisforerop/products-database/products",
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          setDataResponse(response.data);
          setDataSearch(response.data);
          setLoading(false);
        }
      })
      .catch((e) => console.log(e.message));
  }, []);

  const handleChange = (event: any) => {
    const arraySearch: IProductInfo[] = dataResponse.filter(
      (value: IProductInfo, index: any, array: IProductInfo[]) => {
        if (_.isEmpty(event.target.value)) {
          return array;
        }
        return value.name.toLocaleLowerCase().includes(event.target.value);
      }
    );
    console.log(arraySearch);
    if (arraySearch.length !== 0) {
      setDataSearch(arraySearch);
    }
  };

  return (
    <div className='root'>
      <div>
        <h1>Mi tienda</h1>
        <input name='search' className='inputSearch' onChange={handleChange} />
        <div className='boxCardImage'>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            dataSearch.length !== 0 &&
            dataSearch &&
            dataSearch.map((value: IProductInfo, index: any) => (
              <div key={index.toString()}>
                <CardImage
                  name={value.name}
                  price={value.price}
                  image={value.image}
                  category={value.category}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
export default HomePage;
