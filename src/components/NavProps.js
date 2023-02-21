import { useEffect, useState } from "react";
import ProdCard from "./ProdCard";

function NavProps(props) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://63e3eea365ae4931771adf9f.mockapi.io/api/get/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
        console.log(json);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;
  return (
    <>
      <div className="plp-header">
        <h1>{props.page}</h1>
        <img src={props.imgUrl} alt="" />
      </div>
      <div className="plp-body">
        <div className="plp-products">
          {data.map((prod) => (
            <ProdCard {...prod} />
          ))}
        </div>
      </div>
    </>
  );
}
export default NavProps;