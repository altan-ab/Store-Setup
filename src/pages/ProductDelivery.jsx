import { useParams, Link } from 'react-router-dom'
import ProductDetails from './ProductDetails'

export default function ProductDelivery() {
  return (
    <div>
      <ProductDetails />
      <h3>Delivery instructions</h3>
      <p>The product will be delivered in less than 24 hours.</p>
    </div>
  )
}
