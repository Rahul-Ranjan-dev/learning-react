import Card from './cards.jsx'
export default function AmazonCards(){
    return(
        <>
        <Card 
  title="Smartphone X" 
  description="Latest 5G smartphone with AMOLED display" 
  oldPrice={35000} 
  newPrice={29999} 
/>

<Card 
  title="Gaming Laptop" 
  description="High performance laptop with RTX graphics" 
  oldPrice={75000} 
  newPrice={69999} 
/>

<Card 
  title="Wireless Earbuds" 
  description="Noise-cancelling earbuds with long battery life" 
  oldPrice={4500} 
  newPrice={3999} 
/>

<Card 
  title="Smartwatch Pro" 
  description="Fitness tracking smartwatch with GPS" 
  oldPrice={12000} 
  newPrice={9999} 
/>

<Card 
  title="Bluetooth Speaker" 
  description="Portable speaker with deep bass" 
  oldPrice={2800} 
  newPrice={2499} 
/>

        
        
        </>
    )
}