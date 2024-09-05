import React from 'react'
import { useParams } from 'react-router-dom';

const ProductDeatil = () => {
    const [products, setProducts] = useState();
    const {id}=useParams();
    // Fetch data when the component mounts
    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await axios.get('http://localhost:8000/getproduct${id}');
                setProducts(response.data.detail);
                toast.success("Data fetched successfully!");
            } catch (error) {
                toast.error("Failed to fetch data");
            }
        };
        getdata();
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default ProductDeatil
