function handleSearch(){
    const SearchInputElement = document.getElementById("search-input-field")
    const searchInputValue = SearchInputElement.value
    loadPhone(searchInputValue);

}
const loadPhone= async(searchText)=>{
    const res= await fetch();
    const data= await res.json();
   displayPhone(serverData.data);

};
const displayPhone= (data)=> {
    console.log("inside displayPhone function");
     const cardContainer = document.getElementById("E");
     data.forEach( singlePhone =>{
        const productCard = document.creatElement("div");
        productCard.classList.add("card");
        productCard.innerHTML =              
           <div class="card-img">
        <img src="d:\WDD-2306\su assignment\web page\iphone.png" alt="iphone-img">

    </div>
    <div >
        <h3 class="card-title">Iphone 13 Pro Max </h3>
        <p class="card-description">  There are many variations of passages of available, but the majority have suffered </p>
        <div class="card-price">
            <span>$</span>
            <span class="price">999</span>
        </div>
        <div class="card-btn">
            <button class="btn"> Show Ditails</button>

        </div>
    </div>
        

     } )
     };
};
