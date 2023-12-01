// // index.js
// import React, { useState } from 'react';
// import Autocomplete from '@mui/material/Autocomplete';
// import TextField from '@mui/material/TextField';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// const top100Films = [
//   { title: 'Tomato' },
//   { title: 'Onion' },
//   { title: 'Garlic' },
// ];

// function DishForm() {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [selectedIngredients, setSelectedIngredients] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log('Name:', name);
//     console.log('Description:', description);
//     console.log('Price:', price);
//     console.log('Selected Ingredients:', selectedIngredients);

//     // Additional form submission logic can be added here

//     // Reset form fields
//     setName('');
//     setDescription('');
//     setPrice('');
//     setSelectedIngredients([]);
//   };

//   return (
//     <div>
//       <header>
//         <h1>Change Menu!</h1>
//       </header>
//       <main className="main">
//         {/* Your existing dish blocks */}
//       </main>
//       <div className="add">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//           />
//           <Stack spacing={3} sx={{ width: 500 }}>
//             <Autocomplete
//               multiple
//               id="tags-standard"
//               options={top100Films}
//               getOptionLabel={(option) => option.title}
//               value={selectedIngredients}
//               onChange={(_, newValue) => setSelectedIngredients(newValue)}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   variant="standard"
//                   label="Select Ingredients"
//                   placeholder="Add Ingredients"
//                 />
//               )}
//             />
//           </Stack>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default DishForm;
