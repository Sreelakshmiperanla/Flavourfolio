document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const  itemName = document.getElementById('itemName').value.trim();

    // As we dont have any API key for now, am making these variables as comments  
    
    // const itemName = document.getElementById('itemName').value;
    // const apiKey ='SREE_LAKSHMI_KEY'
    // const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
    // const fullUrl = `${apiUrl}?query=${itemName}&apiKey=${apiKey}`

    // variables ends here!!



    // This is our example JSON data Which represents the data we recieve from our Spoonacular API
    // The below JSON data contains different types of Pastas 

    const fullUrl = {
      "recipes": [
          {
              "title": "Spaghetti Carbonara",
              "summary": "Spaghetti Carbonara is a classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. It is creamy, rich, and incredibly satisfying."
          },
          {
              "title": "Penne Arrabbiata",
              "summary": "Penne Arrabbiata is a spicy Italian pasta dish made with penne pasta, tomatoes, garlic, and red chili peppers. It is known for its bold and fiery flavor."
          },
          {
              "title": "Fettuccine Alfredo",
              "summary": "Fettuccine Alfredo is a creamy pasta dish made with fettuccine noodles, butter, heavy cream, and Parmesan cheese. It is rich, indulgent, and comforting."
          },
          {
              "title": "Lasagna",
              "summary": "Lasagna is a classic Italian pasta dish made with layers of lasagna noodles, meat sauce, ricotta cheese, mozzarella cheese, and Parmesan cheese. It is hearty and satisfying."
          },
          {
              "title": "Pasta Primavera",
              "summary": "Pasta Primavera is a light and refreshing pasta dish made with a variety of fresh vegetables, such as bell peppers, zucchini, cherry tomatoes, and peas, tossed in a light sauce."
          },
          {
              "title": "Linguine with Clam Sauce",
              "summary": "Linguine with Clam Sauce is an Italian pasta dish made with linguine noodles, clams, garlic, white wine, and parsley. It is savory, briny, and perfect for seafood lovers."
          },
          {
              "title": "Rigatoni Bolognese",
              "summary": "Rigatoni Bolognese is a hearty pasta dish made with rigatoni noodles, a rich meat sauce made with ground beef, tomatoes, onions, carrots, celery, and red wine."
          },
          {
              "title": "Pesto Pasta",
              "summary": "Pesto Pasta is a flavorful pasta dish made with your choice of pasta tossed in a fresh basil pesto sauce made with basil, garlic, pine nuts, Parmesan cheese, and olive oil."
          },
          {
              "title": "Cacio e Pepe",
              "summary": "Cacio e Pepe is a simple yet delicious Roman pasta dish made with spaghetti, Pecorino Romano cheese, and black pepper. It is creamy and peppery."
          },
          {
              "title": "Tortellini in Brodo",
              "summary": "Tortellini in Brodo is a traditional Italian soup made with small ring-shaped pasta stuffed with meat or cheese, served in a clear broth."
          }
      ]
  }


  // This function is used to check how we can handle the incoming data based on our query, This can be from here to

async function getQuery(query){
  console.log('Query:', query);
   try{

     const differentRecipe = fullUrl.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
     );
       addData(differentRecipe);
   }
   catch(error){
    console.error('error fetching data', error);
   }

}
const query = itemName.trim(); 
    if (query !== '') {
        getQuery(query);
    } else {
        console.log('Empty query, please enter a recipe name.');
    }

// -to here after getting our API key! 
  

// Commenting the below 'GET request to demonstrate how our code works to handle the incomming JSON Data
    
//     try{
//       const response = await fetch(fullUrl, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//        });
  
//         if(!response.ok){
//           throw new Error('Response was not ok');
//           }
//          const data = await response.json();
//          addData(data.results);
         
//        }
//        catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//        }
// Our API handling ends here! 

 });



function addData(data){
    const container = document.getElementById('container');
    container.innerHTML ='';

    data.forEach(recipe => {

        const recipeDiv = document.createElement('div');
        recipeDiv.className = 'recipeDiv';

        const recipeTitle = document.createElement('h2');
        recipeTitle .textContent = recipe.title;
        recipeDiv.appendChild(recipeTitle);

        const recipeContent = document.createElement('p');
        recipeContent.textContent = recipe.summary;
        recipeDiv.appendChild(recipeContent);

        container.appendChild(recipeDiv);
        
    });

}
});





