const loadAnimalsApi = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_EGuAPasbAIfCCVDKvZUdyHVj84sr5NHSHPmUvo20fZfTsYrcx6lvskBcJVCq921K")
       .then((res) => res.json())
       .then((data) => displayAnimals(data))
       .catch((err) => {
         console.log("Error:", err);
       });
   };
   
   const displayAnimals = (animals) => {
    // console.log(animals);
     const animalsHTML = animals.map((animal) => getAnimal(animal));
     const container = document.getElementById("container");
     container.innerHTML = animalsHTML.join(" ");

    };
    const getAnimal = (animal) => {
    //  console.log(animal)
    return `
      
        <div class="card mb-3" id="cardBody" >
          <div class="card-header text-center">CAT BREED</div>
          <div class="card-body text-center">
            <img src="${animal.url}"><br>
            <label for="id">ANIMAL ID : ${animal.id}</label><br>
            <label>HEIGHT : ${animal.height}</label><br>
            <label>WIDTH : ${animal.width}</label><br>  
          </div>
        </div>
      
       
    `
    }
   loadAnimalsApi()

   
   